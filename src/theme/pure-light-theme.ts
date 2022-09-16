const themeColors = {
  primary: "#5569ff",
  secondary: "#6E759F",
  success: "#3DAB54",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#223354",
  white: "#ffffff",
  primaryAlt: "#000C57",
};

const colors = {
  alpha: {
    white: {
      5: "#ffffff",
      10: "#ffffff",
      30: "#ffffff",
      50: "#ffffff",
      70: "#ffffff",
      100: themeColors.white,
    },
    trueWhite: {
      5: "#ffffff",
      10: "#ffffff",
      30: "#ffffff",
      50: "#ffffff",
      70: "#ffffff",
      100: themeColors.white,
    },
    black: {
      5: "#263757",
      10: "#384765",
      30: "#647087",
      50: "#9199aa",
      70: "#bdc2cc",
      100: themeColors.black,
    },
  },
};

export const PureLightTheme = {
  general: {
    bodyBg: "#FFFFFF",
  },
  sidebar: {
    background: "#FFFFFF",
    textColor: themeColors.white,
    dividerBg: "#f2f5f9",
    menuItemColor: "#242E6F",
    menuItemColorActive: themeColors.white,
    menuItemBg: themeColors.white,
    menuItemBgActive: themeColors.primary,
    menuItemIconColor: themeColors.secondary,
    menuItemIconColorActive: themeColors.primary,
    menuItemHeadingColor: themeColors.secondary,
    boxShadow:
      "2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)",
  },
  header: {
    background: "#F6F8FA",
    boxShadow: "none",
    textColor: "black",
    height: "88.5px",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  typography: {
    // fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: 35,
    },
    h2: {
      fontWeight: 700,
      fontSize: 30,
    },
    h3: {
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.4,
      color: colors.alpha.black[100],
    },
    h4: {
      fontWeight: 700,
      fontSize: 16,
    },
    h5: {
      fontWeight: 700,
      fontSize: 14,
    },
    h6: {
      fontSize: 15,
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 13,
      textTransform: "uppercase",
      color: colors.alpha.black[50],
    },
    subtitle1: {
      fontSize: 14,
      color: colors.alpha.black[70],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 15,
      color: colors.alpha.black[70],
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
};
