import React from "react";
import * as S from "./style";

export const PerfomanceCard = ({ booth, realtimeList }) => {
  const isCurrent = realtimeList.includes(booth);

  return (
    <S.PerformanceWhiteBox isnow={isCurrent ? "true" : "false"}>
      <S.BoothCardWrapper>
        <S.BoothTxt>
          <S.PerfomanceTitle
            islong={
              booth.title == "동아리 공연" || booth.title == "연예인 공연"|| booth.title == "백상 응원단"
                ? "0px"
                : "6px"
            }
          >
            {booth.title}
          </S.PerfomanceTitle>
          <S.BoothPlace>
            <img src="/timetable/booth_location.png" alt="location" />
            {booth.place}
          </S.BoothPlace>
        </S.BoothTxt>
        {booth.devide && (
          <S.BoothImg isnow={isCurrent ? "true" : "false"}>
            {booth.devide == "가왕제" && (
              <span className="material-symbols-outlined">theater_comedy</span>
            )}
            {booth.devide == "페스티벌" && (
              <span className="material-symbols-outlined">celebration</span>
            )}
          </S.BoothImg>
        )}
      </S.BoothCardWrapper>
    </S.PerformanceWhiteBox>
  );
};
