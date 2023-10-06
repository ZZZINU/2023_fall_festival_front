// About.jsx

import React from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import Snow from "./snow";

const About = () => {
  return (
    <>
      <S.Container>
        <Snow style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }} />
        <PageTitle mainTitle={"함께한 사람들"} />
        <S.WithWho src="/About/about_with.png" alt="멋사랑 축기단" />
        <S.IntroduceText>
          천고마비의 계절을 풍요롭게 만들어 줄 동국대학교 가을 축제 <br />
          ‘야단법석(野壇法席)’ 을 더욱 특별하게 만들기 위해 동국대학교 <br />
          축제기획단과 멋쟁이사자처럼이 손을 잡고
          <br />
          가을 축제에 대한 정보를 확인할 수 있는 웹사이트를 개발했습니다.
          <br />
          <br />
          가을의 선선한 바람이 불어오는 지금, 동국대학교 학우분들이 야외에
          마련된 <br />
          축제의 장에서 특별한 순간을 만들어 나가는 것에 기쁨을 느끼셨으면
          좋겠습니다.
        </S.IntroduceText>
        <S.line src="/About/about_line.png" alt="line" />
        <S.IntroPd src="/About/about_pd.png" alt="우리기디들" />
        <S.IntroFE src="/About/about_fe.png" alt="우리프엔들" />
        <S.IntroBE src="/About/about_be.png" alt="우리백엔들" />
        <S.IntroEC src="/About/about_ec.png" alt="우리대협들" />
      </S.Container>
    </>
  );
};
export default About;
