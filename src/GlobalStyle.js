import { createGlobalStyle } from "styled-components";
import background from "./monneyy.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  
*, ::before, ::after {
  box-sizing: inherit;
}

  padding: 20px;
  border: 2px;
  background-image: url("${background}");
  display: flex;
  align-items: center;
  justify-content: center;
}
`;