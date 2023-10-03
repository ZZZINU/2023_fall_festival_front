import React from "react";
import styled from "styled-components";

const CardWhole = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 90%;
  flex-direction: column;
  margin-top: 20px;
`;

const CardWrapper1 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  justify-content: center;
  margin-top: 20px;
`;
const CardWrapper2 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 43%;
  height: 100px;
  background-color: #fffaea;
  position: relative;
  margin: 5px;
  opacity: 100%;
  border-radius: 10.57px;
  flex-direction: row;
  display: flex;
  box-shadow: 2px 2px 8px rgba(41, 39, 39, 0.4);

  overflow: hidden;
`;

const CardContent = styled.div`
  color: #8c847f;
  font-size: 4px;
  padding: 5px;
`;

const CardBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;
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
        <CardContainer>
          <CardContent>
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
      </CardWrapper2>
      <CardBtnContainer>
        <CardButton>작성하기</CardButton>
      </CardBtnContainer>
    </CardWhole>
  );
};

export default GuestbookCard;
