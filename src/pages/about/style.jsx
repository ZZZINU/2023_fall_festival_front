// style.jsx

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  justify-content: center;
  background: #f2e3b3;
  color: #3f190e; /* 텍스트 색상을 주어진 컬러로 설정 */
`;

export const StyledParagraph = styled.p`
  font-size: 40px;
  font-weight: bolder;
`;
