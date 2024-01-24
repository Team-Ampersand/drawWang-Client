import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'AppleSDGothicNeo';
  font-weight: 400;
  font-display: swap;
  src: local('AppleSDGothicNeoM00'),
    url('/fonts/ttf/AppleSDGothicNeoM00.ttf') format('ttf');
}

@font-face {
  font-family: 'AppleSDGothicNeo';
  font-weight: 600;
  font-display: swap;
  src: local('AppleSDGothicNeoB00'),
    url('/fonts/ttf/AppleSDGothicNeoB00.ttf') format('ttf');
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'AppleSDGothicNeo', sans-serif;
}
`;

export default GlobalStyle;
