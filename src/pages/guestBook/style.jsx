import styled from "styled-components";
import GuestBook from "./GuestBook";

export const GuestBookWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const GuestBookContentWrapper = styled.div`
  flex-grow: 1;
  overflow: scroll;
`;

export const GuestBookContent = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
`;

export const GuestBookContentBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GuestBookBox = styled.div`
  width: 100%;
  padding: 15px 15px 30px 15px;

  border-radius: 10px;
  background-color: #fffaea;
  color: ${props => props.theme.colors.fontBrown};
  margin-bottom: 20px;
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

export const GuestBookInputWrapper = styled.div`
  display: flex;

  border-radius: 50px;

  width: calc(100% - 40px);
  max-width: 380px;

  padding: 15px 20px;
  margin-bottom: 30px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const GuestBookInput = styled.input`
  font-size: 14px;
  height: 20px;

  flex-grow: 1;

  padding-right: 10px;

  color: ${props => props.theme.colors.fontBrown};

  &::placeholder {
    color: ${props => props.theme.colors.primary1};
  }
`;

export const GuestBookImg = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
