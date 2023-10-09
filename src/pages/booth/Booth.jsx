import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import DateSelector from "../../components/common/dateSelector/DateSelector";
import Marker from "../../components/common/booth/marker/Marker";
import BoothCard from "../../components/common/booth/boothCard/BoothCard";
import { API } from "../../api/axios";

// 이미지
import MapImg from "../../assets/images/map.png";

function Booth() {
  const location = useLocation();
  const festivalDate = location.state; // 타임테이블 전달 데이터
  const defaultDate = festivalDate === 12 ? false : true;

  const [selectedDate11, setSelectedDate11] = useState(defaultDate);

  // 날짜 11 | 12
  const [date, setDate] = useState(11);
  // 건물명 사회과학관 | 혜화관 | 팔정도 | 원흥관 | 만해광장 | 학생회관 | 학림관
  const [markerStates, setMarkerStates] = useState("");
  // 전체 | 주간 | 야간 | 기타 (추가) => 디폴트는 전체
  const [dayOrNight, setDayOrNight] = useState("");
  // 데이터
  const [data, setData] = useState([]);

  // 총 부스 개수
  const [count, setCount] = useState(0);
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  //데이터 로딩중
  const [isLoadData, setIsLoadData] = useState(true);

  // 날짜 클릭
  const handleDateClick = bool => {
    setSelectedDate11(bool);
    if (bool) {
      setDate(11);
    } else {
      setDate(12);
    }
  };

  // 각 마커 클릭
  const handleMarkerClick = markerName => {
    setMarkerStates(markerName);
  };

  // 새로 고침
  const handleRefreshClick = () => {
    setMarkerStates("");
  };

  // API 연결
  const fetchData = async () => {
    setCurrentPage(1);
    try {
      let typeParam = dayOrNight;

      if (dayOrNight === "기타부스") {
        typeParam = "푸드트럭&type=플리마켓";
      }

      let apiURL = `api/v1/booths?page=${1}&date=${date}`;

      if (markerStates) {
        apiURL += `&location=${markerStates}`;
      }

      if (typeParam) {
        apiURL += `&type=${typeParam}`;
      }

      const response = await API.get(apiURL);
      setData(response.data.results);
      setCount(response.data.count);
    } catch (error) {
      console.error("Error: ", error);
    }
    window.scrollTo(0, 0);
  };

  const loadData = async () => {
    try {
      let typeParam = dayOrNight;

      if (dayOrNight === "기타부스") {
        typeParam = "푸드트럭&type=플리마켓";
      }

      let apiURL = `api/v1/booths?page=${currentPage}&date=${date}`;

      if (markerStates) {
        apiURL += `&location=${markerStates}`;
      }

      if (typeParam) {
        apiURL += `&type=${typeParam}`;
      }

      const response = await API.get(apiURL);

      const newData = data.concat(response.data.results);
      setData(newData);
      setIsLoadData(true);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const [position, setPosition] = useState(0);
  const [throttle, setThrottle] = useState(false);

  function onScroll() {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(async () => {
        setPosition(window.scrollY);
        setThrottle(false);
      }, 500);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isLoadData && position != 0 && count / 10 > currentPage) {
      if (position + window.innerHeight + 10 > document.body.scrollHeight) {
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

  // 초기
  useEffect(() => {
    setCurrentPage(1);
    fetchData();
  }, [selectedDate11, markerStates, dayOrNight]);

  return (
    <>
      <S.Content>
        <S.BoothWrap>
          <S.NotBoothCard>
            <PageTitle mainTitle={"부스 정보"} />
            <DateSelector
              selectedDate11={selectedDate11}
              handleDateClick={handleDateClick}
            />
            <S.MapWrap>
              <S.MapBox>
                <S.MapImg src={MapImg} alt="맵 이미지" />
                <S.MapBoxContent onClick={handleRefreshClick}>
                  {markerStates ? "새로고침 ↺" : "핀을 눌러 정보를 확인하세요!"}
                </S.MapBoxContent>

                {/* 사회과학관 */}
                <Marker
                  markerName={"사회과학관"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"140px"}
                  clickbeforetop={"150px"}
                  clickafterleft={"37px"}
                  clickbeforeleft={"47px"}
                />

                {/* 혜화관 */}
                <Marker
                  markerName={"혜화관"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"103px"}
                  clickbeforetop={"113px"}
                  clickafterleft={"47px"}
                  clickbeforeleft={"55px"}
                />

                {/* 팔정도 */}
                <Marker
                  markerName={"팔정도"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"60px"}
                  clickbeforetop={"70px"}
                  clickafterleft={"140px"}
                  clickbeforeleft={"147px"}
                />

                {/* 원흥관 */}
                <Marker
                  markerName={"원흥관"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"30px"}
                  clickbeforetop={"40px"}
                  clickafterleft={"185px"}
                  clickbeforeleft={"193px"}
                />

                {/* 학생회관 */}
                <Marker
                  markerName={"학생회관"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"35px"}
                  clickbeforetop={"45px"}
                  clickafterleft={"250px"}
                  clickbeforeleft={"260px"}
                />

                {/* 만해광장 */}
                <Marker
                  markerName={"만해광장"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"70px"}
                  clickbeforetop={"80px"}
                  clickafterleft={"215px"}
                  clickbeforeleft={"225px"}
                />

                {/* 학림관 */}
                <Marker
                  markerName={"학림관"}
                  markerStates={markerStates}
                  handleMarkerClick={handleMarkerClick}
                  clickaftertop={"100px"}
                  clickbeforetop={"110px"}
                  clickafterleft={"243px"}
                  clickbeforeleft={"250px"}
                />
              </S.MapBox>
            </S.MapWrap>

            <S.BoothCategryWrap>
              <S.BoothCategry
                dayornight={dayOrNight}
                onClick={() => setDayOrNight("")}
                color={dayOrNight === "" ? "#FFF" : "#ffb2b2"}
                borderbottom={dayOrNight === "" ? "#FFF" : "none"}
              >
                전체부스
              </S.BoothCategry>
              <S.BoothCategry
                dayornight={dayOrNight}
                onClick={() => setDayOrNight("주간부스")}
                color={dayOrNight === "주간부스" ? "#FFF" : "#ffb2b2"}
                borderbottom={dayOrNight === "주간부스" ? "#FFF" : "none"}
              >
                주간부스
              </S.BoothCategry>
              <S.BoothCategry
                dayornight={dayOrNight}
                onClick={() => setDayOrNight("야간부스")}
                color={dayOrNight === "야간부스" ? "#FFF" : "#ffb2b2"}
                borderbottom={dayOrNight === "야간부스" ? "#FFF" : "none"}
              >
                야간부스
              </S.BoothCategry>

              <S.BoothCategry
                dayornight={dayOrNight}
                onClick={() => setDayOrNight("기타부스")}
                color={dayOrNight === "기타부스" ? "#FFF" : "#ffb2b2"}
                borderbottom={dayOrNight === "기타부스" ? "#FFF" : "none"}
              >
                기타부스
              </S.BoothCategry>
            </S.BoothCategryWrap>
          </S.NotBoothCard>

          <S.BoothCardWrap2>
            <S.BoothCardWrap>
              <BoothCard data={data} />
            </S.BoothCardWrap>
          </S.BoothCardWrap2>
        </S.BoothWrap>
      </S.Content>
    </>
  );
}

export default Booth;
