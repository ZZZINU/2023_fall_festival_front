import React, { useEffect, useState } from "react";
import * as S from "./style";
import MiniLogo from "../../assets/images/timetable_logo.png";
import MiniLocation from "../../assets/images/timetable_location.png";
import { BoothCard } from "./boothCard/BoothCard";
import { PerfomanceCard } from "./boothCard/PerfomanceCard";
import BoothTime from "./timeSection/BoothTime";
import PerfomanceTime from "./timeSection/PerfomanceTime";

export const TimeTableSection = ({
  boothData,
  PerfomanceData,
  realtimeList,
  currentTime,
  festivalDate
}) => {
  // 부스 데이터 시간별 정리-----------------------------
  const boothdByTime = boothData.reduce((result, item) => {
    const time = item.starttime;
    if (!result[time]) {
      result[time] = [];
    }
    result[time].push(item);
    return result;
  }, {});

  const booth12List = boothdByTime["12:00"] || [];
  const booth18List = boothdByTime["18:00"] || [];

  // 공연 데이터 시간별 정리-----------------------------
  const performdByTime = PerfomanceData.reduce((result, item) => {
    const time = item.starttime;
    if (!result[time]) {
      result[time] = [];
    }
    result[time].push(item);
    return result;
  }, {});

  const perform14List = performdByTime["14:00"] || [];
  const perform18List = performdByTime["18:00"] || [];

  // 실시간 공연 정보 3초 단위로 띄움-----------------------------
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % realtimeList.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 시간 바에서 현재 위치 계산 -----------------------------
  const startTime = new Date(`2023-10-${festivalDate} 11:00`); // TimeStroke 시작 시간
  const timeDifference = currentTime - startTime;

  const timePercent = timeDifference / (1000 * 60); // 분 단위

  let imagePosition = 0;
  if (timePercent >= 0 && timePercent < 660) {
    // 11:00 이후부터 22:00 이전까지
    imagePosition = `${(timePercent / 660) * 100 -2}%`;
  } else if (timePercent < 0) {
    // 11:00 이전
    imagePosition = 0;
  } else {
    // 22:00 이후
    imagePosition = "100%";
  }

  // 접속일자와 축제 일정 일치 확인 --------------------------------------
  const isFestivalDay = () => currentTime.getDate() === festivalDate;

  return (
    <S.TimeTableWrapper>
      <S.TimeTableNav>
        <S.TimeTableSubTxt>
          <img src={MiniLogo} alt="Logo" />
          실시간
        </S.TimeTableSubTxt>
        <S.TimeTableMainTxt>
          {realtimeList.length !== 0
            ? realtimeList[currentIndex].title
            : "없음"}
        </S.TimeTableMainTxt>
        <S.TimeTableSubTxt2>
          <S.LocationIMG src={MiniLocation} alt="Logo" />
          {realtimeList.length !== 0
            ? realtimeList[currentIndex].place
            : "정보없음"}
        </S.TimeTableSubTxt2>
      </S.TimeTableNav>
      <S.SubNav>
        <div>
          <S.TimeTableBigTxt>부스</S.TimeTableBigTxt>
          <S.TimeTableSmalltxt>Booth</S.TimeTableSmalltxt>
        </div>
        <div>
          <S.TimeTableBigTxt>공연</S.TimeTableBigTxt>
          <S.TimeTableSmalltxt>Performance</S.TimeTableSmalltxt>
        </div>
      </S.SubNav>

      {/* 부스 및 공연 목록 */}
      <S.BoothDetailSection>
        <S.BoothLeft>
          <BoothTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            boothData={boothData}
            startTime="11:00"
            endTime="17:00"
            timePercent={timePercent}
          />
          <BoothTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            boothData={boothData}
            startTime="11:00"
            endTime="19:00"
            timePercent={timePercent}
          />
          <BoothTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            boothData={boothData}
            startTime="11:00"
            endTime="23:00"
            timePercent={timePercent}
          />
          <BoothTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            boothData={boothData}
            startTime="18:00"
            endTime="22:00"
            timePercent={timePercent}
            top="56px"
          />
        </S.BoothLeft>

        <S.BoothRight>
          <PerfomanceTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime="11:00"
            endTime="17:00"
            timePercent={timePercent}
          />
          <PerfomanceTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime="13:30"
            endTime="17:00"
            timePercent={timePercent}
            top="54px"
          />
          <PerfomanceTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime={festivalDate === 11 ? "15:00" : "14:30"}
            endTime="20:00"
            timePercent={timePercent}
            top={festivalDate === 11 ? "" : ""}
          />
          <PerfomanceTime
            realtimeList={realtimeList}
            isFestivalDay={isFestivalDay}
            PerfomanceData={PerfomanceData}
            startTime="20:00"
            endTime="22:00"
            timePercent={timePercent}
            top="100px"
          />
        </S.BoothRight>

        {/* 타임테이블 시간 바 */}
        <S.TimeStroke>
          <S.Stroke1 />
          <S.Stroke2 />
          {isFestivalDay() && (
            <S.TimeNow
              src="/timetable/realtime.png"
              style={{ top: imagePosition }}
            />
          )}
          <S.TimeStart />
          <S.TimeMid />
          <S.TimeEnd />
        </S.TimeStroke>
      </S.BoothDetailSection>
    </S.TimeTableWrapper>
  );
};
