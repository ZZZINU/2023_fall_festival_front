//Notice style.jsx
import { styled } from "styled-components";
import { NoticeBox, CategoryWarp, NoticeCategory, Line } from "../notice/style";

export const NoticeWrappper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PromotionBox = styled(NoticeBox)``;
export const CategoryWarp_ = styled(CategoryWarp)``;
export const PromotionCategory = styled(NoticeCategory)``;
export const Line_ = styled(Line)``;
