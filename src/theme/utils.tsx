import { PureLightTheme } from "../theme";

export interface COLORS {
  alpha: {
    white: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
    trueWhite: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
    black: {
      5: string;
      10: string;
      30: string;
      50: string;
      70: string;
      100: string;
    };
  };
}

export interface CUSTOM_THEME {
  sidebar: {
    background: React.CSSProperties["color"];
    boxShadow: React.CSSProperties["color"];
    width: string;
    textColor: React.CSSProperties["color"];
    dividerBg: React.CSSProperties["color"];
    menuItemColor: React.CSSProperties["color"];
    menuItemColorActive: React.CSSProperties["color"];
    menuItemBg: React.CSSProperties["color"];
    menuItemBgActive: React.CSSProperties["color"];
    menuItemIconColor: React.CSSProperties["color"];
    menuItemIconColorActive: React.CSSProperties["color"];
    menuItemHeadingColor: React.CSSProperties["color"];
  };
  header: {
    height: string;
    background: React.CSSProperties["color"];
    boxShadow: React.CSSProperties["color"];
    textColor: React.CSSProperties["color"];
  };

  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    fontFamily?: string;
    h1: {
      fontWeight: number | string;
      fontSize: string;
    };
    h2: {
      fontWeight: number | string;
      fontSize: string;
    };
    h3: {
      fontWeight: number | string;
      fontSize: string;
      lineHeight: number;
      color: string;
    };
    h4: {
      fontWeight: number | string;
      fontSize: string;
    };
    h5: {
      fontWeight: number | string;
      fontSize: string;
    };
    h6: {
      fontSize: string;
    };
    body1: {
      fontSize: string;
    };
    body2: {
      fontSize: string;
    };
    button: {
      fontWeight: number | string;
    };
    caption: {
      fontSize: string;
      textTransform: React.CSSProperties["textTransform"];
      color: string;
    };
    subtitle1: {
      fontSize: string;
      color: string;
    };
    subtitle2: {
      fontWeight: number | string;
      fontSize: string;
      color: string;
    };
    overline: {
      fontSize: string;
      fontWeight: number | string;
      textTransform: React.CSSProperties["textTransform"];
    };
  };
}

export const getCustomisedTheme = () => {
  // const theme: CUSTOM_THEME = PureLightTheme;
};
