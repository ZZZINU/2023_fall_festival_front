import React from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";

function NoticeCard({ data }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(data);

  return (
    <>
      <S.CardWrappper onClick={() => navigate(`${pathname}/${data.id}`)}>
        <S.CardBox>
          <S.CardImg src={data.thumbnail} />
          <S.TextWrapper>
            {/* 18자 제한 넘어가면 자르기 or 12자 이후 3dots + 공지 뒤는 데이터 */}
            <S.Title>
              {pathname == "/notification" && "[공지] "}
              {data.title.length > 16
                ? data.title.slice(0, 16) + "..."
                : data.title}
            </S.Title>
            <S.Body>
              {/* 공백 포함 58자 */}
              {data.content.length > 45
                ? data.content.slice(0, 45) + " ..."
                : data.content}
            </S.Body>
          </S.TextWrapper>
        </S.CardBox>
      </S.CardWrappper>
    </>
  );
}

export default NoticeCard;
