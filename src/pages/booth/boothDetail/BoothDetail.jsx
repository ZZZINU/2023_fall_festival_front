import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

// 이미지
import BoothImg from "../../../../public/booth/booth.png";
import HeartImgFill from "../../../../public/booth/heart.png";
import ShareImg from "../../../../public/booth/share.png";
import InstaImg from "../../../../public/booth/instagram.png";
import CheckMarkImg from "../../../../public/booth/checkmark.png";
import PinImg from "../../../../public/booth/boothDetailPin.png";

function BoothDetail() {
  const { id } = useParams();
  return (
    <>
      <S.BoothDetailWrap>
        <S.BoothDetailTitle>부스 타이틀</S.BoothDetailTitle>
        <S.BoothDetailImage src={BoothImg} alt="부스 이미지" />
        <S.BoothDetailRibbon>부스종류</S.BoothDetailRibbon>

        <S.BoothDetailFunctionWrap>
          {/* 하트 */}
          <S.BoothDetailHeartWrap>
            <S.BoothDetailHeart src={HeartImgFill} alt="채워진 하트 이미지" />
            <S.BoothDetailHeartNum>124</S.BoothDetailHeartNum>
          </S.BoothDetailHeartWrap>

          {/* swiper */}
          {/*
          <S.BoothDetailSwiperWrap>
            <S.BoothDetailSwiper></S.BoothDetailSwiper>
          </S.BoothDetailSwiperWrap>
          */}

          <S.BoothDetailSNSWrap>
            <S.BoothDetailSNS>
              <S.BoothDetailImg src={InstaImg} alt="부스 이미지" />
            </S.BoothDetailSNS>
            <S.BoothDetailSNS>
              <S.BoothDetailImg src={ShareImg} alt="부스 이미지" />
            </S.BoothDetailSNS>
          </S.BoothDetailSNSWrap>
        </S.BoothDetailFunctionWrap>

        <S.BoothDetailContentWrap>
          <S.BoothDetailContentDateWrap>
            <S.BoothDetailContentImage src={CheckMarkImg} alt="체크 이미지" />
            <S.BoothDetailContentDate>
              2023.09.22 18:00~23:00
            </S.BoothDetailContentDate>
          </S.BoothDetailContentDateWrap>

          <S.BoothDetailContentLocationWrap>
            <S.BoothDetailContentImage src={PinImg} alt="위치 이미지" />
            <S.BoothDetailContentLocation>
              장소입니다
            </S.BoothDetailContentLocation>
          </S.BoothDetailContentLocationWrap>
          <S.BoothDetailContent>
            부스에 대한 소개를 서술합니다...부스에 대한 소개를 서술합니다...
          </S.BoothDetailContent>
        </S.BoothDetailContentWrap>
      </S.BoothDetailWrap>
    </>
  );
}

export default BoothDetail;
