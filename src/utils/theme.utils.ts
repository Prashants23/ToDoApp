import { scale } from "./scale.utils";

export const palette = {
  gray50: "#EEEEEE",
  gray100: "#F0F0F0",
  gray200: "#E5E5E5",
  gray300: "#CCCCCC",
  gray800: "#333333",

  lightBlue400: "#50C2C9",

  white: "#ffffff",
  black: "#000000",
  black100: "#00000099",

  transparent: "transparent",
} as const;

export const theme = {
  colors: {
    ...palette,
    primaryText: palette.gray800,
    white: palette.white,
    stroke: palette.gray200,
    overlay: palette.black100,
  },
  fonts: {
    /** Lato */
    primaryLight: "Lato-Light",
    primaryRegular: "Lato-Regular",
    primaryBold: "Lato-Bold",
  },
  utils: {
    scale,
  },
} as const;

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;
