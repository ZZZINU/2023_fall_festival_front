import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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

  const TextWithLinks = ({ text }) => {
    const regex = /(https?:\/\/[^\s]+)/gi;
      // /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#%?=~_|!:,.;]*[-A-Z0-9+&@#%?/=~_|])/gi;

    if (!text) {
      return null;
    }

    const textWithLinks = text.split(regex).map((part, index) => {
      if (regex.test(part)) {
        // URL인 경우
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#001194" }}
          >
          📎 {part} &nbsp;
          </a>
        );
      } else {
        // 일반 텍스트인 경우
        return <span key={index}>{part}</span>;
      }
    });

    return <S.DetailContent>{textWithLinks}</S.DetailContent>;
  };

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

        <TextWithLinks text={data.content} />
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
