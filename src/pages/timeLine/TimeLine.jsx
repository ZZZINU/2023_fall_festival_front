import React, { useEffect, useState } from "react";
import * as S from "./style";
import { TimeLineTop } from "../../components/timeLine/TimeLineTop";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import { TimeTableSection } from "../../components/timeLine/TimeTableSection";
import { LineUp } from "../../components/timeLine/LineUp";

function TimeLine() {
  // 부스/공연 데이터 --------------------------------------------
  const boothData = [
    {
      id: 1,
      title: "푸드 트럭",
      place: "만해광장",
      devide: "푸드",
      isBooth: false,
      date: "2023-10-11",
      starttime: "12:00",
      endtime: "18:00"
    },
    {
      id: 2,
      title: "주간 부스",
      place: "팔정도 외",
      devide: "부스",
      isBooth: true,
      date: "2023-10-11",
      starttime: "12:00",
      endtime: "18:00"
    },
    {
      id: 3,
      title: "야시장",
      place: "만해광장",
      devide: "푸드",
      isBooth: false,
      date: "2023-10-11",
      starttime: "18:00",
      endtime: "22:00"
    },
    {
      id: 4,
      title: "야간 부스",
      place: "팔정도 외",
      devide: "부스",
      isBooth: true,
      date: "2023-10-11",
      starttime: "18:00",
      endtime: "22:00"
    },
  ];
  const PerfomanceData = [
    {
      id: 1,
      title: "동면 가왕제",
      place: "대운동장",
      date: "2023-10-11",
      devide: "가왕제",
      starttime: "14:00",
      endtime: "16:00"
    },
    {
      id: 2,
      title: "연예인 공연",
      place: "대운동장",
      date: "2023-10-11",
      devide: "페스티벌",
      starttime: "18:00",
      endtime: "21:00"
    },
  ];

  // 시간 감지 State --------------------------------------------
  const [festivalDate, setFestivalDate] = useState(11); // 선택 날짜가 11일이면 11, 12일이면 12
  // const [currentTime, setCurrentTime] = useState(new Date("2023-10-11 16:00"));
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  // 현재 시간과 공연 시간 비교--------------------------------------------
  const boothDataWithCurrentFlag = boothData.map(item => {
    // const startTime = new Date(`2023-09-30 ${item.starttime}`);
    // const endTime = new Date(`2023-09-30 ${item.endtime}`);
    const startTime = new Date(`2023-10-11 ${item.starttime}`);
    const endTime = new Date(`2023-10-11 ${item.endtime}`);
    const isCurrent = currentTime >= startTime && currentTime < endTime;
    return {
      ...item,
      isCurrent: isCurrent
    };
  });

  const PerfomanceDataWithCurrentFlag = PerfomanceData.map(item => {
    // const startTime = new Date(`2023-09-30 ${item.starttime}`);
    // const endTime = new Date(`2023-09-30 ${item.endtime}`);
    const startTime = new Date(`2023-10-11 ${item.starttime}`);
    const endTime = new Date(`2023-10-11 ${item.endtime}`);
    const isCurrent = currentTime >= startTime && currentTime < endTime;

    return {
      ...item,
      isCurrent: isCurrent
    };
  });

  const filteredBoothData = boothDataWithCurrentFlag.filter(
    item => item.isCurrent
  );
  const filteredPerfomanceData = PerfomanceDataWithCurrentFlag.filter(
    item => item.isCurrent
  );
  const realtimeList = filteredPerfomanceData.concat(filteredBoothData);

  return (
    <S.TimeLineWrapper>
      <PageTitle mainTitle="타임테이블" />
      <TimeLineTop
        festivalDate={festivalDate}
        setFestivalDate={setFestivalDate}
      />
      <TimeTableSection
        realtimeList={realtimeList}
        boothData={boothDataWithCurrentFlag}
        PerfomanceData={PerfomanceDataWithCurrentFlag}
        currentTime={currentTime}
        festivalDate={festivalDate}
      />
      <PageTitle mainTitle="라인업" />
      <LineUp festivalDate={festivalDate} />
    </S.TimeLineWrapper>
  );
}

export default TimeLine;