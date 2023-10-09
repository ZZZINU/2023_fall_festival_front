import React from "react";
import * as S from "./style";
import { BoothCard } from "../boothCard/BoothCard";

export default function BoothTime({festivalDate,
  boothData,
  realtimeList,
  startTime,
  endTime,
  top,
  index
}) {
  return (
    <>
      <S.BoothTimeSection
        style={{ marginTop: `${top}`, animationDelay: `${index * 0.2}s` }}
      >
        {startTime} ~ {endTime}
      </S.BoothTimeSection>
      {boothData
        .filter(
          booth => booth.starttime === startTime && booth.endtime === endTime
        )
        .map(booth => (
          <BoothCard
            key={booth.id}
            festivalDate={festivalDate}
            booth={booth}
            realtimeList={realtimeList}
            index={index}
          />
        ))}
    </>
  );
}
