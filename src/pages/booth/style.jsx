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
  cursor: pointer;
`;

// 부스 카테고리
export const BoothCategryWrap = styled.div`
  display: flex;
  color: #ffb2b2;
  font-family: dongguk;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-top: 38px;
  margin-bottom: 30px;
  gap: 10px;
`;

export const BoothCategry = styled.div`
  color: ${props => props.color};
  border-bottom: 2px solid ${props => props.borderbottom};
  padding-bottom: 3px;
  cursor: pointer;
`;
