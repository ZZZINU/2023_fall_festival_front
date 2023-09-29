import styled from "styled-components";

// TimeLineTop.jsx
export const TimeLineTopLabel = styled.div`
  position: relative;
  height: 8vh;
  width: 45%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  font-family: "Dongguk";
  margin-top: 2vh;
`;
export const TimeLineDate = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.isselected === "true" ? "#DD7480" : "#fff")};
`;
export const TimeLineDateIMG = styled.img`
  position: absolute;
`;
export const TimeLineTxt = styled.div`
  z-index: 1;
  font-size: 0.8rem;
`;
export const TimeLineUnderLine = styled.hr`
  border: 0.5px solid
    ${props => (props.isselected === "true" ? "#DD7480" : "#fff")};
  width: 70%;
  margin: 2px auto;
`;

// TimeTableSection.jsx
export const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  width: 90%;
  min-height: 90vw;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`;
export const TimeTableNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 6vh;
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
  color: #ffced1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TimeTableSubTxt2 = styled(TimeTableSubTxt)`
  color: #d9d9d9;
`;
export const LocationIMG = styled.img`
  margin-right: 5px;
`;

export const SubNav = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #fff;
`;
export const TimeTableBigTxt = styled.div`
  color: #553c2e;
  font-family: "Dongguk";
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 5px;
`;
export const TimeTableSmalltxt = styled.div`
  font-size: 0.7rem;
  font-family: "Dongguk";
  text-align: center;
`;
export const BoothDetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 30px;
`;
export const BoothLeft = styled.div`
  width: 50%;
  padding-right: 20px;
`;
export const BoothRight = styled.div`
  width: 50%;
  border-left: 1px solid #fff;
  padding-left: 20px;
`;
export const BoothTimeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props => (props.isnow ? "#EA6F60" : "#fffaea")};
  color: ${props => (props.isnow ? "#FFF" : "#6c3e25")};
  font-size: 0.8rem;
  width: 70%;
  height: 4vh;
  margin: 0 0 5px auto;
`;
export const PerformTimeSection = styled(BoothTimeSection)`
  margin: 0 0 5px 0;
`;

// LineUp.jsx
export const LineUpWrapper = styled.div`
  position: relative;
  width: 90%;
  min-height: 70vh;
  padding: 30px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
`;
export const BgImg1 = styled.img`
  position: absolute;
`;
export const BgImg2 = styled(BgImg1)`
  top: 45%;
`;
export const BgImg3 = styled(BgImg1)`
  top: 55%;
  right: 20px;
`;
export const BgImg4 = styled(BgImg1)`
  top: 38%;
  left: 45%;
`;
export const LineUpdate = styled.div`
  text-align: center;
  margin: 15px 0 50px 0;
  color: #563c23;
  font-family: "Dongguk";
  font-size: 1.2rem;

  z-index: 10;
`;
export const LineUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;
export const MarginLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55vh;
`;
export const LineUpImg = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 190px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;
export const LineUpImg2 = styled(LineUpImg)`
  margin-left: 20px;
  margin-right: 0;
`;
export const LineUpList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  height: 10vh;
  padding: 0 12px;

  font-family: "GmarketSansRegular";
  color: #282828;
  font-size: 1.1rem;

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
