import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

// 이미지
import BoothImg from "../../../../assets/images/booth.png";
import PinImg from "../../../../../public/booth/pin.png";
import HeartImg from "../../../../../public/booth/heart.png";
import BoothDefaultImg from "../../../../../public/booth/boothDefault.png";

function BoothCard({ data }) {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <>
      {/* 부스 카드 컨테이너 */}
      <S.BoothCardContainer>
        {data.map((booth, index) => (
          <Link to={`/booths/${booth.id}`} key={booth.id}>
            <S.BoothCardWrapper key={index}>
              <S.BoothCardImage src={BoothDefaultImg} alt="부스 이미지" />
              <S.BoothCardRibbon>{booth.type}</S.BoothCardRibbon>
              <S.BoothCardDetailWrapper>
                <S.BoothCardDetailTitle>
                  {String(booth.name).length < 8
                    ? booth.name
                    : `${String(booth.name).slice(0, 7)}...`}
                </S.BoothCardDetailTitle>
                <S.BoothCardDetailDes>
                  {String(booth.description).length < 23
                    ? booth.description
                    : `${String(booth.description).slice(0, 22)}...`}
                </S.BoothCardDetailDes>
                <S.BoothCardDetailAddWrapper>
                  <S.BoothDetailLocationWrap>
                    <S.BoothDetailLocation src={PinImg} alt="위치 이미지" />
                    <S.BoothDetailLocationContent>
                      {booth.location}
                    </S.BoothDetailLocationContent>
                  </S.BoothDetailLocationWrap>

                  <S.BoothDetailHeartWrap>
                    <S.BoothDetailHeart src={HeartImg} alt="하트 이미지" />
                    <S.BoothDetailHeartNum>
                      {booth.like_cnt > 999 ? "999+" : booth.like_cnt}
                    </S.BoothDetailHeartNum>
                  </S.BoothDetailHeartWrap>
                </S.BoothCardDetailAddWrapper>
              </S.BoothCardDetailWrapper>
            </S.BoothCardWrapper>
          </Link>
        ))}
      </S.BoothCardContainer>
    </>
  );
}

export default BoothCard;
