import { styled } from "styled-components";

//TopBoothCard.jsx

export const TopContainer = styled.div`
  width: 80%;
  margin-top: ${props => props.marginTop || "20px"};
  cursor: pointer;
`;

export const BoothLogo = styled.img`
  width: ${props =>
    props.width ||
    "130px"}; /* 기본값으로 130px를 설정하고 props.width가 있으면 그 값을 사용합니다. */
  border-radius: 20px;
`;

export const BoothBg = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${props =>
    props.width ||
    "130px"}; /* 기본값으로 130px를 설정하고 props.width가 있으면 그 값을 사용합니다. */
  height: ${props => props.height || "210px"};
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 20px;
  overflow: hidden;
`;

export const BoothGrade = styled.img`
  position: absolute;
  display: flex;
  width: 10%;
  top: 7px;
  left: 10px;
`;

export const BoothType = styled.div`
  display: flex;
  position: absolute;
  /* top: 130px;
  right: 150px; */
  top: 7px;
  right: 7px;
  height: 20px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e0747b;
  color: #fff;
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 5px;
  font-weight: 500;
  line-height: normal;
`;

export const BoothInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BoothTitle = styled.div`
  margin-left: 10px;
  margin-top: 3px;
  font-size: ${props =>
    props.fontSize || "12px"}; // Use the fontSize prop or default to 15px
`;

export const BoothDescript = styled.div`
  display: flex;
  color: #8c847f;
  font-family: NotoSansMedium;
  font-size: 10px;
  font-weight: lighter;
  line-height: 16px;
  margin-left: 10px;
`;

export const BoothEtcWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const BoothLocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoothLocationPin = styled.img`
  width: ${props => props.width || "10px"};
  margin-left: 10px;
  /* margin-top: 15px; */
`;

export const BoothLocationContent = styled.div`
  display: flex;
  color: #8c847f;
  font-family: NotoSansRegular;
  font-size: ${props => props.fontSize || "7px"};
  font-weight: 400;
  line-height: normal;
  margin-left: 3px;
`;

export const BoothHeartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 5px;
`;

export const BoothDetailHeart = styled.img`
  display: flex;
  width: ${props => props.width || "11px"};
  height: 14px;
`;

export const BoothDetailHeartNum = styled.div`
  display: flex;
  color: #dd7481;
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  margin-left: 3px;
`;
