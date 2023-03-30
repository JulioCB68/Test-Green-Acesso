import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100%;
    background: linear-gradient(180deg, #374151 0%, #111827 100%);
  }
`;

export const theme = {
	background: "linear-gradient(180deg, #374151 0%, #111827 100%);",
	title: "#FFFFFF",
	text: "rgba(255, 255, 255, 0.6);",
	li: "#111827",
};
