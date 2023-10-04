import React from "react";
import * as S from "./style";
import { PerfomanceCard } from "../boothCard/PerfomanceCard";

export default function PerfomanceTime({
  isFestivalDay,
  PerfomanceData,
  realtimeList,
  startTime,
  endTime,
  timePercent
}) {
  const currentTime = new Date("2023-10-11T11:00:00");
  const startParts = startTime.split(":");
  const endParts = endTime.split(":");
  const start = new Date(
    "2023-10-11T" + startParts[0] + ":" + startParts[1] + ":00"
  );
  const end = new Date("2023-10-11T" + endParts[0] + ":" + endParts[1] + ":00");
  const startGap = Math.floor((start - currentTime) / (1000 * 60));
  const endGap = Math.floor((end - currentTime) / (1000 * 60));

  const top = (startGap / 660) * 100;

  return (
    <>
      <S.PerformTimeSection
        isnow={
          isFestivalDay() && timePercent >= startGap && timePercent < endGap
        }
        style={{ marginTop: `${top}%` }}
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
        />
      ))}
    </>
  );
}
