import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: url('./fonts/montserrat-regular.woff2') format('woff2'), url('./fonts/montserrat-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

html {
    font-size: 16px;
    font-family: 'Montserrat';
}

body {
    margin: 0;
}

h1 {
    font-family: 'Montserrat';
    font-size: 72px;
    line-height: 88px;
    color: #272343;
}


ul {
    list-style: none;
    padding: 0;
}

a {
    text-decoration: none;
}
img {
    width: 30px;
    height: 30px;
}
@media (min-width:1114px) {
    #root {
        max-width: 1114px;
        margin: auto;
        padding: 0;
        padding-bottom: 40px;
    }
}
`;