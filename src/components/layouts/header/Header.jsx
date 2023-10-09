import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";
import line from "../../../assets/images/line.svg";
import icon_close from "../../../assets/images/icon-close.svg";
import icon_open from "../../../assets/images/icon-open.svg";

function Header() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // // CountdownTimer 페이지일 때는 헤더를 숨김
  // if (location.pathname === "/countdown") {
  //   return null;
  // }

  // 컴포넌트의 최상위 레벨에서 useRef와 useState를 사용
  const sideBarRef = useRef();
  const sideBarBackgroundRef = useRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function openSideBar() {
    if (isSideBarOpen) {
      setIsSideBarOpen(false);
    } else {
      setIsSideBarOpen(true);
    }
  }

  function closeSideBar() {
    setIsSideBarOpen(false);
  }

  useEffect(() => {
    if (isSideBarOpen) {
      sideBarRef.current.style.display = "flex";
      sideBarBackgroundRef.current.style.display = "flex";
    } else {
      sideBarRef.current.style.display = "none";
      sideBarBackgroundRef.current.style.display = "none";
    }
  }, [isSideBarOpen]);

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Link to="/">야단법석 : 2023 가을축제</Link>
        {isSideBarOpen ? (
          <S.imgBtnWrapper>
            <S.imgBtn onClick={openSideBar} src={icon_close}></S.imgBtn>
          </S.imgBtnWrapper>
        ) : (
          <S.imgBtnWrapper>
            <S.imgBtn onClick={openSideBar} src={icon_open}></S.imgBtn>
          </S.imgBtnWrapper>
        )}
      </S.HeaderContent>

      <S.SideBarWrapper ref={sideBarRef}>
        <img src={line} />
        <S.SideBarContent>
          <Link to="/" onClick={closeSideBar}>
            메인 페이지
          </Link>
          <Link to="/notification" onClick={closeSideBar}>
            공지 및 홍보
          </Link>
          <Link to="/timeLine" onClick={closeSideBar}>
            타임 테이블
          </Link>
          <Link to="/booths" onClick={closeSideBar}>
            부스 정보
          </Link>
          <Link to="/guestBook" onClick={closeSideBar}>
            방명록
          </Link>
          <Link to="/about" onClick={closeSideBar}>
            함께한 사람들
          </Link>
        </S.SideBarContent>
      </S.SideBarWrapper>
      <S.SideBarBackground ref={sideBarBackgroundRef} onClick={closeSideBar} />
    </S.HeaderWrapper>
  );
}

export default Header;
