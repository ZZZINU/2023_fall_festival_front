import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";
import { API } from "../../api/axios";

function Promotion() {
  // 전체 | 동아리 | 학과 => 디폴트는 전체
  const [category, setCategory] = useState("전체");
  const [data, setData] = useState([]);
  let requestURL;
  
  // API 연결
  const fetchData = async () => {
    try {
      const response = await API.get(requestURL);
      setData(response.data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // 초기
  useEffect(() => {
    if (category === "동아리") {
      requestURL = "api/v1/promotion?type=동아리";
    } else if (category === "학과") {
      requestURL = "api/v1/promotion?type=학과";
    } else requestURL = "api/v1/promotion";

    fetchData();
  }, [category]);

  return (
    <>
      <S.PromotionWrappper>
        <S.PromotionBox>
          <NoticeHeader />
          <S.CategoryWarp_>
            <S.PromotionCategory
              category={category}
              onClick={() => setCategory("전체")}
              color={category === "전체" ? "#DD7481" : "#dd748199"}
              borderbottom={category === "전체" ? "#DD7481" : "none"}
            >
              전체
            </S.PromotionCategory>
            <S.PromotionCategory
              category={category}
              onClick={() => setCategory("동아리")}
              color={category === "동아리" ? "#DD7481" : "#dd748199"}
              borderbottom={category === "동아리" ? "#DD7481" : "none"}
            >
              동아리
            </S.PromotionCategory>
            <S.PromotionCategory
              category={category}
              onClick={() => setCategory("학과")}
              color={category === "학과" ? "#DD7481" : "#dd748199"}
              borderbottom={category === "학과" ? "#DD7481" : "none"}
            >
              학과
            </S.PromotionCategory>
          </S.CategoryWarp_>
          <S.Line_ />
          {data.map(promotion => (
            <NoticeCard key={promotion.id} data={promotion} />
          ))}
        </S.PromotionBox>
      </S.PromotionWrappper>
    </>
  );
}

export default Promotion;
