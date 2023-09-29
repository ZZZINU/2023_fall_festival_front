import React, { useEffect, useState } from "react";
import * as S from "./style";
import MiniLogo from "../../assets/images/timetable_logo.png";
import MiniLocation from "../../assets/images/timetable_location.png";
import { BoothCard } from "./boothCard/BoothCard";
import { PerfomanceCard } from "./boothCard/PerfomanceCard";

export const TimeTableSection = ({ boothData, PerfomanceData }) => {

  // console.log(boothData);
  // 부스 데이터 시간별 정리
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

  // 공연 데이터 시간별 정리
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

  return (
    <S.TimeTableWrapper>
      <S.TimeTableNav>
        <S.TimeTableSubTxt>
          <img src={MiniLogo} alt="Logo" />
          실시간
        </S.TimeTableSubTxt>
        <S.TimeTableMainTxt>동면 가왕제</S.TimeTableMainTxt>
        <S.TimeTableSubTxt2>
          <S.LocationIMG src={MiniLocation} alt="Logo" />
          대운동장
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
      <S.BoothDetailSection>
        <S.BoothLeft>
          {/* 부스 목록 */}
          <S.BoothTimeSection>12:00 ~ 18:00</S.BoothTimeSection>
          {booth12List.map(booth => (
            <BoothCard booth={booth} />
          ))}

          <S.BoothTimeSection>18:00 ~ 22:00</S.BoothTimeSection>
          {booth18List.map(booth => (
            <BoothCard booth={booth} />
          ))}
        </S.BoothLeft>
        <S.BoothRight>
          {/* 공연 목록 */}
          <S.PerformTimeSection isnow="true">14:00 ~ 16:00</S.PerformTimeSection>
          {perform14List.map(booth => (
            <PerfomanceCard booth={booth} />
          ))}
          <S.PerformTimeSection>18:00 ~ 21:00</S.PerformTimeSection>
          {perform18List.map(booth => (
            <PerfomanceCard booth={booth} />
          ))}
        </S.BoothRight>
      </S.BoothDetailSection>
    </S.TimeTableWrapper>
  );
};
