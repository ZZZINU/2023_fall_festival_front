import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;

  top: 0;
  width: 100%;
  max-width: 420px;
  height: 60px;

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

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SideBarWrapper = styled.div`
  position: relative;
  display: none;
  flex-direction: column;

  img {
    position: absolute;
  }
`;
