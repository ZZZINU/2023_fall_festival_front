import styled from "styled-components";

export const FooterWrapper = styled.div`
  /* background-color: ${props => props.theme.colors.primary1}; */
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100%;
  max-width: 420px;
  padding: 10px;
  flex-shrink: 0;
  justify-content: center;
`;

export const FooterLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Line = styled.div`
  height: 1px; /* 선의 높이 */
  width: 90%; /* 선의 너비 (부모 요소 너비와 동일하게) */
  background-color: #ffffff; /* 선의 색상 (검은색 예시) */
  opacity: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterDguEng = styled.div`
  color: white;
  font-family: NotoSansRegular;
  font-weight: lighter;
  font-size: 12px;
  margin-top: 20px;
  position: relative;
  margin-left: 20px;
`;

export const FooterDguKor = styled.div`
  color: white;
  font-family: NotoSansRegular;
  font-weight: lighter;
  font-size: 12px;
  margin-top: 15px;
  position: relative;
  margin-left: 20px;
`;

export const FooterLogo = styled.div`
  margin-left: 20px;
  margin-top: 15px;
  align-items: center;
  display: flex;
`;

export const FooterInsta = styled.img`
  width: 30%;
`;

export const FooterGithub = styled.img`
  width: 30%;
  position: relative;
  right: 30px;
`;

//fonts
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
  display: flex;
  justify-content: space-between;
  font-family: GmarketSansMedium;
`;

export const GmarketSansMedium = styled.span`
  font-family: GmarketSansMedium;
`;
export const GmarketSansLight = styled.span`
  font-family: GmarketSansLight;
`;

export const Dongguk = styled.div`
  width: 100%;
  font-family: Dongguk;
`;

export const Color = styled.div`
  width: 100%;
  font-family: NotoSansRegular;
  color: ${props => props.theme.colors.fontGrey};
`;
