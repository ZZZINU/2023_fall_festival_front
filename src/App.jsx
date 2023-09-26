// App.jsx
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";

const BackGroundColor = styled.div`
  width: 100vw;

  background-color: black;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 420px;
  background-color: #202029;

  * {
    /* border: 1px solid black; */
  }
`;

const Layout = () => {
  return (
    <BackGroundColor>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
