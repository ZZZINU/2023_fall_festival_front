import { css } from "styled-components";

const colors = {
  primary1: "#DD7481",
  bg: "#FFFFFF",
  gray1: "#F8F8FA",
  gray2: "#EEEFF3",
  gray3: "#DEDFE5",
  gray4: "#AEAFB9",
  gray5: "#606067",
  gray6: "#E4E4E4",
  gray7: "#E2E2E2",
  black: "#282828"
};

function FONT({ weight, size, lineHeight }) {
  return `
    font-family: "Pretendard";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    `;
}

const fonts = {};

export const theme = {
  colors,
  fonts
};
export default colors;
