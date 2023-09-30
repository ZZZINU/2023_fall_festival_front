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
  height: 100%;
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

  width: 100%;
  max-width: 420px;

  padding: 15px 20px;

  margin-top: 10px;
  /* margin-bottom: 20px; */
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  &:focus-within {
    flex-direction: column;
  }
`;

export const GuestBookInput = styled.input`
  font-size: 16px;
  height: 30px;

  flex-grow: 1;

  color: ${props => props.theme.colors.fontBrown};

  &::placeholder {
    color: ${props => props.theme.colors.primary1};
  }
  &:focus {
    background-color: #ececec;
  }
`;

export const GuestBookInputIconWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const GuestBookInputIconSelector = styled.div`
  display: flex;
`;

export const GuestBookInputIconList = styled.div`
  background-color: white;

  display: none;
`;

export const GuestBookInputIconBox = styled.div`
  width: 30px;
  height: 30px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.$isActive ? "#e5e5e5" : "")};
  margin-right: 10px;

  border-radius: 5px;

  cursor: pointer;
`;

export const GuestBookImg = styled.div`
  width: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
