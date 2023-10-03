import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";
import { API } from "../../api/axios";

function Promotion() {
  // 전체 | 동아리 | 학과 => 디폴트는 전체
  const [category, setCategory] = useState("전체");
  const [data, setData] = useState([]);
  
/*
  useEffect(() => {
    const contentData = [
      {
        id: 1,
        title: "첫번째 공지 12자인가 18자인가 보자보자",
        type: "축제",
        content:
          "1번이다 1번1번이다 1번1번이다 1번1번이다 1번1번이다 1번1번이다 1번1번이다 1번1번이다 1번이다아아아d아ㅏ앙",
        created_at: "2023-09-29T12:38:12Z",
        images: ["/notice/text1.png"],
        thumbnail: "img.jpg"
      },
      {
        id: 2,
        title: "2번입니다람쥐쥐ㅜ쥐쥐",
        type: "기타",
        content:
          "두번째 게시물두번째 게시물두번째 게시물두번째 게시물두번째 게시물두번째 게시물두번째 게시물두번째 게시물두번째 게시물두번째 게시물",
        created_at: "2023-09-29T12:38:36Z",
        images: ["/notice/text2.png"],
        thumbnail: "img.jpg"
      },
      {
        id: 3,
        title: "세번째라니",
        type: "기타",
        content: "세번째 공지 게시물",
        created_at: "2023-09-29T12:38:57Z",
        images: ["/notice/text3.png"],
        thumbnail: null
      },
      {
        id: 4,
        title: "네번째라니",
        type: "기타",
        content: "네번째 공지 게시물",
        created_at: "2023-09-29T12:38:57Z",
        images: [],
        thumbnail: null
      },
      {
        id: 5,
        title: "오번째라니",
        type: "기타",
        content: "오번째 공지 게시물",
        created_at: "2023-09-29T12:38:57Z",
        images: [],
        thumbnail: null
      }
    ];
    setData(contentData);
  }, []);
*/
  // API 연결
  const fetchData = async () => {
    try {
      const response = await API.get("api/v1/promotion");
      setData(response.data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // 초기
  useEffect(() => {
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
            <NoticeCard key={data.id} data={promotion} />
          ))}
        </S.PromotionBox>
      </S.PromotionWrappper>
    </>
  );
}

export default Promotion;
