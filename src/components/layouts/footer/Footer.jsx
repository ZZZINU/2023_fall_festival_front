import React from "react";
import * as S from "./style";

function Footer() {
  return (
    <S.FooterWrapper>
      <S.NotoSans>
        <span>NotoSans/노토산스</span>
        <S.NotoSansMedium>Medium</S.NotoSansMedium>
        <S.NotoSansRegular>Regular</S.NotoSansRegular>
      </S.NotoSans>
      <S.GmarketSans>
        <span>GmarketSans/지마켓산스</span>
        <S.GmarketSansMedium>Regular</S.GmarketSansMedium>
        <S.GmarketSansLight>Light</S.GmarketSansLight>
      </S.GmarketSans>
      <S.Dongguk>dongguk/동국체</S.Dongguk>
      <S.Color>색깔적용참고</S.Color>
    </S.FooterWrapper>
  );
}

export default Footer;
