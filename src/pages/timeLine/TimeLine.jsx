import React from "react";
import * as S from "./style";
import { useState } from "react";
import { TimeLineTop } from "../../components/timeLine/TimeLineTop";

function TimeLine() {
  // 선택 날짜가 10일이면 10, 11일이면 11
  const [festivalDate, setFestivalDate] = useState(10);

  return (
    <div>
      <TimeLineTop festivalDate={festivalDate} />
    </div>
  );
}

export default TimeLine;
