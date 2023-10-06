import styled from "styled-components";

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
  padding: 5px 0;
`;
export const Stroke1 = styled.div`
  transform: translateX(-50%);
  width: 1px;
  height: 136px;
  border: 1px solid #fffaea;
  margin-bottom: 28px;
`;
export const Stroke2 = styled(Stroke1)`
  height: 98px;
`;
export const Stroke3 = styled(Stroke1)`
  height: 140px;
`;
export const Stroke4 = styled(Stroke1)`
  height: 103px;
`;
export const Stroke5 = styled(Stroke1)`
  height: 105px;
  margin-bottom:16px;
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
  top: 98%;
`;
export const TimeNow = styled.img`
  position: absolute;
  top: 30px;
  left: -8px;

  z-index: 10;
`;