import React, { useEffect, useState } from "react";
import * as S from "./style";
import LocationImg from "../../../assets/images/booth_location.png";
import { useNavigate } from "react-router-dom";

export const BoothCard = ({ booth, isFestivalDay }) => {
  const isCurrent = booth.isCurrent;
  const navigate = useNavigate();

  return (
    <S.BoothWhiteBox isnow={isFestivalDay() && isCurrent ? "true" : "false"}>
      <S.BoothCardWrapper>
        <S.BoothImg isnow={isFestivalDay() && isCurrent ? "true" : "false"}>
          {booth.devide == "부스" && (
            <span className="material-symbols-outlined">store</span>
          )}
          {booth.devide == "푸드" && (
            <span className="material-symbols-outlined">fastfood</span>
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
      {booth.isBooth && (
        <S.BoothBtn
          onClick={() => navigate("/booths")}
          isnow={isFestivalDay() && isCurrent ? "true" : "false"}
        >
          부스 찾기
        </S.BoothBtn>
      )}
    </S.BoothWhiteBox>
  );
};
