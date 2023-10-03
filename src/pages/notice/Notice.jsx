import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";
import { API } from "../../api/axios";

function Notice() {
  // 전체 | 축제 | 기타 => 디폴트는 전체
  const [category, setCategory] = useState("전체");
  const [data, setData] = useState([]);
  /*
  useEffect(() => {
    const contentData = [
      {
        id: 1,
        title: "제목",
        type: "축제",
        content:
          "동국대학교 학우 여러분 안녕하세요!이번 가을 축제의 이름인 야단법석(野壇法席)은‘야외에 자리를 마련하여 부처님의 말씀을 듣는 자리’라는의미를 가지고 있습니다. 낭만과 설렘이 가득한 가을,수많은 인연들이 모여 만나게 된 이곳에서야단법석을 꾸며보고자 합니다!2023. 10. 11. ~ 10. 12.‘야단법석(野壇法席)’ 많은 관심 부탁드립니다! 이번 가을 축제에 대한 자세한 일정 안내는 추후에 진행될 예정입니다.",
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
      const response = await API.get("api/v1/notification");
      setData(response.data.results);
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
          {data &&
            data.map(notice => <NoticeCard key={data.id} data={notice} />)}
        </S.NoticeBox>
      </S.NoticeWrappper>
    </>
  );
}

export default Notice;
