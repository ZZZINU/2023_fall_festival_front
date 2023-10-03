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

  // Link 클릭 시 사이드바를 닫음
  function closeSideBar() {
    setIsSideBarOpen(false);
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
        <Link to="">야단법석</Link>
        {isSideBarOpen ? (
          <img onClick={openSideBar} src="./navBar/icon_close.png"></img>
        ) : (
          <img onClick={openSideBar} src="./navBar/icon_open.png"></img>
        )}
      </S.HeaderContent>

      <S.SideBarWrapper ref={sideBarRef}>
        <img src="./navBar/line.png" />
        <S.SideBarContent>
          <Link to="/" onClick={closeSideBar}>
            메인
          </Link>
          <Link to="/notification" onClick={closeSideBar}>
            공지
          </Link>
          <Link to="/timeLine" onClick={closeSideBar}>
            타임라인
          </Link>
          <Link to="/booths" onClick={closeSideBar}>
            부스
          </Link>
          <Link to="/guestBook" onClick={closeSideBar}>
            방명록
          </Link>
          <Link to="/about" onClick={closeSideBar}>
            어바웃
          </Link>
        </S.SideBarContent>
      </S.SideBarWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
