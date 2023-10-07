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
  height: 151px;
  border: 1px solid #fffaea;
  margin-bottom: 28px;
`;
export const Stroke2 = styled(Stroke1)`
  height: 155px;
`;
export const Stroke3 = styled(Stroke1)`
  height: 182px;
`;
export const TimeStart = styled.img`
  position: absolute;
  top: -16px;
  left: -8px;
  width: 16px;
`;
export const Time13Mid = styled(TimeStart)`
  top: 162px;
`;
export const Time15Mid = styled(TimeStart)`
  top: 345px;
`;
export const Time20Mid = styled(TimeStart)`
  top: 553px;
`;