import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export const BoothDetailWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  width: 360px;
  min-height: 700px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  padding-bottom: 25px;
`;

export const BoothDetailTitle = styled.div`
  display: flex;
  width: 330px;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  color: #553c2e;
  text-align: center;
  font-family: NotoSansMedium;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  margin-top: 25px;
`;

export const BoothDetailImage = styled.img`
  width: 330px;
  height: 330px;
  border-radius: 20px;
  margin-top: 20px;
`;

export const BoothImgWrap = styled.div`
  position: relative;
`;

export const BoothDetailRibbon = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  right: 20px;
  height: 34px;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 20px;
  background: #e0747b;
  color: #fff;
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  z-index: 1;
`;

export const BoothDetailFunctionWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: -30px;
  justify-content: space-between;
  padding: 0px 15px;
  z-index: 1;
`;
export const BoothDetailHeartWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1.5px solid ${props => props.background};
  background: ${props => props.background};
  padding: 5px 10px;
  cursor: pointer;
`;
export const BoothDetailHeart = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const BoothDetailHeartNum = styled.div`
  display: flex;
  color: ${props => props.color};
  text-align: right;
  font-family: NotoSansRegular;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;
export const BoothDetailSNSWrap = styled.div`
  display: flex;
  gap: 7px;
`;

export const BoothDetailSNS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
`;

export const BoothDetailSNSLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
`;

export const BoothDetailImg = styled.img`
  display: flex;
  width: 20px;
  height: 20px;
`;

// 부스 상세 내용
export const BoothDetailContentWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;
  padding: 0px 25px;
`;

// 부스 상세 내용 - 날짜
export const BoothDetailContentDateWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoothDetailContentDate = styled.div`
  color: #553c2e;
  font-family: NotoSansRegular;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
export const BoothDetailContentLocationWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoothDetailContentLocation = styled.div`
  color: #553c2e;
  font-family: NotoSansRegular;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;
export const BoothDetailContent = styled.div`
  display: flex;
  margin-top: 25px;
  white-space: pre-line;
`;

export const BoothDetailContentImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;

// 스와이퍼
export const MySwiper = styled(Swiper)`
  width: 330px;
  height: 100%;
  padding-bottom: 50px;
  margin-top: 15px;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 330px;
    height: 330px;
    /* height: 100%; */
    border-radius: 20px;
  }

  /* Pagination 버튼의 활성 상태 스타일. */
  .swiper-pagination-bullet-active {
    background-color: #fffaea;
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }

  .swiper-pagination {
    position: absolute;
  }
`;

export const SwiperSlideImg = styled.img``;
