import { UnistylesRegistry } from "react-native-unistyles";

import { breakpoints, theme } from "./theme.utils";

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  theme: typeof theme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints).addThemes({
  theme,
});
