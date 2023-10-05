import React from "react";
import * as S from "./style";
import LocationImg from "../../../assets/images/booth_location.png";

export const PerfomanceCard = ({ booth, realtimeList }) => {
  const isCurrent = realtimeList.includes(booth);

  return (
    <S.PerformanceWhiteBox isnow={isCurrent ? "true" : "false"}>
      <S.BoothCardWrapper>
        <S.BoothTxt>
          <S.BoothTitle>{booth.title}</S.BoothTitle>
          <S.BoothPlace>
            <img src={LocationImg} alt="location" />
            {booth.place}
          </S.BoothPlace>
        </S.BoothTxt>
        {booth.devide &&
        <S.BoothImg isnow={isCurrent ? "true" : "false"}>
          {booth.devide == "가왕제" && (
            <span className="material-symbols-outlined">theater_comedy</span>
          )}
          {booth.devide == "페스티벌" && (
            <span className="material-symbols-outlined">celebration</span>
          )}
        </S.BoothImg>}
      </S.BoothCardWrapper>
    </S.PerformanceWhiteBox>
  );
};
