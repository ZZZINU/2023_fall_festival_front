import React from "react";
import * as S from "./style";
import insta from "../../../assets/images/footer_insta.png";
import github from "../../../assets/images/footer_github.png";

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterLine>
        <S.Line />
      </S.FooterLine>
      <S.FooterDguEng>@DGU Likelion. All rights Reserved.</S.FooterDguEng>
      <S.FooterDguKor>동국대학교 멋쟁이사자처럼</S.FooterDguKor>
      <S.FooterLogo>
        <a
          href="https://www.instagram.com/likelion_dongguk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.FooterInsta src={insta} alt="Instagram" />
        </a>
        <a
          href="https://github.com/LikeLion-at-DGU"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.FooterGithub src={github} alt="GitHub" />
        </a>
      </S.FooterLogo>
    </S.FooterWrapper>
  );
}

export default Footer;
