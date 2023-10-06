import React from "react";
import * as S from "./style";
import { BoothCard } from "../boothCard/BoothCard";

export default function BoothTime({
  boothData,
  realtimeList,
  startTime,
  endTime,
  top
}) {

  return (
    <>
      <S.BoothTimeSection
        style={{ marginTop: `${top}` }}
      >
        {startTime} ~ {endTime}
      </S.BoothTimeSection>
      {boothData
        .filter(
          booth => booth.starttime === startTime && booth.endtime === endTime
        )
        .map(booth => (
          <BoothCard key={booth.id} booth={booth} realtimeList={realtimeList} />
        ))}
    </>
  );
}
