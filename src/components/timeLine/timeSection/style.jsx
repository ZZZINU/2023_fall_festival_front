import styled from "styled-components";

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
  margin: 10px 0 5px auto;
`;
export const PerformTimeSection = styled(BoothTimeSection)`
  margin: 10px 0 5px 0;
`;
