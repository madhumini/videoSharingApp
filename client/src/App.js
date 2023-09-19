import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, styled } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const Layout = () => {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Outlet />
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home type="random" />,
        },
        {
          path: "/trends",
          element: <Home type="trend" />,
        },
        {
          path: "/subscriptions",
          element: <Home type="sub" />,
        },
        {
          path: "/video/:id",
          element: <Video />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
