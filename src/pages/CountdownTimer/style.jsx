import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SegmentTitle = styled.div`
  font-size: 1rem;
  position: relative;
  font-family: "OKGUNG";
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #ffff;
  text-align: center;
  top: -55px;
`;

export const CountWrapper = styled.div`
  display: flex;
  /* border: 3px solid red; */
  padding: 0% 10% 10% 10%;
`;
