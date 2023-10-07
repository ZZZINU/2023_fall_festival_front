import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  margin: 10px 0 5px auto;

  @media (max-width: 375px) {
    font-size: 0.7rem;
  }

  /* animation: ${fadeIn} 0.3s ease-in-out; */
`;
export const PerformTimeSection = styled(BoothTimeSection)`
  margin: 10px 0 5px 0;
`;
