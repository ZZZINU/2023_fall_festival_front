import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./style";

import { Pagination } from "swiper/modules";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";

//component import
import PageTitle from "../../components/common/pageTitle/PageTitle";
import MainBanner from "../../components/Main/MainBanner";

// 더미 데이터 배열 생성
const dummyData = [
  { id: 1, image: DGULikeLion },
  { id: 2, image: DGULikeLion },
  { id: 3, image: DGULikeLion },
  { id: 4, image: DGULikeLion },
  { id: 5, image: DGULikeLion } // DGULikeLion 이미지 추가
];

function Main() {
  // Pagination 컴포넌트를 커스터마이즈하여 위치를 조절합니다.
  const customRenderBullet = (index, className) => {
    return `<span class="${className}" style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);">${
      index + 1
    }</span>`;
  };

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
      </S.MainContainer>
    </>
  );
}

export default Main;
