//NoticeCard-Style.jsx
import { styled } from "styled-components";

export const CardWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 150px;
  margin-top: 26px;
  padding: 15px 20px;
  gap: 10px;
  border-radius: 20px;
  background: var(--white, #fff);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`;

export const CardImg = styled.div`
  width: 50%;
  height: 125px;
  border-radius: 20px;

  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;

  /* object-fit: cover; */
  /* background: lightgray 50%; */
`;

export const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #553c2e;
  font-family: Noto Sans KR;
  font-size: 16px;
`;

export const Body = styled.div`
  margin-top: 7px;
  color: #8c847f;
  font-family: Noto Sans KR;
  font-size: 12px;
`;
