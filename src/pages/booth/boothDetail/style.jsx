import styled from "styled-components";

export const BoothDetailWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  width: 360px;
  min-height: 700px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  padding-bottom: 25px;
`;

export const BoothDetailTitle = styled.div`
  display: flex;
  width: 330px;
  padding: 5px 99px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #fff;
  color: #553c2e;
  text-align: center;
  font-family: NotoSansMedium;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  margin-top: 25px;
`;

export const BoothDetailImage = styled.img`
  width: 330px;
  height: 330px;
  border-radius: 20px;
  margin-top: 20px;
`;

export const BoothDetailRibbon = styled.div`
  display: flex;
  position: absolute;
  top: 110px;
  right: 35px;
  height: 34px;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e0747b;
  color: #fff;
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;

export const BoothDetailFunctionWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  justify-content: space-between;
  padding: 0px 15px;
`;
export const BoothDetailHeartWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1.5px solid ${props => props.background};
  background: ${props => props.background};
  padding: 5px 10px;
  cursor: pointer;
`;
export const BoothDetailHeart = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
`;
export const BoothDetailHeartNum = styled.div`
  display: flex;
  color: ${props => props.color};
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;
export const BoothDetailSNSWrap = styled.div`
  display: flex;
  gap: 7px;
`;

export const BoothDetailSNS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
`;

export const BoothDetailImg = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
`;

// 부스 상세 내용
export const BoothDetailContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0px 15px;
`;

// 부스 상세 내용 - 날짜
export const BoothDetailContentDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoothDetailContentDate = styled.div`
  color: #553c2e;
  font-family: NotoSansRegular;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
export const BoothDetailContentLocationWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoothDetailContentLocation = styled.div`
  color: #553c2e;
  font-family: NotoSansRegular;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
export const BoothDetailContent = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const BoothDetailContentImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;
