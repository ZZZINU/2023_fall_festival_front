import styled from "styled-components";

export const MapWrap = styled.div`
  margin-top: 20px;
`;

export const MapBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 273px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.7);
`;

export const MapImg = styled.img`
  display: flex;
  width: 346px;
  height: 203px;
`;

export const MapBoxContent = styled.div`
  display: flex;
  color: #553c2e;
  text-align: center;
  font-family: Dongguk;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;

// 부스 카테고리
export const BoothCategryWrap = styled.div`
  display: flex;
  color: #ffb2b2;
  font-family: dongguk;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin-top: 38px;
  gap: 10px;
`;

export const BoothCategry = styled.div`
  color: ${props => props.color};
  border-bottom: 2px solid ${props => props.borderbottom};
  padding-bottom: 3px;
  cursor: pointer;
`;

// 부스 카드
export const BoothCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 155px;
  height: 245px;
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);
  border-radius: 20px;
  margin-top: 36px;
  overflow: hidden;
`;

export const BoothCardImage = styled.img`
  display: flex;
  width: 155px;
  height: 155px;
  border-radius: 10px;
`;

export const BoothCardDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const BoothCardDetailTitle = styled.div`
  display: flex;
  color: #553c2e;
  font-family: NotoSansMedium;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
`;

export const BoothCardDetailDes = styled.div`
  display: flex;
  margin-top: 5px;
  color: #8c847f;
  font-family: NotoSansRegular;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  align-self: center;
  align-items: self-start;
  flex-grow: 1;
`;

export const BoothCardDetailAddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const BoothDetailLocationWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const BoothDetailLocation = styled.img`
  display: flex;
  width: 14px;
  height: 14px;
`;

export const BoothDetailLocationContent = styled.div`
  display: flex;
  color: #8c847f;
  font-family: NotoSansRegular;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  margin-left: 3px;
`;

export const BoothDetailHeartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const BoothDetailHeart = styled.img`
  display: flex;
  width: 14px;
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

export const BoothCardRibbon = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 57px;
  height: 24px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e0747b;
  color: #fff;
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;
