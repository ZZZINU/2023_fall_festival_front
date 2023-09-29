import React, { useEffect, useRef, useState } from "react";
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
  const [currentIcon, setCurrentIcon] = useState("cry");
  const iconData = [
    { name: "cry", icon: "🥹" },
    { name: "hip", icon: "😎" },
    { name: "fire", icon: "🔥" },
    { name: "festival", icon: "🎉" },
    { name: "heart", icon: "❤️" }
  ];

  const inputRef = useRef();
  const iconListRef = useRef();
  const [focus, setFocus] = useState(false);

  const focusHandler = e => {
    if (!focus) {
      setFocus(true);
    }
    console.log(`focus Handler ${e.target.value}`);
    iconListRef.current.style.display = "flex";
    iconListRef.current.style.marginBottom = "20px";
  };
  const blurHandler = e => {
    if (focus) {
      setFocus(false);
    }
    console.log(`blur Handler ${e.target.value}`);
    iconListRef.current.style.display = "none";
    iconListRef.current.style.marginBottom = "0px";
    console.log(e);
  };

  useEffect(() => {
    console.log(focus);
  }, [focus]);

  const clickIcon = e => {
    console.log("열림");
  };

  return (
    <S.GuestBookWrapper>
      <PageTitle mainTitle={"방명록"} subTitle={"축제의 기록을 남겨주세요"} />

      <S.GuestBookContent>
        <S.GuestBookContentBox key={1} style={{ marginRight: "5px" }}>
          {data.map((item, index) => {
            return index % 2 == 0 ? (
              <S.GuestBookBox key={index * 2}>
                <S.GeustBookIcon>🥹</S.GeustBookIcon>
                <S.GeustBookText>{item}</S.GeustBookText>
              </S.GuestBookBox>
            ) : (
              <></>
            );
          })}
        </S.GuestBookContentBox>

        <S.GuestBookContentBox key={2} style={{ marginLeft: "5px" }}>
          {data.map((item, index) => {
            return index % 2 == 1 ? (
              <S.GuestBookBox key={index * 2 + 1}>
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
          <S.GuestBookInputIconSelector>
            <S.GuestBookInputIconBox
              onMouseDown={event => {
                event.preventDefault();
              }}
              onClick={clickIcon}
            ></S.GuestBookInputIconBox>
          </S.GuestBookInputIconSelector>

          <S.GuestBookInputIconList ref={iconListRef}>
            {iconData.map((item, index) => {
              return (
                <S.GuestBookInputIconBox
                  onMouseDown={event => {
                    event.preventDefault();
                  }}
                  onClick={clickIcon}
                  key={index}
                >
                  {item.icon}
                </S.GuestBookInputIconBox>
              );
            })}
          </S.GuestBookInputIconList>
        </S.GuestBookInputIconWrapper>

        <div style={{ display: "flex", width: "100%" }}>
          <S.GuestBookInput
            ref={inputRef}
            placeholder="방명록을 입력해주세요!(50자 이내)"
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
          <S.GuestBookImg style={{ marginLeft: "15px" }}>
            <img src="./guestBook/icon_send.png" />
          </S.GuestBookImg>
        </div>
      </S.GuestBookInputWrapper>
    </S.GuestBookWrapper>
  );
}

export default GuestBook;
