import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";

function GuestBook() {
  const data = [
    {
      icon: "hip",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재아~~~~~~언제끝나 미친~~~!~!밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "festival",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content: "축제정말재밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content: "축제정말재밌요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "festival",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content: "축제정말재밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "festival",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content: "축제정말재밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },
    {
      icon: "hip",
      content: "축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content: "축제정말재밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },

    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "festival",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content: "축제정말재밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "festival",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content: "축제정말재밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },

    {
      icon: "cry",
      content:
        "축제정말재밌네요ㅎㅎ축제요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요정말재밌네요ㅎㅎ"
    },
    {
      icon: "fire",
      content: "축제정ㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content:
        "축제정말재요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요밌네요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },

    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "fire",
      content:
        "축제정ㅎ축제정말재요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content:
        "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요요ㅎㅎ축추석인데제정말재밌네요ㅎㅎ"
    },

    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "fire",
      content:
        "축제정ㅎ축제정말재밌요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요네요ㅎㅎ"
    },
    {
      icon: "heart",
      content:
        "축제정말재밌네요ㅎㅎ축추석인요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요데제정말재밌네요ㅎㅎ"
    },

    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "fire",
      content: "축제정ㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "heart",
      content:
        "축제정말재밌네요ㅎㅎ축추석인요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요데제정말재밌네요ㅎㅎ"
    },

    {
      icon: "cry",
      content: "축제정말재밌네요ㅎㅎ축제정말재밌네요ㅎㅎ"
    },
    {
      icon: "fire",
      content: "축제정ㅎ축제정말재밌네요ㅎㅎ"
    }
  ];
  //현재 선택된 아이콘
  const [currentIcon, setCurrentIcon] = useState("cry");

  //아이콘 종류
  const iconList = ["cry", "hip", "fire", "festival", "heart"];
  const iconData = {
    cry: "🥹",
    hip: "😎",
    fire: "🔥",
    festival: "🎉",
    heart: "❤️"
  };

  //아이콘 선택창 ref
  const iconListRef = useRef();

  //방명록 쓰기창 ref
  const inputRef = useRef();
  const [focus, setFocus] = useState(false);

  const focusHandler = e => {
    if (!focus) {
      setFocus(true);
    }

    iconListRef.current.style.display = "flex";
    iconListRef.current.style.marginBottom = "20px";
  };
  const blurHandler = e => {
    if (focus) {
      setFocus(false);
    }

    iconListRef.current.style.display = "none";
    iconListRef.current.style.marginBottom = "0px";
  };

  const clickIcon = e => {
    setCurrentIcon(e.target.title);
  };

  return (
    <S.GuestBookWrapper>
      <PageTitle mainTitle={"방명록"} subTitle={"축제의 기록을 남겨주세요"} />

      <S.GuestBookContent>
        <S.GuestBookContentBox key={1} style={{ marginRight: "5px" }}>
          {data.map((item, index) => {
            return index % 2 == 0 ? (
              <S.GuestBookBox key={index * 2}>
                <S.GeustBookIcon>{iconData[item.icon]}</S.GeustBookIcon>
                <S.GeustBookText>{item.content}</S.GeustBookText>
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
                <S.GeustBookIcon>{iconData[item.icon]}</S.GeustBookIcon>
                <S.GeustBookText>{item.content}</S.GeustBookText>
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
            >
              {iconData[currentIcon]}
            </S.GuestBookInputIconBox>
          </S.GuestBookInputIconSelector>

          <S.GuestBookInputIconList ref={iconListRef}>
            {iconList.map((name, index) => {
              return (
                <S.GuestBookInputIconBox
                  onMouseDown={event => {
                    event.preventDefault();
                  }}
                  onClick={clickIcon}
                  title={name}
                  key={index}
                  $isActive={currentIcon == name}
                >
                  {iconData[name]}
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
