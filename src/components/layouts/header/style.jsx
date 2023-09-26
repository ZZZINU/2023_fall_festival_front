import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  height: 60px;
  background-color: ${props => props.theme.colors.primary1};
  position: fixed;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 10px;
  top: 0;

  font-family: Dongguk;
`;
