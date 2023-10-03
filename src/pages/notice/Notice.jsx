import React, { useState, useEffect } from "react";
import * as S from "./style";
import NoticeHeader from "../../components/common/notice/noticeHeader/NoticeHeader";
import NoticeCard from "../../components/common/notice/noticeCard/NoticeCard";
import { API } from "../../api/axios";

function Notice() {
  // 전체 | 축제 | 기타 => 디폴트는 전체
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
    if (category === "축제") {
      requestURL = "api/v1/notification?type=축제";
    } else if (category === "기타") {
      requestURL = "api/v1/notification?type=기타";
    } else requestURL = "api/v1/notification";

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
