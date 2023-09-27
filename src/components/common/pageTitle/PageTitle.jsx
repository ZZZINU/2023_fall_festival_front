import React from "react";
import * as S from "./style";

function PageTitle(props) {
  return (
    <S.PageTitleWrapper>
      <img src="/pageTitle_lotus.png"></img>
      <S.PageTitle_Main>{props.mainTitle}</S.PageTitle_Main>
      {props.subTitle ? (
        <S.PageTitle_Sub>{props.subTitle}</S.PageTitle_Sub>
      ) : (
        <></>
      )}
    </S.PageTitleWrapper>
  );
}

export default PageTitle;
