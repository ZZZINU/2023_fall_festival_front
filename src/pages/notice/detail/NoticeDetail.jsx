import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as S from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function NoticeDetail() {
  const [data, setData] = useState({
    id: 1,
    title: "제목",
    type: "축제",
    content:
      "동국대학교 학우 여러분 안녕하세요!이번 가을 축제의 이름인 야단법석(野壇法席)은‘야외에 자리를 마련하여 부처님의 말씀을 듣는 자리’라는의미를 가지고 있습니다. 낭만과 설렘이 가득한 가을,수많은 인연들이 모여 만나게 된 이곳에서야단법석을 꾸며보고자 합니다!2023. 10. 11. ~ 10. 12.‘야단법석(野壇法席)’ 많은 관심 부탁드립니다! 이번 가을 축제에 대한 자세한 일정 안내는 추후에 진행될 예정입니다.",
    created_at: "2023-09-29T12:38:12Z",
    images: [
      "/notice/text1.png",
      "/notice/text2.png",
      "/notice/text1.png",
      "/notice/text2.png",
      "/notice/text3.png"
    ],
    thumbnail: "img.jpg"
  });
  const { id } = useParams();
  const { pathname } = useLocation();

  // API 연결
  const fetchData = async () => {
    try {
      const response = await API.get(`api/v1${pathname}/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // 초기
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.NoticeDetailWrap>
      <S.DetailWhiteBox>
        <S.DetailTxt>{data.type} 공지</S.DetailTxt>
        <S.DetailTitle>
          {pathname.includes("notification") && "[공지] "}
          {data.title}
        </S.DetailTitle>
        <S.DetailContent>{data.content}</S.DetailContent>
        <S.ImgWrapper>
          <Swiper slidesPerView={2}>
            {data.images &&
              data.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt="img"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </S.ImgWrapper>
        {data.created_at.slice(0,10)}
      </S.DetailWhiteBox>
    </S.NoticeDetailWrap>
  );
}
