import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import * as S from "./style";
import { API } from "../../../api/axios";

export default function NoticeDetail() {
  const [data, setData] = useState({});
  const { pathname } = useLocation();

  // API 연결
  const fetchData = async () => {
    try {
      const response = await API.get(`api/v1${pathname}`);
      setData(response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  // 초기
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.NoticeDetailWrap>
      <S.DetailWhiteBox>
        <S.DetailTxt>
          {data.type} {pathname.includes("notification") && "공지"}
        </S.DetailTxt>
        <S.DetailTitle>
          {pathname.includes("notification") && "[공지] "}
          {data.title}
        </S.DetailTitle>
        <S.DetailContent>{data.content}</S.DetailContent>
        <S.ImgWrap>
          {data.images &&
            data.images.map((img, idx) => (
                <img key={idx} src={img} alt="img" />
            ))}
        </S.ImgWrap>
        <S.DeatilDate>{data.date}</S.DeatilDate>
      </S.DetailWhiteBox>
    </S.NoticeDetailWrap>
  );
}
