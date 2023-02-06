import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface themeProps {
  children: ReactNode;
}

const theme = {
  colors: {
    primary: "#690000",
    secondary: "#FAFF1E",
    third: "#E5CE52",
    text: "#fff",
  },
};

export type ThemeType = typeof theme;

export const Theme = ({ children }: themeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
