import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 420px;
  height: 60px;

  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px;
  /* 배경 그라디언트 */

  background-image: url("/background.svg");
  background-size: 100%;
  background-repeat: repeat;

  font-family: Dongguk;
  * {
    color: white;
  }
`;
