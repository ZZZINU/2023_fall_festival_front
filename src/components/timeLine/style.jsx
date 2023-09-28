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
  padding: 20px 0;
`;
export const BoothLeft = styled.div`
  width: 50%;
  margin-left: 10px;
`;
export const BoothRight = styled.div`
  width: 50%;
  border-left: 1px solid #fff;
  margin-right: 10px;
`;
export const BoothTimeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${props=>(props.isnow?"#EA6F60":"#fffaea")};
  color: ${props=>(props.isnow?"#FFF":"#6c3e25")};
  font-size: 0.8rem;
  width: 70%;
  height: 4vh;
  margin: 0 15px 5px auto;
`;
export const PerformTimeSection = styled(BoothTimeSection)`
margin: 0 0 5px 15px;
`
