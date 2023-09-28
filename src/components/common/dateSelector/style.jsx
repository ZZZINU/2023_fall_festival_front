import styled from "styled-components";

export const DateBoxWrap = styled.div`
  font-family: Dongguk;
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  transform: rotate(45deg);
  color: ${props => props.textcolor};
  background-color: ${props => props.backgroundcolor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const DateBoxText = styled.div`
  transform: rotate(-45deg);
  padding-bottom: 3px;
  border-bottom: 1px solid ${props => props.backgroundcolor};
`;
