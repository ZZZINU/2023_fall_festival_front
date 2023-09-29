import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

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

function BoothDetail() {
  const { id } = useParams();

  // 데이터
  const [data, setData] = useState([]);

  // 모달 ON/OFF
  const [showModal, setShowModal] = useState(false);

  // 좋아요 상태를 나타내는 상태 (임시)
  const [isLiked, setIsLiked] = useState(false);

  // 좋아요 버튼 클릭 시 상태 토글 (임시)
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // 링크복사
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowModal(true); // 모달 ON
  };

  // 모달 닫기 함수
  const handleCloseModal = () => {
    setShowModal(false);
  };

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
      is_liked: false,
      like_cnt: 123,
      during: "2023.09.30 06:00~18:00"
    };
    setData(contentData);
  }, []);

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
        <S.BoothDetailImage src={BoothImg} alt="부스 이미지" />
        <S.BoothDetailRibbon>{data.type}</S.BoothDetailRibbon>

        <S.BoothDetailFunctionWrap>
          {/* 하트 */}
          <S.BoothDetailHeartWrap
            onClick={handleLikeClick}
            background={data.is_liked ? "#E0747B;" : "#fff"}
          >
            <S.BoothDetailHeart
              src={data.is_liked ? HeartImgFill : HeartImgUnFill}
              alt="하트 이미지"
            />
            <S.BoothDetailHeartNum color={data.is_liked ? "#fff" : "#E0747B"}>
              {data.like_cnt}
            </S.BoothDetailHeartNum>
          </S.BoothDetailHeartWrap>

          {/* swiper */}
          {/*
          <S.BoothDetailSwiperWrap>
            <S.BoothDetailSwiper></S.BoothDetailSwiper>
          </S.BoothDetailSwiperWrap>
          */}

          <S.BoothDetailSNSWrap>
            <S.BoothDetailSNS>
              <S.BoothDetailImg src={InstaImg} alt="인스타 이미지" />
            </S.BoothDetailSNS>
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
