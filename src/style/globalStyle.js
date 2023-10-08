import { createGlobalStyle } from "styled-components";
import DonggukFont from "../assets/fonts/Dongguk.woff";
import NotoSans_MediumFont from "../assets/fonts/NotoSans-Medium.woff";
import NotoSans_RegularFont from "../assets/fonts/NotoSans-Regular.woff";
export const GlobalStyle = createGlobalStyle`

  :root {
    --vh: 100%;
   }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, 
  a, abbr, acronym, address, big, cite, 
  del, em, strong, dfn,  img, ins, kbd, q, s, samp,
  small, strike,  sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {

    @font-face {
    font-family: 'NotoSansRegular';
    src: url(${NotoSans_RegularFont}) format('WOFF');
    font-weight: 100;
  }

    @font-face {
    font-family: 'NotoSansMedium';
    src: url(${NotoSans_MediumFont}) format('WOFF');
    font-weight: 600;
    } 
    @font-face {
    font-family: 'Dongguk';
    src: url(${DonggukFont}) format('WOFF');
    } 
    @font-face {
    font-family: 'GmarketSansRegular';
    font-weight: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    } 

    @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: light;
    } 

    @font-face {
    font-family: 'OKGUNG';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKGUNG.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;

    
  
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }

  body {
    touch-action: manipulation;
    background-image: url("/background.svg");
    background-size: 100%;
    background-repeat: repeat;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 위에가 styled-reset 내용 */

  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    
    scroll-behavior: smooth;

    font-family: sans-serif;

  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
  select{
    border: none;
    &:focus {
      outline: none;
    }
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }

  .scroll {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }


`;
