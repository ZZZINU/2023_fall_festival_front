import React from 'react'
import * as S from "./style"

export default function RealtimeStroke({ isFestivalDay, timePercent }) {
  // 시간 바에서 현재 위치 계산 -----------------------------
  let imagePosition = 0;
  if (timePercent >= 0 && timePercent < 660) {
    // 11:00 이후부터 22:00 이전까지
    imagePosition = `${(timePercent / 660) * 100 - 2.3}%`;
  } else if (timePercent < 0) {
    // 11:00 이전
    imagePosition = 0;
  } else {
    // 22:00 이후
    imagePosition = "98%";//오차 수정
  }
console.log(imagePosition);
  return (
    <S.TimeStroke>
      <S.Stroke1 />
      <S.Stroke2 />
      <S.Stroke3 />
      <S.Stroke4 />
      <S.Stroke5 />
      {isFestivalDay() && (
        <S.TimeNow
          src="/timetable/realtime.png"
          style={{ top: imagePosition }}
        />
      )}
      <S.TimeStart />
      <S.Time13Mid />
      <S.Time15Mid />
      <S.Time18Mid />
      <S.Time20Mid />
      <S.TimeEnd />
    </S.TimeStroke>
  );
}
