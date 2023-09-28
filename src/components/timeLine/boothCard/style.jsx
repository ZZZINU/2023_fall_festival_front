import styled from "styled-components";

export const BoothWhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 10vh;
  border-radius: 10px;
  border: 1px solid #fffaea;
  background: #fff;
  margin-bottom: 5px;
  padding: 10px 5px;
border: 1px solid ${props=>(props.isnow=="true"?"#EA6F60":"#FFFAEA")};
`;
export const PerformanceWhiteBox=styled(BoothWhiteBox)`
margin-left: auto;
`
export const BoothCardWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const BoothImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 7vw; */
  width: 45%;
  height: 6vh;
  border-radius: 10px;
  background: ${props=>(props.isnow=="true"?"#FFDFDB":"#fff6db")};
  color: ${props=>(props.isnow=="true"?"#EA6F60":"#FAA73F")};
`;
export const BoothTxt = styled.div`
  width: 100%;
`;
export const BoothTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #282828;
`;
export const BoothPlace = styled.div`
  display: flex;
  justify-content: center;
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
  width: 90%;
  height: 3vh;
  border-radius: 5px;
  background: #faa73f;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 0.8rem;
  margin-top: 10px;
`;
