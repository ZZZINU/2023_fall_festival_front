//Notice style.jsx
import { styled } from "styled-components";

// export const NoticeTitle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 90%;
//   border-radius: 20px;
//   background: #ffffff;
// `;

export const NoticeTopWrappper = styled.div`
  /* border: 3px solid yellow; */
  display: flex;
  margin-top: 38px;
  margin-bottom: 6px;
  gap: 15px;
`;

export const MainCategry = styled.div`
  color: ${props => props.color};
  padding-bottom: 8px;
  font-family: Dongguk;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
