import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url("../../public/fonts/ttf/AppleSDGothicNeoM00.ttf") format('truetype');
}

@font-face {
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url("../../public/fonts/ttf/AppleSDGothicNeoB00.ttf") format('truetype');
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
}
div{
  
  border: none;
  outline: none;
}
input{
  border:none;
}
`;

export default GlobalStyle;