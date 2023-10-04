import React, { useEffect, useState } from "react";
import * as S from "./style";
import { TimeLineTop } from "../../components/timeLine/TimeLineTop";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import { TimeTableSection } from "../../components/timeLine/TimeTableSection";
import { LineUp } from "../../components/timeLine/LineUp";

function TimeLine() {
  // 부스/공연 데이터 --------------------------------------------
  const booth11Data = [
    {
      id: 1,
      title: "주간 부스",
      place: "팔정도 외",
      devide: "부스",
      isBooth: true,
      date: "2023-10-11",
      starttime: "11:00",
      endtime: "17:00"
    },
    {
      id: 2,
      title: "플리마켓",
      place: "팔정도",
      devide: "부스",
      isBooth: false,
      date: "2023-10-11",
      starttime: "11:00",
      endtime: "19:00"
    },
    {
      id: 3,
      title: "푸드 트럭",
      place: "만해광장",
      devide: "푸드",
      isBooth: false,
      date: "2023-10-11",
      starttime: "11:00",
      endtime: "23:00"
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
    }
  ];
  const booth12Data = [
    {
      id: 1,
      title: "주간 부스",
      place: "팔정도 외",
      devide: "부스",
      isBooth: true,
      date: "2023-10-12",
      starttime: "11:00",
      endtime: "17:00"
    },
    {
      id: 2,
      title: "플리마켓",
      place: "팔정도",
      devide: "부스",
      isBooth: false,
      date: "2023-10-12",
      starttime: "11:00",
      endtime: "19:00"
    },
    {
      id: 3,
      title: "푸드 트럭",
      place: "만해광장",
      devide: "푸드",
      isBooth: false,
      date: "2023-10-12",
      starttime: "11:00",
      endtime: "23:00"
    },
    {
      id: 4,
      title: "야간 부스",
      place: "팔정도 외",
      devide: "부스",
      isBooth: true,
      date: "2023-10-12",
      starttime: "18:00",
      endtime: "22:00"
    }
  ];
  const Perfomance11Data = [
    {
      id: 1,
      title: "축기단 콘텐츠",
      place: "만해광장",
      date: "2023-10-11",
      devide: "",
      starttime: "11:00",
      endtime: "17:00"
    },
    {
      id: 2,
      title: "단체 공연",
      place: "팔정도",
      date: "2023-10-11",
      devide: "가왕제",
      starttime: "13:30",
      endtime: "17:00"
    },
    {
      id: 3,
      title: "동아리 공연",
      place: "대운동장",
      date: "2023-10-11",
      devide: "가왕제",
      starttime: "15:00",
      endtime: "20:00"
    },
    {
      id: 4,
      title: "가요제",
      place: "대운동장",
      date: "2023-10-11",
      devide: "페스티벌",
      starttime: "15:00",
      endtime: "20:00"
    },
    {
      id: 5,
      title: "연예인 공연",
      place: "대운동장",
      date: "2023-10-11",
      devide: "페스티벌",
      starttime: "20:00",
      endtime: "22:00"
    }
  ];
  const Perfomance12Data = [
    {
      id: 1,
      title: "축기단 콘텐츠",
      place: "팔정도",
      date: "2023-10-12",
      devide: "",
      starttime: "11:00",
      endtime: "17:00"
    },
    {
      id: 2,
      title: "단체 공연",
      place: "팔정도",
      date: "2023-10-12",
      devide: "가왕제",
      starttime: "13:30",
      endtime: "17:00"
    },
    {
      id: 3,
      title: "동아리 공연",
      place: "대운동장",
      date: "2023-10-12",
      devide: "가왕제",
      starttime: "14:30",
      endtime: "20:00"
    },
    {
      id: 4,
      title: "백상 응원단",
      place: "대운동장",
      date: "2023-10-12",
      devide: "페스티벌",
      starttime: "14:30",
      endtime: "20:00"
    },
    {
      id: 5,
      title: "연예인 공연",
      place: "대운동장",
      date: "2023-10-12",
      devide: "페스티벌",
      starttime: "20:00",
      endtime: "22:00"
    }
  ];

  // 시간 감지 State --------------------------------------------
  const [currentTime, setCurrentTime] = useState(new Date("2023-10-11 18:00"));
  let defaultDate = parseInt(currentTime.getDate());
  const [festivalDate, setFestivalDate] = useState(defaultDate);

  const updateTime = () => {
    setCurrentTime(new Date());
  };
  /*
  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
*/

  // 실시간 부스, 공연 정보 --------------------------------------------
  const getRealtimeInfo = () => {
    const currentDate = currentTime.getDate();

    let currentData;

    if (currentDate === 11) {
      currentData = booth11Data.concat(Perfomance11Data);
    } else if (currentDate === 12) {
      currentData = booth12Data.concat(Perfomance12Data);
    }

    const realtimeList = currentData.filter(item => {
      const startTime = new Date(
        `${currentTime.getFullYear()}-${
          currentTime.getMonth() + 1
        }-${currentDate} ${item.starttime}`
      );
      const endTime = new Date(
        `${currentTime.getFullYear()}-${
          currentTime.getMonth() + 1
        }-${currentDate} ${item.endtime}`
      );

      return startTime <= currentTime && currentTime <= endTime;
    });

    return realtimeList;
  };

  const realtimeList = getRealtimeInfo();

  return (
    <S.TimeLineWrapper>
      <PageTitle mainTitle="타임테이블" />
      <TimeLineTop
        festivalDate={festivalDate}
        setFestivalDate={setFestivalDate}
      />
      <TimeTableSection
        realtimeList={realtimeList}
        boothData={festivalDate === 11 ? booth11Data : booth12Data}
        PerfomanceData={
          festivalDate === 11 ? Perfomance11Data : Perfomance12Data
        }
        currentTime={currentTime}
        festivalDate={festivalDate}
      />
      <PageTitle mainTitle="라인업" />
      <LineUp festivalDate={festivalDate} />
    </S.TimeLineWrapper>
  );
}

export default TimeLine;
