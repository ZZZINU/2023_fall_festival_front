import React from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";

function GuestBook() {
  const data = [
    "동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록",
    "동해물과백두산이마르고닳도록동해물과백두산이마르고닳도록"
  ];
  return (
    <S.GuestBookWrapper>
      <S.GuestBookInputWrapper>푸터</S.GuestBookInputWrapper>
      <PageTitle mainTitle={"방명록"} subTitle={"축제의 기록을 남겨주세요"} />

      <S.GuestBookContent>
        <S.GuestBookContentBox>
          {data.map((item, index) => {
            return index % 2 == 0 ? (
              <S.GeustBookTextBox key={index}>{item}</S.GeustBookTextBox>
            ) : (
              <></>
            );
          })}
        </S.GuestBookContentBox>

        <S.GuestBookContentBox>
          {data.map((item, index) => {
            return index % 2 == 1 ? (
              <S.GeustBookTextBox key={index}>{item}</S.GeustBookTextBox>
            ) : (
              <></>
            );
          })}
        </S.GuestBookContentBox>
      </S.GuestBookContent>
    </S.GuestBookWrapper>
  );
}

export default GuestBook;
