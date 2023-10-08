import React from "react";
import * as S from "./style";

export default function RealtimeStroke({
  currentTime,
  festivalDate
}) {
  const isFirstTime = () => {
    const start = new Date(`2023-10-${festivalDate}T11:00`);
    const end = new Date(`2023-10-${festivalDate}T17:00`);
    if (currentTime >= start && currentTime < end) {
      return true;
    } else false;
  };
  const isSecTime = () => {
    const start = new Date(`2023-10-${festivalDate}T13:30`);
    const end = new Date(`2023-10-${festivalDate}T17:00`);
    if (currentTime >= start && currentTime < end) {
      return true;
    } else false;
  };
  const isThirdTime = () => {
    const start = new Date(
      `2023-10-${festivalDate}T${festivalDate == 11 ? "15:00" : "14:30"}`
    );
    const end = new Date(`2023-10-${festivalDate}T20:00`);
    if (currentTime >= start && currentTime < end) {
      return true;
    } else false;
  };
  const isLastTime = () => {
    const start = new Date(`2023-10-${festivalDate}T20:00`);
    const end = new Date(`2023-10-${festivalDate}T22:00`);
    if (currentTime >= start && currentTime < end) {
      return true;
    } else false;
  };

  return (
    <S.TimeStroke>
      <S.Stroke1 />
      <S.Stroke2 />
      <S.Stroke3 />
      <S.TimeStart
        src={
          isFirstTime()
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
      <S.Time13Mid
        src={
          isSecTime()
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
      <S.Time15Mid
        src={
          isThirdTime()
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
      <S.Time20Mid
        src={
          isLastTime()
            ? "/timetable/realtime.png"
            : "/timetable/timetable_mark.png"
        }
      />
    </S.TimeStroke>
  );
}
