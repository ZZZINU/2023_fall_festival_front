import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";

function Promotion() {
  // 전체 | 동아리 | 학과 => 디폴트는 전체
  const [dayOrNight, setDayOrNight] = useState("전체");
  return (
    <>
      <S.NoticeWrappper>
        <S.NoticeBox>
          <NoticeHeader />
          <S.CategoryWarp>
            <S.PromotionCategory
              dayornight={dayOrNight}
              onClick={() => setDayOrNight("전체")}
              color={dayOrNight === "전체" ? "##DD7481" : "#ffb2b2"}
              borderbottom={dayOrNight === "전체" ? "##DD7481" : "none"}
            >
              전체
            </S.PromotionCategory>
            <S.PromotionCategory
              dayornight={dayOrNight}
              onClick={() => setDayOrNight("동아리")}
              color={dayOrNight === "동아리" ? "##DD7481" : "#ffb2b2"}
              borderbottom={dayOrNight === "동아리" ? "##DD7481" : "none"}
            >
              동아리
            </S.PromotionCategory>
            <S.PromotionCategory
              dayornight={dayOrNight}
              onClick={() => setDayOrNight("학과")}
              color={dayOrNight === "학과" ? "##DD7481" : "#ffb2b2"}
              borderbottom={dayOrNight === "학과" ? "##DD7481" : "none"}
            >
              학과
            </S.PromotionCategory>
          </S.CategoryWarp>
          <S.Line />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </S.NoticeBox>
      </S.NoticeWrappper>
    </>
  );
}

export default Promotion;
