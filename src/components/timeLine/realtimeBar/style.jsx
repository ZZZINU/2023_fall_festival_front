import { styled, keyframes } from "styled-components";

const slideUpAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateY(20px);
  }
  33.33% {
    opacity: 1;
    transform: translateY(0);
  }
  66.67% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
  /* 0%, 100% {
    opacity: 0;
    transform: translateY(20px);
  }
  10%, 90% {
    opacity: 1;
    transform: translateY(0);
  } */
`;

export const TimeTableNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 43px;
  border-radius: 10px;
  background: #ea6f60;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);

  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;
export const TimeTableMainTxt = styled.div`
  font-family: "Dongguk";
  font-size: 0.9rem;

  animation: ${props => props.isseveral > 0 && slideUpAnimation} 3s ease-in-out
    infinite;

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;
export const TimeTableSubTxt = styled.div`
  position: absolute;
  left: 10px;
  color: #ffced1;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${props => props.isseveral > 0 && slideUpAnimation} 3s ease-in-out
    infinite;

  img {
    height: 30px;

    @media (max-width: 375px) {
      height: 25px;
    }
  }
`;
export const TimeTableSubTxt2 = styled.div`
  position: absolute;
  right: 20px;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${props => props.isseveral > 0 && slideUpAnimation} 3s ease-in-out
    infinite;
`;
export const LocationIMG = styled.img`
  margin-right: 5px;
  height: 14px;
`;
