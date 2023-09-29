import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";
import { Link } from "react-router-dom";

function Notice() {
  // 전체 | 축제 | 기타 => 디폴트는 전체
  const [dayOrNight, setDayOrNight] = useState("전체");
  // 데이터
  const [data, setData] = useState([]);

  useEffect(() => {
    const contentData = [
      {
        id: 1,
        title: "첫번째 공지",
        type: "축제",
        content: "1번이다 1번",
        created_at: "2023-09-29T12:38:12Z",
        images: [],
        thumbnail: "img.jpg"
      },
      {
        id: 2,
        title: "2번입니다",
        type: "기타",
        content: "두번째 게시물",
        created_at: "2023-09-29T12:38:36Z",
        images: [],
        thumbnail: "img.jpg"
      },
      {
        id: 3,
        title: "세번째라니",
        type: "기타",
        content: "세번째 공지 게시물",
        created_at: "2023-09-29T12:38:57Z",
        images: [],
        thumbnail: null
      }
    ];
    setData(contentData);
  }, []);

  // API 연결
  const fetchData = async () => {};

  //리턴
  return (
    <>
      <S.NoticeWrappper>
        <S.NoticeBox>
          <NoticeHeader />
          <S.CategoryWarp>
            <S.NoticeCategory
              dayornight={dayOrNight}
              onClick={() => setDayOrNight("전체")}
              color={dayOrNight === "전체" ? "##DD7481" : "#ffb2b2"}
              borderbottom={dayOrNight === "전체" ? "##DD7481" : "none"}
            >
              전체
            </S.NoticeCategory>
            <S.NoticeCategory
              dayornight={dayOrNight}
              onClick={() => setDayOrNight("축제")}
              color={dayOrNight === "축제" ? "##DD7481" : "#ffb2b2"}
              borderbottom={dayOrNight === "축제" ? "##DD7481" : "none"}
            >
              축제
            </S.NoticeCategory>
            <S.NoticeCategory
              dayornight={dayOrNight}
              onClick={() => setDayOrNight("기타")}
              color={dayOrNight === "기타" ? "##DD7481" : "#ffb2b2"}
              borderbottom={dayOrNight === "기타" ? "##DD7481" : "none"}
            >
              기타
            </S.NoticeCategory>
          </S.CategoryWarp>
          <S.Line />
          <NoticeCard data={data} />
          <NoticeCard data={data} />
          <NoticeCard data={data} />
        </S.NoticeBox>
      </S.NoticeWrappper>
    </>
  );
}

export default Notice;
