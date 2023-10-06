import React from "react";
import styled from "styled-components";
import GuestBookCard from "../common/guestBook/GuestBookCard";

const CardWhole = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  /* margin-top: 20px; */
`;

const CardWrapper1 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 20px;
  transform: scale(0.7, 0.7);
`;
const CardWrapper2 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  transform: scale(0.7, 0.7);
  top: -50px;
`;

const CardContent = styled.div`
  /* color: #8c847f;
  font-size: 8px; */
  /* padding-right: 5px; */
  /* margin: 9px; */
`;

const CardBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -70px;
`;

const CardButton = styled.div`
  position: relative;
  width: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dd7481;
  border-radius: 16px;
  font-size: 12px;
  height: 30px;
  width: 70px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1); /* 위아래 양옆에 똑같은 그림자 추가 */
`;

const GuestbookCard = () => {
  return (
    <CardWhole>
      <CardWrapper1>
        <div style={{ marginRight: "15px" }}>
          <GuestBookCard
            icon="🍁"
            content="2023 동국대학교 가을 축제 파이팅!"
            marginBottom="10px"
          />
        </div>

        <div>
          <GuestBookCard
            icon="🍁"
            content="멋사와 함께 즐기는 동국대 가을 축제"
            marginBottom="10px"
          />
        </div>
      </CardWrapper1>
      <CardWrapper2>
        <div style={{ marginRight: "15px" }}>
          <GuestBookCard
            icon="🍁"
            content="축제의 감정, 이곳에 기록해보는건 어떤가요?"
            marginBottom="10px"
          />
        </div>
        <div>
          <GuestBookCard
            icon="🍁"
            content="축제 사이트에 여러분의 기억을 남겨주세요!!!"
            marginBottom="10px"
          />
        </div>
      </CardWrapper2>

      <CardBtnContainer>
        <CardButton>작성하기</CardButton>
      </CardBtnContainer>
    </CardWhole>
  );
};

export default GuestbookCard;
