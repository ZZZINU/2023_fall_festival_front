import { styled } from "styled-components";

export const MainContainer = styled.div`
  background-image: url("/Main/main_bgimg.png");
  background-size: 100%;
  width: 100%;
  height: 100%;
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
  animation: floating 10s infinite;
  transition: transform 1s ease-in-out;

  @keyframes floating {
    0%,
    100% {
      transform: translateY(0) translateX(0);
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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

//라인업 스타일 컴포넌트

export const Boothceleb = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CelebEleven = styled.img`
  width: 70%;
  margin-top: 10px;
`;

export const CelecbTwelve = styled.img`
  width: 35%;
  margin-top: 10px;
`;

//방명록

export const MainGuestBook = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const MainGuestWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const MainGusetBookBg = styled.img`
  margin-top: 35px;
  width: 85%;
  height: 300px;
  border-radius: 20px;
  margin: 20px;
`;

export const FirstGuestBook = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`;
export const SecondGuestBook = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`;
