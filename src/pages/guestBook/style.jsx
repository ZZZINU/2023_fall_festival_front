import styled from "styled-components";

export const GuestBookWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const GuestBookContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

export const GuestBookContentBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GeustBookTextBox = styled.div`
  width: 160px;
  padding: 10px;
  border-radius: 10px;

  background-color: #fffaea;
  color: ${props => props.theme.colors.fontGrey};
  font-size: 14px;
  margin-bottom: 20px;
`;

export const GuestBookInputWrapper = styled.div`
  border: 1px solid black;

  width: 100%;
  height: 60px;

  position: fixed;
  bottom: 0;
  z-index: 10;
`;
