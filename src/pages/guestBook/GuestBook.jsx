import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import { API } from "../../api/axios";
import Modal from "../../components/common/modal/Modal";
import ModalImg from "./Warning.png";
import Loading from "../../components/common/loading/Loading";

function GuestBook() {
  const [showAbusedModal, setShowAbusedModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  // 모달 닫기 함수
  const handleCloseAbusedModal = () => {
    setShowAbusedModal(false);
    location.reload();
  };

  const handleCloseTimeModal = () => {
    setShowTimeModal(false);
  };

  const [isFetchData, setIsFetchData] = useState(false);
  const [isLoadData, setIsLoadData] = useState(true);

  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [dataLeft, setDataLeft] = useState([]);
  const [dataRight, setDataRight] = useState([]);
  const fetchData = async () => {
    try {
      const dataLeft_api_respone = await API.get(
        `api/v1/chat/dataleft?page=${currentPage}`
      );
      const dataRight_api_respone = await API.get(
        `api/v1/chat/dataright?page=${currentPage}`
      );

      // console.log(
      //   "데이터 패치중...",
      //   dataLeft_api_respone,
      //   dataRight_api_respone,
      //   dataLeft_api_respone.data.count + dataRight_api_respone.data.count
      // );

      setCount(
        dataLeft_api_respone.data.count + dataRight_api_respone.data.count
      );

      setDataLeft(dataLeft_api_respone.data.results);
      setDataRight(dataRight_api_respone.data.results);
      // setDataLeft(dataLeft_response);
      // setDataRight(dataRight_response);
      // setCount(200);

      setIsFetchData(true);
    } catch (error) {
      console.log("처음 데이터를 로딩하는 중 오류 발생", error);
    }
    setContentListLeft_Height(contentListLeft_Ref.current?.offsetHeight);
    setContentListRight_Height(contentListRight_Ref.current?.offsetHeight);
    window.scrollTo(0, 0);
  };
  //처음 로딩될때 초기값넣기
  useEffect(() => {
    fetchData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoadData(false);
      const dataLeft_api_respone = await API.get(
        `api/v1/chat/dataleft?page=${currentPage}`
      );
      const dataRight_api_respone = await API.get(
        `api/v1/chat/dataright?page=${currentPage}`
      );

      const newDataLeft = dataLeft.concat(dataLeft_api_respone.data.results);
      const newDataRight = dataRight.concat(dataRight_api_respone.data.results);
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
    setPosition(window.scrollY);
  }

  useEffect(() => {
    // console.log("Position", position, position + window.innerHeight);
    // console.log("height", contentListLeft_Height, contentListRight_Height);
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
    if (currentPage >= 2) {
      loadData();
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  //현재 선택된 아이콘
  const [currentIcon, setCurrentIcon] = useState("festival");

  //아이콘 종류
  const iconList = ["festival", "cry", "hip", "fire", "heart"];
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

  const handleSubmit = async () => {
    console.log("제출버튼 클릭됨");
    try {
      const response = await API.post(`api/v1/chat`, {
        content: inputRef.current?.value,
        icon: currentIcon
      });
      console.log(response);
      //욕설을 사용했을경우
      if (response.data.is_abused) {
        setShowAbusedModal(true);
      } else {
        location.reload();
      }
    } catch (error) {
      console.log("제출에 실패함", error.response.status);
      if (error.response.status == 400) {
        setShowTimeModal(true);
      }
    }
  };

  return (
    <S.GuestBookWrapper>
      {showAbusedModal && (
        <Modal
          img={ModalImg}
          content="욕설이나 비방은 삼가주세요."
          onClose={handleCloseAbusedModal}
        />
      )}
      {showTimeModal && (
        <Modal
          img={ModalImg}
          content="도배 방지를 위해 60초 이후 작성 가능합니다."
          onClose={handleCloseTimeModal}
        />
      )}

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
            <>
              <S.GuestBookBox>
                <S.GeustBookIcon>🌞</S.GeustBookIcon>
                <S.GeustBookText>
                  2023 동국대학교 가을 축제 파이팅!
                </S.GeustBookText>
              </S.GuestBookBox>
              <S.GuestBookBox>
                <S.GeustBookIcon>🏃</S.GeustBookIcon>
                <S.GeustBookText>
                  축제의 기록을 불러오는 중입니다! 잠시만 기다려주세요!
                </S.GeustBookText>
              </S.GuestBookBox>
              <S.GuestBookBox>
                <S.GeustBookIcon>🌞</S.GeustBookIcon>
                <S.GeustBookText>
                  2023 동국대학교 가을 축제 파이팅!
                </S.GeustBookText>
              </S.GuestBookBox>
              <S.GuestBookBox>
                <S.GeustBookIcon>🏃</S.GeustBookIcon>
                <S.GeustBookText>
                  축제의 기록을 불러오는 중입니다! 잠시만 기다려주세요!
                </S.GeustBookText>
              </S.GuestBookBox>
            </>
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
            <>
              <S.GuestBookBox>
                <S.GeustBookIcon>🏃</S.GeustBookIcon>
                <S.GeustBookText>
                  축제의 기록을 불러오는 중입니다! 잠시만 기다려주세요!
                </S.GeustBookText>
              </S.GuestBookBox>
              <S.GuestBookBox>
                <S.GeustBookIcon>🌞</S.GeustBookIcon>
                <S.GeustBookText>
                  2023 동국대학교 가을 축제 파이팅!
                </S.GeustBookText>
              </S.GuestBookBox>
              <S.GuestBookBox>
                <S.GeustBookIcon>🏃</S.GeustBookIcon>
                <S.GeustBookText>
                  축제의 기록을 불러오는 중입니다! 잠시만 기다려주세요!
                </S.GeustBookText>
              </S.GuestBookBox>
              <S.GuestBookBox>
                <S.GeustBookIcon>🌞</S.GeustBookIcon>
                <S.GeustBookText>
                  2023 동국대학교 가을 축제 파이팅!
                </S.GeustBookText>
              </S.GuestBookBox>
            </>
          )}
        </S.GuestBookContentBox>
      </S.GuestBookContent>
      {isLoadData ? <></> : <Loading />}

      <S.GuestBookInputWrapper>
        <S.GuestBookInputIconWrapper>
          <S.GuestBookInputIconSelector>
            <S.GuestBookInputCurrentIconBox
              onMouseDown={event => {
                event.preventDefault();
              }}
            >
              {iconData[currentIcon]}
            </S.GuestBookInputCurrentIconBox>
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

        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <S.GuestBookInput
            ref={inputRef}
            maxlength="50"
            placeholder="방명록을 작성해주세요! (50자 이내)"
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
          <S.GuestBookImg style={{ marginLeft: "15px" }} onClick={handleSubmit}>
            <img src="./guestBook/icon_send.png" />
          </S.GuestBookImg>
        </div>
      </S.GuestBookInputWrapper>

      <div style={{ height: "70px" }}></div>
    </S.GuestBookWrapper>
  );
}

export default GuestBook;
