import { styled, css } from "styled-components";

export const GuestBookBox = styled.div`
  width: ${props => props.width || "100%"};
  padding: 15px 15px 30px 15px;
  height: ${props => props.Height};
  border-radius: 10px;
  background-color: #fffaea;
  color: ${props => props.theme.colors.fontBrown};
  margin-bottom: ${props => props.marginBottom};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;

  ${props =>
    props.isMobile &&
    css`
      @media (max-width: 320px) {
        width: 150px;
      }
    `}
`;

export const GeustBookText = styled.div`
  text-align: center;
  font-size: 1rem;
  ${props =>
    props.isMobile &&
    css`
      @media (max-width: 320px) {
        font-size: 12px;
      }
    `}
`;

export const GeustBookIcon = styled.div`
  font-size: 50px;
  margin: 5px;
`;
