import React from "react";
import * as S from "./style";
import SolidBox from "../../assets/images/month_solidbox.png";
import borderBox from "../../assets/images/month_borderbox.png";

export const TimeLineTop = ({ festivalDate, setFestivalDate }) => {
  return (
    <S.TimeLineTopLabel>
      <S.TimeDateBox
        isselected={festivalDate === 11 ? "true" : "false"}
        onClick={() => setFestivalDate(11)}
      >
        <S.TimeDateBoxText isselected={festivalDate === 11 ? "true" : "false"}>
          11일
        </S.TimeDateBoxText>
      </S.TimeDateBox>

      <S.TimeDateBox
        isselected={festivalDate === 12 ? "true" : "false"}
        onClick={() => setFestivalDate(12)}
      >
        <S.TimeDateBoxText isselected={festivalDate === 12 ? "true" : "false"}>
          12일
        </S.TimeDateBoxText>
      </S.TimeDateBox>
    </S.TimeLineTopLabel>
  );
};
