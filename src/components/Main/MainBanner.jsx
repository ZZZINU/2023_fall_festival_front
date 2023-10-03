import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { API } from "../../api/axios";

import "./swiper.css";

const imageSize = {
  width: "90%",
  height: "170px",
  borderRadius: "10px"
};

function MainBanner() {
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/v1/promotion");
        const results = response.data.results;

        const shuffledImages = results.sort(() => 0.5 - Math.random());
        const selectedImages = shuffledImages.slice(0, 5);

        const slides = selectedImages.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className={index === centerSlideIndex ? "swiper-slide-active" : ""}
          >
            <Link to={`/promotion/${item.id}`}>
              <img
                src={item.thumbnail}
                style={{
                  ...imageSize,
                  opacity: index === centerSlideIndex ? 1 : 0.5
                }}
              />
            </Link>
          </SwiperSlide>
        ));

        setRandomImages(slides);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, [centerSlideIndex]);

  const handleSlideChange = swiper => {
    const centerIndex = swiper.realIndex;
    // console.log("가운데 이미지 인덱스:", centerIndex);
    setCenterSlideIndex(centerIndex);
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
        spaceBetween={20}
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
