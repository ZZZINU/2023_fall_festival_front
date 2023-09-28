import React, { useEffect, useState } from "react";
import * as S from "./style";
import LocationImg from "../../../assets/images/booth_location.png";

export const BoothCard = ({ booth }) => {
  const isCurrent = booth.isCurrent;

  return (
    <S.BoothWhiteBox isnow={isCurrent ? "true":"false"}>
      <S.BoothCardWrapper>
        <S.BoothImg isnow={isCurrent ? "true":"false"}>
          {booth.devide == "부스" && (
            <span className="material-symbols-outlined">store</span>
          )}
          {booth.devide == "푸드" && (
            <span className="material-symbols-outlined">fastfood</span>
            // <img src={booth.img || FoodImg} alt="img" />
          )}
        </S.BoothImg>
        <S.BoothTxt>
          <S.BoothTitle>{booth.title}</S.BoothTitle>
          <S.BoothPlace>
            <img src={LocationImg} alt="location" />
            {booth.place}
          </S.BoothPlace>
        </S.BoothTxt>
      </S.BoothCardWrapper>
      {booth.isBooth && <S.BoothBtn>부스 찾기</S.BoothBtn>}
    </S.BoothWhiteBox>
  );
};
