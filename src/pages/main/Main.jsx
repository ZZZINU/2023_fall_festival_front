import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./style";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";
import PageTitle from "../../components/common/pageTitle/PageTitle";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./swiper.css";

function Main() {
  return (
    <>
      <S.MainContainer>
        <S.FloatingImagesContainer>
          <S.FloatingImage src="/Main/main_ya.png" alt="Image 1" />
          <S.FloatingImage src="/Main/main_dan.png" alt="Image 2" />
          <S.FloatingImage src="/Main/main_beop.png" alt="Image 3" />
          <S.FloatingImage src="/Main/main_seok.png" alt="Image 4" />
        </S.FloatingImagesContainer>
        <S.MainBanner>
          <PageTitle mainTitle={"홍보 배너"} />
        </S.MainBanner>
      </S.MainContainer>
    </>
  );
}

export default Main;
