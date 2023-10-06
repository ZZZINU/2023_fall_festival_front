import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// 이미지
import BoothImg from "../../../../public/booth/booth.png";
import HeartImgUnFill from "../../../../public/booth/heart.png";
import HeartImgFill from "../../../../public/booth/unfilledHeart.png";
import ShareImg from "../../../../public/booth/share.png";
import InstaImg from "../../../../public/booth/instagram.png";
import CheckMarkImg from "../../../../public/booth/checkmark.png";
import PinImg from "../../../../public/booth/boothDetailPin.png";
import ModalImg from "../../../../public/booth/modalShare.png";

// 컴포넌트
import Modal from "../../../components/common/modal/Modal";

// API
import { API } from "../../../api/axios";

function BoothDetail() {
  const LinkRef = useRef();
  const { id } = useParams();

  // 데이터
  const [data, setData] = useState({
    // name: "",
    // images: [],
    // type: "",
    // is_liked: false,
    // like_cnt: 0,
    // during: "",
    // location: "",
    // description: ""
  });

  // 모달 ON/OFF
  const [showModal, setShowModal] = useState(false);

  // 좋아요
  const [isLikeClick, setIsLikeClick] = useState(false);

  // 좋아요 상태를 나타내는 상태 (임시)
  const [isLiked, setIsLiked] = useState(false);

  // 좋아요 버튼 클릭 시 상태 토글 (임시)
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // 링크복사
  const handleCopyLink = () => {
    // navigator.clipboard.writeText(window.location.href);

    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = window.location.href;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setShowModal(true); // 모달 ON
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const contentData = {
    //       name: "산공산공공산공",
    //       thumbnail: "/booth/temp.png",
    //       images: ["/booth/booth.png", "/booth/booth.png", "/booth/booth.png"],
    //       type: "주간부스",
    //       is_liked: false,
    //       like_cnt: 123,
    //       during: "2023.09.30 06:00~18:00",
    //       location: "사회과학관",
    //       description: "하이 산시",
    //       insta_url: "https://www.instagram.com/donggukstuco/"
    //     };
    //     setData(contentData);
    //   } catch (error) {
    //     console.error("Error: ", error);
    //   }
    // };
    fetchData();
  }, []);

  // API 연결
  const fetchData = async () => {
    try {
      const response = await API.get(`api/v1/booths/${id}`);
      setData(response.data);
      setIsLikeClick(data.is_liked);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleHeartClick = async () => {
    if (data.is_liked) {
      try {
        // axios요청 보내기
        const response = await API.delete(`api/v1/booths/${id}/likes`);
        if (response.status === 200) {
          setIsLikeClick(i => !i);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    } else {
      try {
        const response = await API.post(`/api/v1/booths/${id}/likes`);

        if (response.status === 200) {
          setIsLikeClick(i => !i);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }
  };

  // 좋아요 누르면
  useEffect(() => {
    fetchData();
  }, [isLikeClick]);

  return (
    <>
      <S.BoothDetailWrap>
        {showModal && (
          <Modal
            img={ModalImg}
            content="주소가 클립보드에 복사되었습니다!"
            onClose={handleCloseModal}
          />
        )}

        <S.BoothDetailTitle>{data.name}</S.BoothDetailTitle>
        {/* <S.BoothDetailImage src={data.thumbnail} alt="부스 이미지" /> */}
        <S.BoothImgWrap>
          <S.MySwiper
            pagination={{
              dynamicBullets: true
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src={data.thumbnail} alt="Thumbnail" />
            </SwiperSlide>
            {data.images ? (
              <>
                {data.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <S.SwiperSlideImg src={image} alt={`Slide ${index + 1}`} />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <></>
            )}
          </S.MySwiper>

          <S.BoothDetailRibbon>{data.type}</S.BoothDetailRibbon>
        </S.BoothImgWrap>
        <S.BoothDetailFunctionWrap>
          {/* 하트 */}
          <S.BoothDetailHeartWrap
            onClick={handleHeartClick}
            background={data.is_liked ? "#E0747B;" : "#fff"}
          >
            <S.BoothDetailHeart
              src={data.is_liked ? HeartImgFill : HeartImgUnFill}
              alt="하트 이미지"
            />
            <S.BoothDetailHeartNum color={data.is_liked ? "#fff" : "#E0747B"}>
              {data.like_cnt > 999 ? "999+" : data.like_cnt}
            </S.BoothDetailHeartNum>
          </S.BoothDetailHeartWrap>

          <S.BoothDetailSNSWrap>
            <S.BoothDetailSNSLink to={data.insta_url} target="_blank">
              <S.BoothDetailImg src={InstaImg} alt="인스타 이미지" />
            </S.BoothDetailSNSLink>
            <S.BoothDetailSNS onClick={handleCopyLink}>
              <S.BoothDetailImg src={ShareImg} alt="공유 이미지" />
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
