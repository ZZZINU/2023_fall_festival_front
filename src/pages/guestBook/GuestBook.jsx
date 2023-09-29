import React from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";

function GuestBook() {
  const data = [
    "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ",
    "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
  ];
  return (
    <S.GuestBookWrapper>
      <PageTitle mainTitle={"방명록"} subTitle={"축제의 기록을 남겨주세요"} />

      <S.GuestBookContent>
        <S.GuestBookContentBox style={{ marginRight: "5px" }}>
          {data.map((item, index) => {
            return index % 2 == 0 ? (
              <S.GuestBookBox key={index}>
                <S.GeustBookIcon>🥹</S.GeustBookIcon>
                <S.GeustBookText>{item}</S.GeustBookText>
              </S.GuestBookBox>
            ) : (
              <></>
            );
          })}
        </S.GuestBookContentBox>
        <S.GuestBookContentBox style={{ marginLeft: "5px" }}>
          {data.map((item, index) => {
            return index % 2 == 1 ? (
              <S.GuestBookBox key={index}>
                <S.GeustBookIcon>🥹</S.GeustBookIcon>
                <S.GeustBookText>{item}</S.GeustBookText>
              </S.GuestBookBox>
            ) : (
              <></>
            );
          })}
        </S.GuestBookContentBox>
      </S.GuestBookContent>

      <S.GuestBookInputWrapper>
        <S.GuestBookInputIconWrapper>
          <S.GuestBookInputIcon>🥹</S.GuestBookInputIcon>
          <img src="./guestBook/icon_select.png" />
        </S.GuestBookInputIconWrapper>

        <S.GuestBookInput placeholder="방명록을 입력해주세요!(50자 이내)" />
        <S.GuestBookImg>
          <img src="./guestBook/icon_send.png" />
        </S.GuestBookImg>
      </S.GuestBookInputWrapper>
    </S.GuestBookWrapper>
  );
}

export default GuestBook;
