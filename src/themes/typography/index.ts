import { TypographyOptions } from "@mui/material/styles/createTypography";
import { lighten } from "@mui/material";
import {
  fontFamily,
  fontSizes,
  colourPalette,
  paddingSizes,
  marginSizes,
} from "./base";
import React from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    header: true;
    primaryContainer: true;
    widget: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  header: {
    main: React.CSSProperties;
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
  };
  primaryContainer: React.CSSProperties;
  widget: {
    widgetMain: React.CSSProperties;
    widgetHeader: React.CSSProperties;
    widgetTitle: React.CSSProperties;
    widgetMessage: React.CSSProperties;
    widgetForm: React.CSSProperties;
    widgetOption: React.CSSProperties;
    widgetError: React.CSSProperties;
    widgetInputForm: React.CSSProperties;
    widgetInput: React.CSSProperties;
  };
}

export const typography: ExtendedTypographyOptions = {
  fontFamily,

  // Component-specific CSS

  // 1. Header
  header: {
    main: {
      display: "block",
      background: colourPalette.primary,
      marginBottom: marginSizes.extraLarge,
      padding: `${paddingSizes.medium} 0`,
    },
    title: {
      display: "block",
      fontSize: fontSizes.extraLarge,
      fontWeight: "bold",
      margin: 0,
    },
    subtitle: {
      display: "block",
      fontSize: fontSizes.large,
      fontWeight: "normal",
      margin: 0,
    },
  },
  //

  // 2. Containers
  primaryContainer: {
    maxWidth: "60rem",
    margin: `0 auto`,
    padding: `0 ${paddingSizes.medium}`,
  },
  //

  // 3. Widgets
  widget: {
    widgetMain: {
      background: colourPalette.lighter1,
      marginBottom: marginSizes.medium
    },
    widgetHeader: {
      background: colourPalette.primary,
      color: colourPalette.textColor,
      display: "flex",
      justifyContent: "space-between",
      padding: paddingSizes.medium,
    },
    widgetTitle: {
      margin: "0",
      alignContent: "center",
    },
    widgetMessage: {
      borderBottom: `0.2rem solid ${lighten(colourPalette.lighter1, 0.5)}`,
      padding: paddingSizes.medium,
      color: colourPalette.textColor,
    },
    widgetForm: {
      background: colourPalette.lighter,
      paddingBottom: paddingSizes.medium,
      paddingTop: paddingSizes.small,
    },
    widgetOption: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `0.1rem solid ${lighten(colourPalette.lighter1, 0.5)}`,
    padding: paddingSizes.small
    },
    widgetError: {
      fontStyle: "italic",
      fontSize: fontSizes.medium,
      padding: paddingSizes.medium,
      color: colourPalette.plain,
    },
    widgetInputForm: {
      display: "flex",
      padding: paddingSizes.smallM,
    },
    widgetInput: {
      fontSize: fontSizes.mediumS,
      border: "none",
      background: colourPalette.lighter2,
      color: colourPalette.textColor,
      borderBottom: `0.3rem solid ${lighten(colourPalette.lighter3, 0.5)}`,
      flexGrow: "1",
      marginRight: marginSizes.small,
      padding: paddingSizes.small

    }
  },
};
//
