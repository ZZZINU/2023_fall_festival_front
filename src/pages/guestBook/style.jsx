import styled from "styled-components";
import GuestBook from "./GuestBook";

export const GuestBookWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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
  position: fixed;
  bottom: 0;
  display: flex;

  border-radius: 50px;

  width: calc(100% - 40px);
  max-width: 380px;

  padding: 15px 20px;

  margin-top: 10px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const GuestBookInputIconWrapper = styled.div`
  display: flex;
`;

export const GuestBookInput = styled.input`
  font-size: 14px;
  height: 20px;

  flex-grow: 1;

  padding: 0 10px;

  color: ${props => props.theme.colors.fontBrown};

  &::placeholder {
    color: ${props => props.theme.colors.primary1};
  }
`;

export const GuestBookInputIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GuestBookInputIconList = styled.div`
  position: fixed;
  bottom: 70px;
  display: flex;
  flex-direction: column;
`;

export const GuestBookInputIconBox = styled.div`
  width: 16px;
  height: 16px;
  font-size: 16px;
`;

export const GuestBookImg = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
