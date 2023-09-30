import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";

function GuestBook() {
  const [isFetchData, setIsFetchData] = useState(false);
  const [isLoadData, setIsLoadData] = useState(true);

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [dataLeft, setDataLeft] = useState([]);
  const [dataRight, setDataRight] = useState([]);
  const fetchData = async () => {
    try {
      console.log("데이터 패치중...");
      setCount(200);
      setIsFetchData(true);
    } catch (error) {
      console.log("처음 데이터를 로딩하는 중 오류 발생", error);
    }
  };
  //처음 로딩될때 초기값넣기
  useEffect(() => {
    setDataLeft(dataLeft_response);
    setDataRight(dataRight_response);
    fetchData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoadData(false);
      const newDataLeft = dataLeft.concat(dataLeft_response);
      const newDataRight = dataRight.concat(dataRight_response);
      setDataLeft(newDataLeft);
      setDataRight(newDataRight);
      setIsLoadData(true);
    } catch (error) {
      console.log("추가 데이터를 로딩하는 중 오류 발생", error);
    }
  };

  const [position, setPosition] = useState(0);
  const contentListLeft_Ref = useRef();
  const contentListRight_Ref = useRef();

  const [contentListLeft_Height, setContentListLeft_Height] = useState(0);
  const [contentListRight_Height, setContentListRight_Height] = useState(0);

  function onScroll() {
    console.log("height", contentListLeft_Height, contentListRight_Height);
    setPosition(window.scrollY);
  }

  useEffect(() => {
    setContentListLeft_Height(contentListLeft_Ref.current?.offsetHeight);
    setContentListRight_Height(contentListRight_Ref.current?.offsetHeight);
  }, [isFetchData]);

  useEffect(() => {
    console.log("Position", position, position + window.innerHeight);
    console.log("height", contentListLeft_Height, contentListRight_Height);
    if (isLoadData && position != 0 && count / 20 > currentPage) {
      if (
        position + window.innerHeight > contentListLeft_Height ||
        position + window.innerHeight > contentListRight_Height
      ) {
        setCurrentPage(currentPage + 1);
      }
    }
  }, [position]);

  useEffect(() => {
    loadData();
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dataLeft_response = [
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
      icon: "festival",
      content:
        "축제정말재밌네요ㅎㅎ축추석인요ㅎㅎ축제정말재밌네요ㅎㅎ축제정말재밌네요데제정말재밌네요ㅎㅎ"
    }
  ];

  const dataRight_response = [
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
        <S.GuestBookContentBox
          style={{ marginRight: "5px" }}
          ref={contentListLeft_Ref}
        >
          {isFetchData ? (
            dataLeft.map((item, index) => {
              return (
                <S.GuestBookBox key={index}>
                  <S.GeustBookIcon>{iconData[item.icon]}</S.GeustBookIcon>
                  <S.GeustBookText>{item.content}</S.GeustBookText>
                </S.GuestBookBox>
              );
            })
          ) : (
            <div>로딩중</div>
          )}
        </S.GuestBookContentBox>

        <S.GuestBookContentBox
          style={{ marginLeft: "5px" }}
          ref={contentListRight_Ref}
        >
          {isFetchData ? (
            dataRight.map((item, index) => {
              return (
                <S.GuestBookBox key={index}>
                  <S.GeustBookIcon>{iconData[item.icon]}</S.GeustBookIcon>
                  <S.GeustBookText>{item.content}</S.GeustBookText>
                </S.GuestBookBox>
              );
            })
          ) : (
            <div>로딩중</div>
          )}
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
      {isLoadData ? <></> : <div>로딩중</div>}
      <div style={{ height: "70px" }}></div>
    </S.GuestBookWrapper>
  );
}

export default GuestBook;
