import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./style";

import { Pagination } from "swiper/modules";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";

//component import
import PageTitle from "../../components/common/pageTitle/PageTitle";
import MainBanner from "../../components/Main/MainBanner";
import TopBooth from "../../components/Main/TopBooth";

function Main() {
  return (
    <>
      <S.MainContainer>
        <S.FloatingImagesContainer>
          <S.FloatingImage
            src="/Main/main_ya.png"
            alt="야"
            style={{ animationDelay: "0s" }}
          />
          <S.FloatingImage
            src="/Main/main_dan.png"
            alt="단"
            style={{ animationDelay: "1s" }}
          />
          <S.FloatingImage
            src="/Main/main_beop.png"
            alt="법"
            style={{ animationDelay: "2s" }}
          />
          <S.FloatingImage
            src="/Main/main_seok.png"
            alt="석"
            style={{ animationDelay: "2.5s" }}
          />
        </S.FloatingImagesContainer>
        <S.MainBanner>
          <PageTitle mainTitle={"홍보 배너"} />
          <MainBanner />
        </S.MainBanner>
        <S.MainBoothGrade>
          <PageTitle mainTitle={"실시간 부스 순위"} />
          <S.Booth>
            <TopBooth />
          </S.Booth>
        </S.MainBoothGrade>
      </S.MainContainer>
    </>
  );
}

export default Main;
