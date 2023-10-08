import React from "react";
import * as S from "./style";
import { PerfomanceCard } from "../boothCard/PerfomanceCard";

export default function PerfomanceTime({
  isFestivalDay,
  PerfomanceData,
  realtimeList,
  startTime,
  endTime,
  top,
  currentTime,
  index
}) {
  const start = new Date(
    `${currentTime.getFullYear()}-${
      currentTime.getMonth() + 1
    }-${currentTime.getDate()}T${startTime}`
  );
  const end = new Date(
    `${currentTime.getFullYear()}-${
      currentTime.getMonth() + 1
    }-${currentTime.getDate()}T${endTime}`
  );

  const startGap = Math.floor((currentTime - start) / (1000 * 60));
  const endGap = Math.floor((currentTime - end) / (1000 * 60));

  return (
    <>
      <S.PerformTimeSection
        isnow={isFestivalDay() && startGap >= 0 && endGap < 0}
        style={{ marginTop: `${top}`, animationDelay: `${index * 0.2}s` }}
      >
        {startTime} ~ {endTime}
      </S.PerformTimeSection>
      {PerfomanceData.filter(
        booth => booth.starttime === startTime && booth.endtime === endTime
      ).map(booth => (
        <PerfomanceCard
          key={booth.id}
          booth={booth}
          realtimeList={realtimeList}
          index={index}
        />
      ))}
    </>
  );
}
