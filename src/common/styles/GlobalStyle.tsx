import './reset.css';
import PRETEND_FONT from 'src/assets/font/PretendardVariable.woff2';
import { COLORS } from 'src/constants';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard";
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: url(${PRETEND_FONT}) format("woff2-variations");
}

html{
    font-family: "Pretendard";
    background-color: ${COLORS.GRAY_100};
}

h1{
    font-size: 34px;
    font-weight: 700;
}
h2{
    font-size: 18px;
    font-weight: 600;
}
h3{
    font-size: 16px;
    font-weight: 600;
}
body{
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; 
}
`;

export default GlobalStyle;
