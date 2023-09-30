import React, { useState } from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";

function NoticeHeader() {
  // 경로에 따라 현재 선택된 카테고리를 결정하기 위해 useLocation 훅 사용
  const location = useLocation();
  const path = location.pathname;

  // 현재 경로에 따라 기본 카테고리 설정
  const [dayOrNight, setDayOrNight] = useState(
    path === "/promotion" ? "홍보" : "공지"
  );

  return (
    <>
      <S.NoticeTopWrappper>
        <S.MainCategry
          dayornight={dayOrNight}
          onClick={() => setDayOrNight("공지")}
          color={dayOrNight === "공지" ? "#ffb2b2" : "#8C847FB2"}
        >
          <Link to="/notice">공지</Link>
        </S.MainCategry>
        <S.MainCategry
          dayornight={dayOrNight}
          onClick={() => setDayOrNight("홍보")}
          color={dayOrNight === "홍보" ? "#ffb2b2" : "#8C847FB2"}
        >
          <Link to="/promotion">홍보</Link>
        </S.MainCategry>
      </S.NoticeTopWrappper>
    </>
  );
}

export default NoticeHeader;
