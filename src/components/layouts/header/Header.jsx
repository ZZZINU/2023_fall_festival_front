import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function Header() {
  const sideBarRef = useRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function openSideBar() {
    if (isSideBarOpen) {
      setIsSideBarOpen(false);
    } else {
      setIsSideBarOpen(true);
    }
  }
  useEffect(() => {
    if (isSideBarOpen) {
      sideBarRef.current.style.display = "flex";
    } else {
      sideBarRef.current.style.display = "none";
    }
  }, [isSideBarOpen]);
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <>야단법석</>
        {isSideBarOpen ? (
          <img onClick={openSideBar} src="./navBar/icon_close.png"></img>
        ) : (
          <img onClick={openSideBar} src="./navBar/icon_open.png"></img>
        )}
      </S.HeaderContent>

      <S.SideBarWrapper ref={sideBarRef}>
        <img src="./navBar/line.png" />
        <S.SideBarContent>
          <Link to="/">메인</Link>
          <Link to="/notice">공지</Link>
          <Link to="/timeLine">타임라인</Link>
          <Link to="/booths">부스</Link>
          <Link to="/guestBook">방명록</Link>
          <Link to="/about">어바웃</Link>
        </S.SideBarContent>
      </S.SideBarWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
