import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

//component import
import PageTitle from "../../components/common/pageTitle/PageTitle";
import MainBanner from "../../components/Main/MainBanner";
import TopBooth from "../../components/Main/TopBooth";
import GuestbookCard from "../../components/Main/MainGuestBookCard";
import Snow from "../about/Snow";

function Main() {
  return (
    <>
      <S.MainContainer>
        <Snow style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }} />
        <S.FloatingImagesContainer>
          <S.FloatingImage
            src="/Main/main_ya.png"
            alt="야"
            style={{ animationDelay: "0s" }}
          />
          <S.FloatingImage
            src="/Main/main_dan.png"
            alt="단"
            style={{ animationDelay: "1s" }}
          />
          <S.FloatingImage
            src="/Main/main_beop.png"
            alt="법"
            style={{ animationDelay: "2s" }}
          />
          <S.FloatingImage
            src="/Main/main_seok.png"
            alt="석"
            style={{ animationDelay: "2.5s" }}
          />
        </S.FloatingImagesContainer>
        <S.MainBanner>
          <PageTitle mainTitle={"홍보 배너"} />
          <MainBanner />
        </S.MainBanner>
        <S.MainBoothGrade>
          <PageTitle mainTitle={"실시간 부스 순위"} />
          <S.Booth>
            <TopBooth />
          </S.Booth>
          <S.Boothceleb>
            <PageTitle
              mainTitle={"라인업"}
              subTitle={"20시 대운동장에서 연예인 공연이 진행됩니다."}
            />
            <S.CelebEleven src="/Main/main_celeb_11.png" />
            <S.CelecbTwelve src="/Main/main_celeb_12.png" />
          </S.Boothceleb>

          <S.MainGuestBook>
            <PageTitle
              mainTitle={"방명록"}
              subTitle={"이번 축제의 기록을 남겨주세요."}
            />
            <Link to="/guestbook">
              <S.MainGuestWrapper>
                <S.MainGusetBookBg src="/Main/mainGbBg.png" />
                <GuestbookCard />
              </S.MainGuestWrapper>
            </Link>
          </S.MainGuestBook>
        </S.MainBoothGrade>
      </S.MainContainer>
    </>
  );
}

export default Main;
