import React from 'react'
import styled from 'styled-components';
import { GlobalStyle } from './style/globalStyle';

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/background.svg");
  background-size: 100%;
  background-repeat: repeat;

  color: #ffeded;
  font-size: 35px;
  font-family: NotoSansMedium;
`;

export default function NotFound() {
  return (
    <>
    <GlobalStyle />
      <BackGroundColor>
        <img src="/notFound.png" alt="404 error" style={{ width: "50vw" }} />
        <br />Sorry, <br />the page not found
      </BackGroundColor>
    </>
  );
}
