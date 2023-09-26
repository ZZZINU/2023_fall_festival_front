import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Header() {
  return (
    <S.HeaderWrapper>
      <Link to="/">메인</Link>
      <Link to="/notice">공지</Link>
      <Link to="/timeLine">타임라인</Link>
      <Link to="/booth">부스</Link>
      <Link to="/guestBook">방명록</Link>
      <Link to="/about">어바웃</Link>
    </S.HeaderWrapper>
  );
}

export default Header;
