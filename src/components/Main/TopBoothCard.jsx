import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

function TopBoothCard({
  wholeMargin,
  boothImgUrl,
  boothGradeImgurl,
  boothType,
  boothTitle,
  boothDescript,
  locationContent,
  heartNum,
  logoWidth,
  bgHeight,
  titleFont,
  pinImg,
  locationFont,
  heartImg,
  boothId,
  marginTop
}) {
  const defaultBoothImgUrl = "/booth/booth.png"; // 기본 이미지 URL

  const defaultGradeImg = "/Main/gold.png";

  // boothImgUrl이 존재하면 boothImgUrl을 사용하고, 그렇지 않으면 기본 이미지 URL 사용
  const imageUrlToUse = boothImgUrl || defaultBoothImgUrl;

  const boothGradeImg = boothGradeImgurl || defaultGradeImg;

  // 부스 이름을 8글자로 제한하고 넘어가면 "..."을 붙입니다.
  const processedBoothTitle =
    boothTitle && boothTitle.length > 7
      ? `${boothTitle.slice(0, 7)}...`
      : boothTitle;

  return (
    <>
      <Link to={`/booths/${boothId}`}>
        <S.TopContainer marginTop={wholeMargin}>
          <S.BoothBg width={logoWidth} height={bgHeight}>
            <S.BoothLogo src={imageUrlToUse} width={logoWidth} />
            <S.BoothGrade src={boothGradeImg} />
            <S.BoothType>{boothType || "부스 종류"}</S.BoothType>
            <S.BoothInfo>
              <S.BoothTitle fontSize={titleFont}>
                {processedBoothTitle || "부스명"}
              </S.BoothTitle>
              <S.BoothDescript>{boothDescript || "부스 소개"}</S.BoothDescript>

              <S.BoothEtcWrapper marginTop={marginTop}>
                <S.BoothLocationWrapper>
                  <S.BoothLocationPin src="/booth/pin.png" width={pinImg} />
                  <S.BoothLocationContent fontSize={locationFont}>
                    {locationContent || "장소 상세"}
                  </S.BoothLocationContent>
                </S.BoothLocationWrapper>

                <S.BoothHeartWrap>
                  <S.BoothDetailHeart
                    src="/booth/heart.png"
                    alt="하트 이미지"
                    width={heartImg}
                  />
                  <S.BoothDetailHeartNum>
                    {heartNum || "99+"}
                  </S.BoothDetailHeartNum>
                </S.BoothHeartWrap>
              </S.BoothEtcWrapper>
            </S.BoothInfo>
          </S.BoothBg>
        </S.TopContainer>
      </Link>
    </>
  );
}

export default TopBoothCard;
