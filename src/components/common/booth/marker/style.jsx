import styled from "styled-components";

export const MapMarkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  cursor: pointer;
`;

export const MapMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  padding: 10px;
  background-color: ${props => props.backgroundcolor};
  border-radius: 7px;
  color: ${props => props.color};
  text-align: center;
  font-family: dongguk;
  font-size: ${props => props.fontsize};
  font-weight: 400;
  font-weight: 400;
  line-height: normal;
`;

export const MapMarkPin = styled.div`
  top: ${props => props.top};
  width: 15px;
  height: 15px;
  background-color: ${props => props.backgroundcolor};
  border-radius: 3px;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
  position: absolute;
  transform: rotate(135deg);
`;
