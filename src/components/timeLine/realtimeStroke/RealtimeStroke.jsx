import React from "react";
import * as S from "./style";

export default function RealtimeStroke({ isFestivalDay, currentTime }) {
  const isCurrentTime = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if (
      isFestivalDay() &&
      hours >= 11 &&
      (hours < 13 || (hours === 13 && minutes < 30))
    ) {
      return 11;
    } else if (isFestivalDay() && hours >= 13 && hours < 15) {
      return 13;
    } else if (isFestivalDay() && hours >= 15 && hours < 20) {
      return 15;
    } else if (isFestivalDay() && hours >= 20 && hours < 22) {
      return 20;
    }

    return null;
  };

  return (
    <S.TimeStroke>
      <S.Stroke1 />
      <S.Stroke2 />
      <S.Stroke3 />
      <S.TimeStart
        src={
          isCurrentTime() === 11
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
      <S.Time13Mid
        src={
          isCurrentTime() === 13
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
      <S.Time15Mid
        src={
          isCurrentTime() === 15
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
      <S.Time20Mid
        src={
          isCurrentTime() === 20
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
    </S.TimeStroke>
  );
}
