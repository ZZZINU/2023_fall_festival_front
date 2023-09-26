import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  max-width: 420px;
  padding: 10px;
`;

export const NotoSans = styled.div`
  width: 100%;
  font-family: NotoSansRegular;
  display: flex;
  justify-content: space-between;
`;

export const NotoSansMedium = styled.span`
  font-family: NotoSansMedium;
`;
export const NotoSansRegular = styled.span`
  font-family: NotoSansRegular;
`;
export const GmarketSans = styled.div`
  width: 100%;
  font-family: GmarketSans;
`;

export const Dongguk = styled.div`
  width: 100%;
  font-family: Dongguk;
`;
