// style.jsx

import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  overflow-y: scroll;
`;

export const WithWho = styled.img`
  width: 70%;
  position: relative;
  z-index: 99;
`;

export const IntroduceText = styled.div`
  font-size: 10px;
  font-family: NotoSans;
  /* color: #282828; */
  color: unset;
  margin-top: 45px;
  line-height: 14px;
  position: relative;
  z-index: 1;
`;

export const line = styled.img`
  width: 75%;
  margin-top: 50px;
`;

export const IntroPd = styled.img`
  margin-top: 50px;
  width: 85%;
  position: relative;
  z-index: 99;
`;

export const IntroFE = styled.img`
  margin-top: 50px;
  width: 85%;
  position: relative;
  z-index: 99;
`;

export const IntroBE = styled.img`
  margin-top: 50px;
  width: 85%;
  position: relative;
  z-index: 99;
`;

export const IntroEC = styled.img`
  margin-top: 50px;
  width: 85%;
  position: relative;
  z-index: 99;
`;
