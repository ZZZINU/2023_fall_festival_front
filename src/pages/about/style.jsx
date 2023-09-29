// style.jsx

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow-y: scroll;
  /* background-image: url("/About/about_bgimg.png");
  background-size: 100%; */
`;

export const WithWho = styled.img`
  width: 60%;
`;

export const IntroduceText = styled.div`
  font-size: 10px;
  font-family: NotoSans;
  color: #282828;
  margin-top: 45px;
  line-height: 14px;
`;

export const line = styled.img`
  width: 75%;
  margin-top: 50px;
`;

export const IntroPd = styled.img`
  margin-top: 50px;
  width: 70%;
`;

export const IntroFE = styled.img`
  margin-top: 50px;
  width: 70%;
`;

export const IntroBE = styled.img`
  margin-top: 50px;
  width: 70%;
`;

export const IntroEC = styled.img`
  margin-top: 50px;
  width: 70%;
`;
