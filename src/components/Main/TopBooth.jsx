import React, { useState, useEffect } from "react";
import TopBoothCard from "./TopBoothCard"; // TopBoothCard 컴포넌트를 import합니다.
import { styled } from "styled-components";
import axios from "axios";
import { API } from "../../api/axios";
const TopBoothWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
`;
const CardWrapper = styled.div`
  margin: 7px; // 카드 간 간격을 조절할 수 있습니다.
`;

function TopBooth() {
  const [topBoothData, setTopBoothData] = useState([]);

  async function fetchData() {
    try {
      const response = await API.get("api/v1/booths/hot");
      console.log("API 요청 성공:", response.data);
      const data = response.data;

      const sortedData = data.sort((a, b) => b.like_cnt - a.like_cnt);

      setTopBoothData(sortedData);
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // 데이터를 받아온 후에 topBoothData 배열의 첫 번째, 두 번째, 세 번째 요소를 추출
  const firstBooth = topBoothData[0] || {};
  const secondBooth = topBoothData[1] || {};
  const thirdBooth = topBoothData[2] || {};

  return (
    <TopBoothWrapper>
      <CardWrapper>
        <TopBoothCard
          boothId={secondBooth.id}
          boothImgUrl={secondBooth.thumbnail}
          boothType={secondBooth.type}
          boothTitle={secondBooth.name}
          boothDescript={secondBooth.description}
          locationContent={secondBooth.location}
          heartNum={secondBooth.like_cnt}
          logoWidth="120px"
          bgHeight="190px"
          boothGradeImgurl="/Main/silver.png"
        />
      </CardWrapper>

      {/* 두 번째 TopBoothCard (크기 조절) */}
      <CardWrapper>
        <TopBoothCard
          boothId={firstBooth.id}
          boothImgUrl={firstBooth.thumbnail}
          boothType={firstBooth.type}
          boothTitle={firstBooth.name}
          boothDescript={firstBooth.description}
          locationContent={firstBooth.location}
          heartNum={firstBooth.like_cnt}
          titleFont="15px"
          pinImg="14px"
          locationFont="10px"
          heartImg="14px"
          wholeMargin="none"
          marginTop="14px"
        />
      </CardWrapper>

      {/* 세 번째 TopBoothCard (다른 크기) */}
      <CardWrapper>
        <TopBoothCard
          boothId={thirdBooth.id}
          boothImgUrl={thirdBooth.thumbnail}
          boothType={thirdBooth.type}
          boothTitle={thirdBooth.name}
          boothDescript={thirdBooth.description}
          locationContent={thirdBooth.location}
          heartNum={thirdBooth.like_cnt}
          logoWidth="120px"
          bgHeight="190px"
          boothGradeImgurl="/Main/bronze.png"
        />
      </CardWrapper>
    </TopBoothWrapper>
  );
}

export default TopBooth;
