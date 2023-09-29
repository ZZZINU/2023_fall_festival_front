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

  // 데이터
  const [data, setData] = useState([]);

  useEffect(() => {
    const contentData = {
      id: 1,
      name: "부스타이틀",
      description:
        "부스에 대한 소개를 서술합니다...부스에 대한 소개를 서술합니다...부스에 대한 소개를 서술합니다...",
      type: "부스종류",
      location: "장소입니다",
      thumbnail: "asd",
      images: ["asd", "asd"],
      is_liked: true,
      like_cnt: 123,
      during: "2023.09.30 06:00~18:00"
    };
    setData(contentData);
  }, []);

  return (
    <>
      <S.BoothDetailWrap>
        <S.BoothDetailTitle>{data.name}</S.BoothDetailTitle>
        <S.BoothDetailImage src={BoothImg} alt="부스 이미지" />
        <S.BoothDetailRibbon>{data.type}</S.BoothDetailRibbon>

        <S.BoothDetailFunctionWrap>
          {/* 하트 */}
          <S.BoothDetailHeartWrap>
            <S.BoothDetailHeart src={HeartImgFill} alt="채워진 하트 이미지" />
            <S.BoothDetailHeartNum>{data.like_cnt}</S.BoothDetailHeartNum>
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
            <S.BoothDetailContentDate>{data.during}</S.BoothDetailContentDate>
          </S.BoothDetailContentDateWrap>

          <S.BoothDetailContentLocationWrap>
            <S.BoothDetailContentImage src={PinImg} alt="위치 이미지" />
            <S.BoothDetailContentLocation>
              {data.location}
            </S.BoothDetailContentLocation>
          </S.BoothDetailContentLocationWrap>
          <S.BoothDetailContent>{data.description}</S.BoothDetailContent>
        </S.BoothDetailContentWrap>
      </S.BoothDetailWrap>
    </>
  );
}

export default BoothDetail;
