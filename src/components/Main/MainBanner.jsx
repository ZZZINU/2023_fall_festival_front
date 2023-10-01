import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "./swiper.css";

const allImageData = [
  {
    id: 1,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 2,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 3,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 4,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 5,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion}"
  },
  {
    id: 6,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 7,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 8,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 9,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  },
  {
    id: 10,
    imageUrl: "/Main/main_blackLL.png",
    link: "/promotion"
  }
];

const imageSize = {
  width: "170px", // 원하는 너비로 설정
  height: "auto" // 비율 유지를 위해 높이는 자동으로 조절됩니다.
};

function MainBanner() {
  const [centerSlideIndex, setCenterSlideIndex] = useState(2); // 초기에 중앙 슬라이드를 설정합니다.
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    // 이미지 데이터 배열에서 5개의 무작위 항목 선택
    const shuffledImages = allImageData.sort(() => 0.5 - Math.random());
    const selectedImages = shuffledImages.slice(0, 5);

    // Swiper 슬라이드 생성
    const slides = selectedImages.map((item, index) => (
      <SwiperSlide key={item.id}>
        <Link to={item.link}>
          <img
            src={item.imageUrl}
            alt={item.title}
            style={imageSize}
            className={index === centerSlideIndex ? "" : "transparent-image"}
          />
          <p>{item.title}</p>
        </Link>
      </SwiperSlide>
    ));

    setRandomImages(slides);
  }, [centerSlideIndex]);

  const handleSlideChange = swiper => {
    setCenterSlideIndex(swiper.realIndex);
  };

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        spaceBetween={0}
        className="mySwiper"
        onSlideChange={swiper => handleSlideChange(swiper)}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} custom-pagination-bullet"></span>`;
          }
        }}
      >
        {randomImages}
      </Swiper>
    </div>
  );
}

export default MainBanner;
