import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#FCB71C",
  colorSecondary: "#FCB71C",

  appBg: "white",
  appContentBg: "white",
  appBorderColor: "lightgray",
  appBorderRadius: 2,

  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",

  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "white",

  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "FlexupUI",
  brandImage: "/logo.svg"
});
