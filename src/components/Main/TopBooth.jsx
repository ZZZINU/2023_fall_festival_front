import React, { useState, useEffect } from "react";
import TopBoothCard from "./TopBoothCard";
import { styled, css } from "styled-components";
import { API } from "../../api/axios";

const TopBoothWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 375px) {
    transform: scale(0.8, 0.8);
    width: 100%;
    justify-content: center;
  }
`;
const CardWrapper = styled.div`
  margin: 7px;
  @media (max-width: 375px) {
    margin: 5px;
  }
`;

function TopBooth() {
  const [topBoothData, setTopBoothData] = useState([]);

  async function fetchData() {
    try {
      const response = await API.get("api/v1/booths/hot");
      // console.log("API 요청 성공:", response.data);
      const data = response.data;

      const sortedData = data.sort((a, b) => b.like_cnt - a.like_cnt);

      setTopBoothData(sortedData);
    } catch (error) {
      // console.error("API 요청 실패:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          logoWidth="110px"
          logoHeight="110px"
          bgHeight="180px"
          boothGradeImgurl="/Main/silver.png"
          wholeMargin="30px"
        />
      </CardWrapper>

      <CardWrapper>
        <TopBoothCard
          boothId={firstBooth.id}
          boothImgUrl={firstBooth.thumbnail}
          boothType={firstBooth.type}
          boothTitle={firstBooth.name}
          boothDescript={firstBooth.description}
          locationContent={firstBooth.location}
          heartNum={firstBooth.like_cnt}
          titleFont="16px"
          pinImg="14px"
          locationFont="10px"
          heartImg="14px"
          wholeMargin="none"
          marginTop="10px"
        />
      </CardWrapper>

      <CardWrapper>
        <TopBoothCard
          boothId={thirdBooth.id}
          boothImgUrl={thirdBooth.thumbnail}
          boothType={thirdBooth.type}
          boothTitle={thirdBooth.name}
          boothDescript={thirdBooth.description}
          locationContent={thirdBooth.location}
          heartNum={thirdBooth.like_cnt}
          logoWidth="110px"
          logoHeight="110px"
          bgHeight="180px"
          boothGradeImgurl="/Main/bronze.png"
          wholeMargin="30px"
        />
      </CardWrapper>
    </TopBoothWrapper>
  );
}

export default TopBooth;
