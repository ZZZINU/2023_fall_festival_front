import React from "react";
import * as S from "./style";
import BoothTime from "./timeSection/BoothTime";
import PerfomanceTime from "./timeSection/PerfomanceTime";
import RealtimeBar from "./realtimeBar/RealtimeBar";
import RealtimeStroke from "./realtimeStroke/RealtimeStroke";

export const TimeTableSection = ({
  boothData,
  PerfomanceData,
  realtimeList,
  currentTime,
  festivalDate
}) => {

  // 축제 시작 시간과 현재 시간의 차이 -----------------------------
  const startTime = new Date(`2023-10-${festivalDate} 11:00`);
  const timeDifference = currentTime - startTime;

  const timePercent = timeDifference / (1000 * 60); // 분 단위

  // 접속일자와 축제 일정 일치 확인 --------------------------------------
  const isFestivalDay = () => currentTime.getDate() === festivalDate;

  return (
    <S.TimeTableWrapper>
      <RealtimeBar realtimeList={realtimeList} isFestivalDay={isFestivalDay} />
      <S.SubNav>
        <div>
          <S.TimeTableBigTxt>부스</S.TimeTableBigTxt>
          <S.TimeTableSmalltxt>Booth</S.TimeTableSmalltxt>
        </div>
        <div>
          <S.TimeTableBigTxt>공연·이벤트</S.TimeTableBigTxt>
          <S.TimeTableSmalltxt>Performance</S.TimeTableSmalltxt>
        </div>
      </S.SubNav>

      {/* 부스 및 공연 목록 */}
      <S.BoothDetailSection>
        <RealtimeStroke
          isFestivalDay={isFestivalDay}
          timePercent={timePercent}
        />
        <S.BoothLeft>
          <BoothTime
            realtimeList={realtimeList}
            boothData={boothData}
            startTime="11:00"
            endTime="17:00"
          />
          <BoothTime
            realtimeList={realtimeList}
            boothData={boothData}
            startTime="11:00"
            endTime="19:00"
          />
          <BoothTime
            realtimeList={realtimeList}
            boothData={boothData}
            startTime="11:00"
            endTime="23:00"
          />
          <BoothTime
            realtimeList={realtimeList}
            boothData={boothData}
            startTime="18:00"
            endTime="22:00"
            top="56px"
          />
        </S.BoothLeft>

        <S.BoothRight>
          <PerfomanceTime
            realtimeList={realtimeList}
            currentTime={currentTime}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime="11:00"
            endTime="17:00"
            timePercent={timePercent}
          />
          <PerfomanceTime
            realtimeList={realtimeList}
            currentTime={currentTime}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime="13:30"
            endTime="17:00"
            timePercent={timePercent}
            top="54px"
          />
          <PerfomanceTime
            realtimeList={realtimeList}
            currentTime={currentTime}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime={festivalDate === 11 ? "15:00" : "14:30"}
            endTime="20:00"
            timePercent={timePercent}
            top={festivalDate === 11 ? "" : ""}
          />
          <PerfomanceTime
            realtimeList={realtimeList}
            currentTime={currentTime}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime="20:00"
            endTime="22:00"
            timePercent={timePercent}
            top="100px"
          />
        </S.BoothRight>
      </S.BoothDetailSection>
    </S.TimeTableWrapper>
  );
};
