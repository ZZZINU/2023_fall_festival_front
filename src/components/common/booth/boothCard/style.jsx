import styled from "styled-components";

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
  padding-top: 7px;
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
  align-items: self-start;
  flex-grow: 1;
  min-height: 30px;
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
  height: 24px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${props => props.color};
  color: ${props => props.fontcolor};
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
`;

export const BoothCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
