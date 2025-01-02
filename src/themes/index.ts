import { ThemeOptions, createTheme } from "@mui/material/styles";

import { typography } from "./typography/index";

export const theme = createTheme({
  typography: typography,
} as ThemeOptions);
