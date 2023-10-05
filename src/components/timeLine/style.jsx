import styled from "styled-components";

// TimeLineTop.jsx
export const TimeLineTopLabel = styled.div`
  position: relative;
  font-family: Dongguk;
  display: flex;
  gap: 30px;
  margin: 10px 0 40px 0;
`;

export const TimeDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  transform: rotate(45deg);
  color: ${props => (props.isselected === "true" ? "#DD7480" : "#fff")};
  background-color: ${props =>
    props.isselected === "true" ? "#ffffff" : "#DD7480"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
export const TimeDateBoxText = styled.div`
  transform: rotate(-45deg);
  padding-bottom: 3px;
  border-bottom: 1px solid
    ${props => (props.isselected === "true" ? "#DD7480" : "#fff")};
`;

// TimeTableSection.jsx
export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  width: 90%;
  /* height: 950px; */
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`;
export const TimeTableNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 43px;
  border-radius: 10px;
  background: #ea6f60;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);

  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
`;
export const TimeTableMainTxt = styled.div`
  font-family: "Dongguk";
  font-size: 1rem;
`;
export const TimeTableSubTxt = styled.div`
  position: absolute;
  left: 10px;
  color: #ffced1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TimeTableSubTxt2 = styled.div`
  position: absolute;
  right: 20px;
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LocationIMG = styled.img`
  margin-right: 5px;
`;

export const SubNav = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #fff;
`;
export const TimeTableBigTxt = styled.div`
  color: #553c2e;
  font-family: "Dongguk";
  font-size: 1.3rem;
  text-align: center;
  padding-bottom: 5px;
`;
export const TimeTableSmalltxt = styled.div`
  font-size: 0.8rem;
  font-family: "Dongguk";
  text-align: center;
  color: #553c2e;
`;
export const BoothDetailSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 800px;
  padding-top: 30px;
`;
export const BoothLeft = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 14px;
`;
export const BoothRight = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 14px;
`;
export const TimeStroke = styled.div`
  position: absolute;
  top: 56px;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);

  width: 1px;
  height: 90%;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;
export const Stroke1 = styled.div`
  transform: translateX(-50%);
  width: 1px;
  height: 22.7%;
  /* height: 160px; */
  border: 1px solid #fffaea;
  margin-bottom: 28px;
`;
export const Stroke2 = styled(Stroke1)`
  border: 1px solid #fffaea;
  height: 16%;
  /* height: 120px; */
`;
export const Stroke3 = styled(Stroke1)`
  border: 1px solid #fffaea;
  height: 23.5%;
  /* height: 160px; */
`;
export const Stroke4 = styled(Stroke1)`
  border: 1px solid #fffaea;
  height: 17%;
  /* height: 120px; */
`;
export const Stroke5 = styled(Stroke1)`
  border: 1px solid #fffaea;
  height: 20%;
  /* height: 120px; */
  margin: 0;
`;
export const TimeStart = styled.div`
  position: absolute;
  top: -16px;
  left: -8px;

  width: 16px;
  height: 16px;
  border: 2px solid #fffaea;
  background-color: rgba(255, 250, 234, 0.3);
  border-radius: 40px;
`;
export const Time13Mid = styled(TimeStart)`
  top: 20.5%;
`;
export const Time15Mid = styled(TimeStart)`
  top: 37.8%;
`;
export const Time18Mid = styled(TimeStart)`
  top: 61.3%;
`;
export const Time20Mid = styled(TimeStart)`
  top: 79.5%;
`;
export const TimeEnd = styled(TimeStart)`
  top: 100%;
`;
export const TimeNow = styled.img`
  position: absolute;
  top: 30px;
  left: -8px;

  z-index: 10;
`;

export const BoothTimeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props => (props.isnow ? "#EA6F60" : "#fffaea")};
  color: ${props => (props.isnow ? "#FFF" : "#6c3e25")};
  font-size: 0.8rem;
  width: 75%;
  height: 32px;
  margin: 0 0 5px auto;
`;
export const PerformTimeSection = styled(BoothTimeSection)`
  margin: 0 0 5px 0;
`;

// LineUp.jsx
export const LineUpWrapper = styled.div`
  position: relative;
  width: 90%;
  height: ${props => props.isheight};
  /* min-height: 640px; */
  padding: 30px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`;
export const BgImg1 = styled.img`
  position: absolute;
  max-width: 90%;
  object-fit: contain;
`;
export const BgImg2 = styled(BgImg1)`
  top: 280px;
`;
export const BgImg3 = styled(BgImg1)`
  top: 340px;
  right: 5%;
`;
export const BgImg4 = styled(BgImg1)`
  top: 260px;
  left: 40%;
`;
export const LineUpdate = styled.div`
  text-align: center;
  margin: 15px 0 50px 0;
  color: #563c23;
  font-family: "Dongguk";
  font-size: 1.4rem;

  z-index: 10;
`;
export const LineUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 1;
`;
export const LineUpContainer1 = styled(LineUpContainer)`
  margin-top: 90px;
`;
export const MarginLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LineUpImg = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 190px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`;
export const LineUpList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 36%;
  padding: 15px 5px;
  margin: 0 auto;

  font-family: "GmarketSansRegular";
  color: #282828;
  font-size: 1.2rem;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
`;
export const EngName = styled.div`
  font-size: 0.7rem;
  margin-bottom: 3px;
`;
export const ShowTime = styled.div`
  font-family: "GmarketSansLight";
  color: #8c847f;
  font-size: 0.7rem;
  margin-top: 4px;
`;
