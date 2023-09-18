import { keyframes, css } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colors = {
  font: "#FFFFFF", //폰트컬러
  primary1: "#FBEDD0", //베이지
  primary2: "#F0939E", //핑크
  bg: "#282828",
  gray1: "#F8F8FA",
  gray2: "#EEEFF3",
  gray3: "#DEDFE5",
  gray4: "#AEAFB9",
  gray5: "#606067",
  gray6: "#E4E4E4",
  gray7: "#E2E2E2",
  black: "#282828",
};

export const theme = {
  colors,
};
export default colors;
