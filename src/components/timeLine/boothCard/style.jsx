import styled from "styled-components";

export const BoothWhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-radius: 10px;
  background: #fff;
  border: 1px solid ${props => (props.isnow == "true" ? "#EA6F60" : "#FFFAEA")};
  margin-bottom: 5px;
  padding: 14px 5px;
`;
export const PerformanceWhiteBox = styled(BoothWhiteBox)`
  margin-left: auto;
`;
export const BoothCardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const BoothImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 50px;

  border-radius: 10px;
  background: ${props => (props.isnow == "true" ? "#FFDFDB" : "#fff6db")};
  color: ${props => (props.isnow == "true" ? "#EA6F60" : "#FAA73F")};
  span{font-size: 1.8rem};
`;
export const BoothTxt = styled.div`
  width: 100%;
  padding: 0 4px;
`;
export const BoothTitle = styled.div`
  color: #282828;
`;
export const BoothPlace = styled.div`
  color: #8c847f;
  font-size: 0.8rem;
  font-weight: 200;
  margin-top: 5px;
  img {
    margin-right: 5px;
    object-fit: contain;
  }
`;
export const BoothBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 5px;
  background: ${props => (props.isnow == "true" ? "#EA6F60" : "#faa73f")};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
  margin-top: 10px;
`;
