import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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

  // Link 클릭 시 사이드바를 닫음
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
        <Link to="">야단법석 : 2023 가을축제</Link>
        {isSideBarOpen ? (
          <S.imgBtnWrapper>
            <S.imgBtn
              onClick={openSideBar}
              src="./navBar/icon-close.svg"
            ></S.imgBtn>
          </S.imgBtnWrapper>
        ) : (
          <S.imgBtnWrapper>
            <S.imgBtn
              onClick={openSideBar}
              src="./navBar/icon-open.svg"
            ></S.imgBtn>
          </S.imgBtnWrapper>
        )}
      </S.HeaderContent>

      <S.SideBarWrapper ref={sideBarRef}>
        <img src="./navBar/line.svg" />
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
