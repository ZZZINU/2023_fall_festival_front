import React, { useState, useEffect } from "react";
import TopBoothCard from "./TopBoothCard"; // TopBoothCard 컴포넌트를 import합니다.
import { styled } from "styled-components";
import axios from "axios";

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

  useEffect(() => {
    // API를 호출하여 데이터를 가져옵니다.
    axios
      .get("api/v1/booths/hot")
      .then(response => {
        const data = response.data;

        // like_cnt에 따라 데이터를 정렬합니다.
        const sortedData = data.sort((a, b) => b.like_cnt - a.like_cnt);

        // 상태에 정렬된 데이터를 설정합니다.
        setTopBoothData(sortedData);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <TopBoothWrapper>
      <CardWrapper>
        <TopBoothCard
          // 첫 번째 데이터를 전달합니다.
          // id={topBoothData[0].id}
          // name={topBoothData[0].name}
          // type={topBoothData[0].type}
          // location={topBoothData[0].location}
          // is_liked={topBoothData[0].is_liked}
          // like_cnt={topBoothData[0].like_cnt}
          // thumbnail={topBoothData[0].thumbnail}
          logoWidth="120px"
          bgHeight="190px"
          boothGradeImgurl="/Main/silver.png"
        />
      </CardWrapper>

      {/* 두 번째 TopBoothCard (크기 조절) */}
      <CardWrapper>
        <TopBoothCard
          // 두 번째 데이터를 전달합니다.
          // id={topBoothData[1].id}
          // name={topBoothData[1].name}
          // type={topBoothData[1].type}
          // location={topBoothData[1].location}
          // is_liked={topBoothData[1].is_liked}
          // like_cnt={topBoothData[1].like_cnt}
          // thumbnail={topBoothData[1].thumbnail}
          titleFont="15px"
          pinImg="14px"
          locationFont="10px"
          heartImg="14px"
          wholeMargin="none"
        />
      </CardWrapper>

      {/* 세 번째 TopBoothCard (다른 크기) */}
      <CardWrapper>
        <TopBoothCard
          // 세 번째 데이터를 전달합니다.
          // id={topBoothData[2].id}
          // name={topBoothData[2].name}
          // type={topBoothData[2].type}
          // location={topBoothData[2].location}
          // is_liked={topBoothData[2].is_liked}
          // like_cnt={topBoothData[2].like_cnt}
          // thumbnail={topBoothData[2].thumbnail}
          logoWidth="120px"
          bgHeight="190px"
          boothGradeImgurl="/Main/bronze.png"
        />
      </CardWrapper>
    </TopBoothWrapper>
  );
}

export default TopBooth;
