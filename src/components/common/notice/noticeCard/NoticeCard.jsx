import React from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";

function NoticeCard({ data }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const fixedtitle = title => {
    let newtitle = title;
    if (pathname == "/notification" && title.length > 10) {
      newtitle = "[공지] " + newtitle.slice(0, 10) + " ...";
    } else if (pathname == "/notification" && title.length <= 10) {
      newtitle = "[공지] " + newtitle;
    } else if (pathname == "/promotion" && title.length > 14) {
      newtitle = newtitle.slice(0, 14) + " ...";
    }
    return newtitle;
  };

  return (
    <>
      <S.CardWrappper onClick={() => navigate(`${pathname}/${data.id}`)}>
        <S.CardBox>
          <S.CardImg img={data.thumbnail} />
          <S.TextWrapper>
            {/* 18자 제한 넘어가면 자르기 or 12자 이후 3dots + 공지 뒤는 데이터 */}
            <S.Title>{fixedtitle(data.title)}</S.Title>
            <S.Body>
              {/* 공백 포함 58자 */}
              {data.content.length > 35
                ? data.content.slice(0, 35) + " ..."
                : data.content}
            </S.Body>
          </S.TextWrapper>
        </S.CardBox>
      </S.CardWrappper>
    </>
  );
}

export default NoticeCard;
