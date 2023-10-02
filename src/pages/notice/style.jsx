//Notice style.jsx
import { styled } from "styled-components";

export const NoticeWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const NoticeBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px 30px 30px;

  border-radius: 35px;
  background: rgba(255, 255, 255, 0.97);

  /* height: 700px;
  overflow-y: scroll; */
`;

export const CategoryWarp = styled.div`
  display: flex;
  flex-direction: row;
  font-family: DONGGUK UNIVERSITY;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 13px;
`;

export const NoticeCategory = styled.div`
  color: ${props => props.color};
  border-bottom: 2px solid ${props => props.borderbottom};
  padding-bottom: 3px;
  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;
  width: 300px;
  height: 0px;
  margin-top: 20px;
  border: 0.9px solid #8c847f;
`;
