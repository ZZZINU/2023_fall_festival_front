import { styled, keyframes } from "styled-components";

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
  width: 130px;
  height: auto;
  animation: floating 10s infinite; /* 애니메이션 지속 시간 늘림 */
  transition: transform 1s ease-in-out;

  @keyframes floating {
    0%,
    100% {
      transform: translateY(0) translateX(0); /* 좌우, 대각선으로 이동 */
    }
    25% {
      transform: translateY(-10px) translateX(-10px);
    }
    50% {
      transform: translateY(10px) translateX(-10px);
    }
    75% {
      transform: translateY(-10px) translateX(10px);
    }
  }
`;

export const MainBanner = styled.div`
  position: relative;
  margin-top: 200%;
`;

export const MainBoothGrade = styled.div`
  position: relative;
  margin-top: 10%;
`;

//TopBooth의 스타일 컴포넌트

export const BoothCardContainer = styled.div`
  display: flex; /* 가로로 배치하기 위해 flexbox를 사용합니다. */
  justify-content: space-between; /* 부스 카드 사이에 여백을 자동으로 생성합니다. */
  align-items: center; /* 세로 방향 가운데 정렬합니다. */
  width: 100%;
  flex-direction: row;
  flex: 1;
`;

export const Booth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: initial;
`;
