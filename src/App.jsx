// App.jsx
import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 420px;
  background-color: white;

  /* 기본 폰트설정 */
  font-family: NotoSansRegular;
  color: ${props => props.theme.colors.fontBlack};

  /* 배경 그라디언트 */
  background-image: url("/background.svg");
  background-size: 100%;
  background-repeat: repeat;
`;
const Content = styled.div`
  flex-grow: 1;
  min-height: 100%;
  width: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <BackGroundColor>
      <Header />
      <Wrapper>
        <Content>
          <Outlet />
        </Content>

        <Footer />
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
