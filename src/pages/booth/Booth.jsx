import React, { useState } from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import DateSelector from "../../components/common/dateSelector/dateSelector";
import Marker from "../../components/common/booth/marker/Marker";

// 이미지
import MapImg from "../../assets/images/map.png";

function Booth() {
  const [selectedDate11, setSelectedDate11] = useState(true);
  const [markerStates, setMarkerStates] = useState("");
  // 전체 | 주간 | 야간 => 디폴트는 전체
  const [dayOrNight, setDayOrNight] = useState("전체부스");
  // 날짜 클릭
  const handleDateClick = bool => {
    setSelectedDate11(bool);
  };

  // 각 마커 클릭
  const handleMarkerClick = markerName => {
    setMarkerStates(markerName);
  };

  return (
    <>
      <PageTitle mainTitle={"부스 정보"} />
      <DateSelector
        selectedDate11={selectedDate11}
        handleDateClick={handleDateClick}
      />
      <S.MapWrap>
        <S.MapBox>
          <S.MapImg src={MapImg} alt="맵 이미지" />
          <S.MapBoxContent>핀을 눌러 정보를 확인하세요!</S.MapBoxContent>

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
          dayOrNight={dayOrNight}
          onClick={() => setDayOrNight("전체부스")}
          color={dayOrNight === "전체부스" ? "#FFF" : "#ffb2b2"}
          borderbottom={dayOrNight === "전체부스" ? "#FFF" : "none"}
        >
          전체부스
        </S.BoothCategry>
        <S.BoothCategry
          dayOrNight={dayOrNight}
          onClick={() => setDayOrNight("주간부스")}
          color={dayOrNight === "주간부스" ? "#FFF" : "#ffb2b2"}
          borderbottom={dayOrNight === "주간부스" ? "#FFF" : "none"}
        >
          주간부스
        </S.BoothCategry>
        <S.BoothCategry
          dayOrNight={dayOrNight}
          onClick={() => setDayOrNight("야간부스")}
          color={dayOrNight === "야간부스" ? "#FFF" : "#ffb2b2"}
          borderbottom={dayOrNight === "야간부스" ? "#FFF" : "none"}
        >
          야간부스
        </S.BoothCategry>
      </S.BoothCategryWrap>
    </>
  );
}

export default Booth;
