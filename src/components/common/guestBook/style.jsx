import styled from "styled-components";

export const GuestBookBox = styled.div`
  width: 100%;
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
`;
export const GeustBookText = styled.div`
  text-align: center;

  font-size: 16px;
`;

export const GeustBookIcon = styled.div`
  font-size: 50px;
  margin: 5px;
`;
