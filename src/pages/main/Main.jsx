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
        <S.MainBanner>
          <PageTitle mainTitle={"홍보 배너"} />
        </S.MainBanner>
      </S.MainContainer>
    </>
  );
}

export default Main;
