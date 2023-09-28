import React from "react";
import * as S from "./style";
import SolidBox from "../../assets/images/month_solidbox.png";
import borderBox from "../../assets/images/month_borderbox.png";

export const TimeLineTop = ({ festivalDate, setFestivalDate }) => {
  return (
    <S.TimeLineTopLabel>
      <S.TimeLineDate
        isselected={festivalDate === 11 ? "true" : "false"}
        onClick={() => setFestivalDate(11)}
      >
        <S.TimeLineDateIMG src={festivalDate === 11 ? SolidBox : borderBox} />
        <S.TimeLineTxt>
          11일
          <S.TimeLineUnderLine
            isselected={festivalDate === 11 ? "true" : "false"}
          />
        </S.TimeLineTxt>
      </S.TimeLineDate>
      <S.TimeLineDate
        isselected={festivalDate === 12 ? "true" : "false"}
        onClick={() => setFestivalDate(12)}
      >
        <S.TimeLineDateIMG src={festivalDate === 12 ? SolidBox : borderBox} />
        <S.TimeLineTxt>
          12일
          <S.TimeLineUnderLine
            isselected={festivalDate === 12 ? "true" : "false"}
          />
        </S.TimeLineTxt>
      </S.TimeLineDate>
    </S.TimeLineTopLabel>
  );
};
