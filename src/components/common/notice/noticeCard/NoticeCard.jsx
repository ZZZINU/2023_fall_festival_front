import React from "react";
import * as S from "./style";

function NoticeCard() {
  return (
    <>
      <S.CardWrappper>
        <S.CardBox>
          <S.CardImg />
          <S.TextWrapper>
            {/* 18자 제한 넘어가면 자르기 or 12자 이후 3dots + 공지 뒤는 데이터 */}
            <S.Title> [공지] 오후 3시부터 대운동장 출입 불가</S.Title>
            <S.Body>
              {/* 공백 포함 58자 */}
              가능성을 실현으로. 안녕하세요. 동국대학교 멋쟁이사자처럼 입니다.
              얼마나 더 길어질 수 있는지 확인해봄봄
            </S.Body>
          </S.TextWrapper>
        </S.CardBox>
      </S.CardWrappper>
    </>
  );
}

export default NoticeCard;
