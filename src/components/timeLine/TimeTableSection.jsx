import React, { useEffect, useState } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isFestivalDay = () => currentTime.getDate() === festivalDate;

  const boothTime = [
    {
      id: 1,
      startTime: "11:00",
      endTime: "17:00",
      top: "",
      scroll: ""
    },
    {
      id: 2,
      startTime: "11:00",
      endTime: "19:00",
      top: "",
      scroll: ""
    },
    {
      id: 3,
      startTime: "11:00",
      endTime: "23:00",
      top: "",
      scroll: "1"
    },
    {
      id: 4,
      startTime: "18:00",
      endTime: "22:00",
      top: "168px",
      scroll: "100"
    }
  ];
  const performanceTime = [
    {
      id: 1,
      startTime: "11:00",
      endTime: "17:00",
      top: "",
      scroll: ""
    },
    {
      id: 2,
      startTime: "13:30",
      endTime: "17:00",
      top: "70px",
      scroll: ""
    },
    {
      id: 3,
      startTime: festivalDate === 11 ? "15:00" : "14:30",
      endTime: "20:00",
      top: "72px",
      scroll: "70"
    },
    {
      id: 4,
      startTime: "20:00",
      endTime: "22:00",
      scroll: "100"
    }
  ];

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
          currentTime={currentTime}
        />
        {/* <S.BoothLeft>
          {boothTime.map(booth => (
            <BoothTime
              key={booth.id}
              realtimeList={realtimeList}
              boothData={boothData}
              startTime={booth.startTime}
              endTime={booth.endTime}
              top={booth.top}
            />
          ))}
        </S.BoothLeft> */}
        <S.BoothLeft>
          {boothTime.map((booth, index) => {
            const boothscroll = booth.scroll ? parseInt(booth.scroll) : 0;
            const isVisible = scrollY >= boothscroll;

            return (
              <BoothTime
                realtimeList={realtimeList}
                boothData={boothData}
                startTime={booth.startTime}
                endTime={booth.endTime}
                top={booth.top}
                isVisible={isVisible}
                index={index}
              />
            );
          })}
        </S.BoothLeft>

        <S.BoothRight>
          {performanceTime.map((performance, index) => {
            const performancescroll = performance.scroll
              ? parseInt(performance.scroll)
              : 0;
            const isVisible = scrollY >= performancescroll;

            return (
              <PerfomanceTime
                key={performance.id}
                realtimeList={realtimeList}
                currentTime={currentTime}
                isFestivalDay={isFestivalDay}
                PerfomanceData={PerfomanceData}
                startTime={performance.startTime}
                endTime={performance.endTime}
                top={performance.top}
                isVisible={isVisible}
                index={index}
              />
            );
          })}
        </S.BoothRight>
      </S.BoothDetailSection>
    </S.TimeTableWrapper>
  );
};
