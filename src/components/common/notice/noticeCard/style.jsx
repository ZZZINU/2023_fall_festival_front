//NoticeCard-Style.jsx
import { styled } from "styled-components";

export const CardWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 3px solid red; */
`;

export const CardBox = styled.div`
  display: flex;
  width: 306px;
  height: 150px;
  margin-top: 26px;
  padding: 15px 20px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const CardImg = styled.div`
  display: flex;
  width: 125px;
  height: 125px;
  flex-shrink: 0;
  border-radius: 20px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 140px;
  height: 46px;
  color: #553c2e;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* border: 1px solid red; */
`;

export const Body = styled.div`
  margin-top: 7px;
  width: 140px;
  color: #8c847f;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
