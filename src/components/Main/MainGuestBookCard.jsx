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
  padding-right: 5px;
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
        <CardContent>
          <GuestBookCard
            icon="🍁"
            content="2023 동국대학교 가을 축제 파이팅!"
            marginBottom="10px"
          />
        </CardContent>
        <CardContent>
          <GuestBookCard
            icon="😆"
            content="2023 동국대학교 가을 축제 파이팅!"
            marginBottom="10px"
          />
        </CardContent>
      </CardWrapper1>
      <CardWrapper2>
        <CardContent>
          <GuestBookCard
            icon="😊"
            content="2023 동국대학교 가을 축제 파이팅!"
            marginBottom="10px"
          />
        </CardContent>
        <CardContent>
          <GuestBookCard
            icon="🦁"
            content="2023 동국대학교 가을 축제 파이팅!"
            marginBottom="10px"
          />
        </CardContent>
      </CardWrapper2>
      {/* <CardWrapper1>
        <CardContainer>
          <CardContent>
            🥺 이번 축제도 역시 너무 재밌네요!! 멋사도 열심히 노력해서 이렇게
            좋은 축제 사이트 만들어주신 거 정말 감사드려요!! 다들 멋사 축제
            사이트와 함께 재미난 축제 즐기시면 좋겠네요 :)
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardContent>
            {" "}
            이번 축제도 역시 너무 재밌네요!! 멋사도 열심히 노력해서 이렇게 좋은
            축제 사이트 만들어주신 거 정말 감사드려요!! 이번 축제도 역시 너무
            재밌네요!! 멋사도 열심히 노력해서 이렇게 좋은 축제 사이트 만들어줘서
            짱!
          </CardContent>
        </CardContainer>
      </CardWrapper1>
      <CardWrapper2>
        <CardContainer>
          <CardContent>
            {" "}
            이번 축제도 역시 너무 재밌네요!! 멋사도 열심히 노력해서 이렇게 좋은
            축제 사이트 만들어주신 거 정말 감사드려요!! 이번 축제도 역시 너무
            재밌네요!! 멋사도 열심히 노력해서 이렇게 좋은 축제 사이트 만들어줘서
            짱!
          </CardContent>
        </CardContainer>
        <CardContainer>
          <CardContent>
            {" "}
            이번 축제도 역시 너무 재밌네요!! 멋사도 열심히 노력해서 이렇게 좋은
            축제 사이트 만들어주신 거 정말 감사드려요!! 이번 축제도 역시 너무
            재밌네요!! 멋사도 열심히 노력해서 이렇게 좋은 축제 사이트 만들어줘서
            짱!
          </CardContent>
        </CardContainer>
      </CardWrapper2> */}
      <CardBtnContainer>
        <CardButton>작성하기</CardButton>
      </CardBtnContainer>
    </CardWhole>
  );
};

export default GuestbookCard;
