import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import { API } from "../../api/axios";
import Modal from "../../components/common/modal/Modal";
import ModalImg from "./Warning.png";
import Loading from "../../components/common/loading/Loading";
import GuestBookCard from "../../components/common/guestBook/GuestBookCard";
import sanitizeHtml from "sanitize-html";

function GuestBook() {
  // const responseData = [
  //   { icon: "festival", content: "1" },
  //   { icon: "cry", content: "2" },
  //   { icon: "cry", content: "3" },
  //   { icon: "cry", content: "4" },
  //   { icon: "cry", content: "5" },
  //   { icon: "cry", content: "6" },
  //   { icon: "cry", content: "7" },
  //   { icon: "cry", content: "8" },
  //   { icon: "cry", content: "9" },
  //   { icon: "cry", content: "10" }
  // ];

  //페이지네이션 한계주기
  const [finLoad, setFinLoad] = useState(false);
  //데이터 패치중일때 -> 초기화면 띄울거임
  const [isFetchData, setIsFetchData] = useState(false);
  //데이터 로딩중일때 -> 로딩화면 띄울거임
  const [isLoadData, setIsLoadData] = useState(true);

  //총 글 갯수 /20하면 총 페이지 수 보기
  const [count, setCount] = useState(0);
  //현재 페이지
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

      setCount(
        dataLeft_api_respone.data.count + dataRight_api_respone.data.count
      );

      setDataLeft(dataLeft_api_respone.data.results);
      setDataRight(dataRight_api_respone.data.results);

      // //테스트 용
      // setDataLeft(responseData);
      // setDataRight(responseData);
      // setCount(300);
      setIsFetchData(true);
    } catch (error) {
      console.log("처음 데이터를 로딩하는 중 오류 발생", error);
    }
    window.scrollTo(0, 0);
  };

  const loadData = async () => {
    try {
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

      // //테스트용
      // const newResponseData = dataLeft.concat(responseData);
      // setDataLeft(newResponseData);
      // setDataRight(newResponseData);

      setIsLoadData(true);
    } catch (error) {
      console.log("추가 데이터를 로딩하는 중 오류 발생", error);
    }
  };

  //처음 로딩될때 초기값넣기
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setContentListLeft_Height(contentListLeft_Ref.current?.offsetHeight);
    setContentListRight_Height(contentListRight_Ref.current?.offsetHeight);
  }, [isFetchData, isLoadData]);

  const [position, setPosition] = useState(0);
  const contentListLeft_Ref = useRef();
  const contentListRight_Ref = useRef();

  const [contentListLeft_Height, setContentListLeft_Height] = useState(0);
  const [contentListRight_Height, setContentListRight_Height] = useState(0);

  const [throttle, setThrottle] = useState(false);

  function onScroll() {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(async () => {
        setPosition(window.scrollY);
        setThrottle(false);
      }, 300);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // console.log(contentListRight_Height, "/", position + window.innerHeight);
    if (isFetchData) {
      if (currentPage > 9 || count / 20 < currentPage) {
        setFinLoad(true);
        return;
      }
    }

    if (isLoadData && position != 0 && count / 20 > currentPage) {
      if (
        position + window.innerHeight > contentListLeft_Height ||
        position + window.innerHeight > contentListRight_Height
      ) {
        setIsLoadData(false);
        setCurrentPage(currentPage + 1);
      }
    }
  }, [position]);

  useEffect(() => {
    if (currentPage >= 2) {
      loadData();
    }
  }, [currentPage]);

  //-------- 모달창

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

  //-------- 입력 관련
  //현재 선택된 아이콘
  const [currentIcon, setCurrentIcon] = useState("festival");

  //아이콘 종류
  const iconList = ["festival", "cry", "happy", "hip", "heart", "fire", "best"];
  const iconData = {
    cry: "🥹",
    hip: "😎",
    happy: "😆",
    fire: "🔥",
    festival: "🥳",
    heart: "💖",
    best: "👍"
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
          content="도배 방지를 위해 30초 이후 작성 가능합니다."
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
                <GuestBookCard
                  key={index}
                  icon={iconData[item.icon]}
                  content={item.content}
                  marginBottom="20px"
                />
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
                <GuestBookCard
                  key={index}
                  icon={iconData[item.icon]}
                  content={item.content}
                  marginBottom="20px"
                />
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
      {finLoad ? (
        <S.FinLoad>한번에 볼 수 있는 데이터를 전부 로드했어요!</S.FinLoad>
      ) : (
        ""
      )}

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
