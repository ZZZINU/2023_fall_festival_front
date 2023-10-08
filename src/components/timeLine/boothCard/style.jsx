import styled, { keyframes } from "styled-components";

const LeftIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const RightIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const BoothWhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props =>(props.isbooth)};

  border-radius: 10px;
  background: #fff;
  border: 1px solid ${props => (props.isnow == "true" ? "#EA6F60" : "#FFFAEA")};
  margin-bottom: 12px;
  padding: 12px 8px;

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }

  animation: ${LeftIn} 0.5s ease-in-out;
`;
export const PerformanceWhiteBox = styled(BoothWhiteBox)`
  margin-left: auto;
  height: 73px;

  animation: ${RightIn} 0.5s ease-in-out;
`;
export const BoothCardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const BoothImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 50px;

  border-radius: 10px;
  background: ${props => (props.isnow == "true" ? "#FFDFDB" : "#fff6db")};
  color: ${props => (props.isnow == "true" ? "#EA6F60" : "#FAA73F")};
  span {
    font-size: 1.8rem;
  }
`;
export const BoothTxt = styled.div`
  width: 100%;
`;
export const BoothTitle = styled.div`
  padding: 0 6px;
  color: #282828;
`;
export const PerfomanceTitle = styled(BoothTitle)`
  padding-left: ${props => props.islong};
  padding-right: ${props => props.islong};
`;
export const BoothPlace = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  color: #8c847f;
  font-size: 0.8rem;
  font-weight: 200;
  margin-top: 5px;
  img {
    margin-right: 5px;
    object-fit: contain;
    height: 14px;
  }
  @media (max-width: 375px) {
    font-size: 0.7rem;
  }
`;
export const BoothBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background: ${props => (props.isnow == "true" ? "#EA6F60" : "#faa73f")};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
  margin-top: 10px;
`;
