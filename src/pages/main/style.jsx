import { styled } from "styled-components";

export const MainContainer = styled.div`
  background-image: url("/Main/main_bgimg.png");
  background-size: 100%;
  width: 100%;
  height: 2767px;
  background-repeat: no-repeat;
  position: relative;
`;

export const FloatingImagesContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const FloatingImage = styled.img`
  width: 120px;
  height: auto;
  animation: floating 4s infinite; /* 애니메이션 지속 시간 늘림 */
  transition: transform 0.3s ease-in-out;

  @keyframes floating {
    0%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-20px);
    }
    75% {
      transform: translateY(20px);
    }
  }

  &:hover {
    transform: translateY(-20px);
  }
`;

export const MainBanner = styled.div`
  position: relative;
  margin-top: 200%;
`;
