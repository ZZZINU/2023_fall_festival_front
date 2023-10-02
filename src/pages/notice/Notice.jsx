import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";

function Notice() {
  // 전체 | 축제 | 기타 => 디폴트는 전체
  const [category, setCategory] = useState("전체");
  const [data, setData] = useState([]);

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

  // API 연결
  const fetchData = async () => {
    try {
      const response = await API.get("api/v1/notification");
      setData(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // 초기
  useEffect(() => {
    fetchData();
  }, [category]);

  //리턴
  return (
    <>
      <S.NoticeWrappper>
        <S.NoticeBox>
          <NoticeHeader />
          <S.CategoryWarp>
            <S.NoticeCategory
              onClick={() => setCategory("전체")}
              color={category === "전체" ? "#DD7481" : "#dd748199"}
              borderbottom={category === "전체" ? "#DD7481" : "none"}
            >
              전체
            </S.NoticeCategory>
            <S.NoticeCategory
              onClick={() => setCategory("축제")}
              color={category === "축제" ? "#DD7481" : "#dd748199"}
              borderbottom={category === "축제" ? "#DD7481" : "none"}
            >
              축제
            </S.NoticeCategory>
            <S.NoticeCategory
              onClick={() => setCategory("기타")}
              color={category === "기타" ? "#DD7481" : "#dd748199"}
              borderbottom={category === "기타" ? "#DD7481" : "none"}
            >
              기타
            </S.NoticeCategory>
          </S.CategoryWarp>
          <S.Line />
          {data.map(notice => (
            <NoticeCard key={data.id} data={notice} />
          ))}
        </S.NoticeBox>
      </S.NoticeWrappper>
    </>
  );
}

export default Notice;
