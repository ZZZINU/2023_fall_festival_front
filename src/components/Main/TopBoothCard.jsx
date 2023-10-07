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
  marginTop,
  logoHeight
}) {
  const defaultBoothImgUrl = "/booth/boothDefault.png";

  const defaultGradeImg = "/Main/gold.png";

  const imageUrlToUse = boothImgUrl || defaultBoothImgUrl;

  const boothGradeImg = boothGradeImgurl || defaultGradeImg;

  // 부스 이름 글자수 자르기
  const maxBoothTitleLength = 5;
  const processedBoothTitle =
    boothTitle && boothTitle.length > maxBoothTitleLength
      ? `${boothTitle.slice(0, maxBoothTitleLength)}...`
      : boothTitle;

  // 부스 소개 글자수 자르기
  const maxBoothDescriptLength = 20;
  const processedBoothDescript =
    boothDescript && boothDescript.length > maxBoothDescriptLength
      ? `${boothDescript.slice(0, maxBoothDescriptLength)}...`
      : boothDescript;

  //하트수
  let formattedHeartNum = heartNum;
  if (heartNum > 99) {
    formattedHeartNum = "99+";
  }
  return (
    <>
      <Link to={`/booths/${boothId}`}>
        <S.TopContainer marginTop={wholeMargin}>
          <S.BoothBg width={logoWidth} height={bgHeight}>
            <S.BoothLogo
              src={imageUrlToUse}
              width={logoWidth}
              height={logoHeight}
            />
            <S.BoothGrade src={boothGradeImg} />
            <S.BoothType>{boothType || "부스 종류"}</S.BoothType>
            <S.BoothInfo>
              <S.BoothTitle fontSize={titleFont}>
                {processedBoothTitle || "부스명"}
              </S.BoothTitle>
              <S.BoothDescript>
                {processedBoothDescript || "부스 소개"}
              </S.BoothDescript>

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
                    {formattedHeartNum}
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
