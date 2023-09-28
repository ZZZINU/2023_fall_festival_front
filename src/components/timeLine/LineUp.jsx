import React from "react";
import * as S from "./style";

export const LineUp = ({ festivalDate }) => {
  const firstDay = [
    {
      engname: "KwonEunBi",
      name: "권은비",
      time: "18:00 ~ 20:00",
      img: ""
    },
    {
      engname: "Day Break",
      name: "데이브레이크",
      time: "18:00 ~ 20:00",
      img: ""
    }
  ];
  const secondDay = [
    {
      engname: "Park Myung Soo",
      name: "박명수",
      time: "18:00 ~ 20:00",
      img: ""
    },
    {
      engname: "Day Break",
      name: "데이브레이크",
      time: "18:00 ~ 20:00",
      img: ""
    }
  ];

  return (
    <S.LineUpWrapper>
      <div>10월 {festivalDate}일</div>
      {festivalDate == 11 &&
        firstDay.map(show => (
          <>
            <img src={show.img} alt="img" />
            <div>{show.engname}</div>
            <div>{show.name}</div>
            <div>{show.time}</div>
          </>
        ))}
      {festivalDate == 12 &&
        secondDay.map(show => (
          <>
            <img src={show.img} alt="img" />
            <div>{show.engname}</div>
            <div>{show.name}</div>
            <div>{show.time}</div>
          </>
        ))}
    </S.LineUpWrapper>
  );
};
