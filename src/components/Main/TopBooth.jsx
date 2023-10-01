import React from "react";
import TopBoothCard from "./TopBoothCard"; // TopBoothCard 컴포넌트를 import합니다.
import { styled } from "styled-components";

const TopBoothWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const CardWrapper = styled.div`
  margin: 7px; // 카드 간 간격을 조절할 수 있습니다.
`;

function TopBooth() {
  return (
    <TopBoothWrapper>
      <CardWrapper>
        <TopBoothCard
          logoWidth="120px"
          bgHeight="190px"
          boothGradeImgurl="/Main/silver.png"
        />
      </CardWrapper>

      {/* 두 번째 TopBoothCard (크기 조절) */}
      <CardWrapper>
        <TopBoothCard
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
          logoWidth="120px"
          bgHeight="190px"
          boothGradeImgurl="/Main/bronze.png"
        />
      </CardWrapper>
    </TopBoothWrapper>
  );
}

export default TopBooth;
