import "@fontsource/poppins";
export const fontFamily = "'Poppins', sans-serif";

//colors
export const colourPalette = {
  primary: "#2C2525",
  secondary: "#403838",
  lighter: "#5B5353",
  lighter1: "#72696A",
  lighter2: "#948A8B",
  lighter3: "#B5A9AA",
  textColor: "oldlace",
  plain: "White",
};

//sizes
export const fontSizes = {
  small: "1.3rem",
  smallM: "1.6rem",
  mediumS: "1.9rem",
  medium: "2.3rem",
  mediumL: "2.6rem",
  largeS: "2.9rem",
  large: "3.3rem",
  largeL: "3.6rem",
  extraLargeS: "3.9rem",
  extraLarge: "4.3rem",
  extraLargeL: "4.6rem",
};

export const paddingSizes = {
  small: "0.6rem",
  smallM: "1.0rem",
  medium: "1.4rem",
  mediumM: "1.8rem",
  mediumL: "2.2rem",
  large: "2.6rem",
  largeM: "3.0rem",
  largeL: "3.4rem",
  extraLarge: "3.8rem",
  extraLargeM: "4.2rem",
  extraLargeL: "4.6rem"
};
export const marginSizes = {
  small: "0.6rem",
  medium: "1.6rem",
  large: "3.2rem",
  extraLarge: "4.8rem",
};

///sizes end

//BUTTONS
const defaultButtonStyles = {
  //deafult button set in mainGlobalCss.tsx
  buttonMain1: {
    cursor: "pointer",
    fontSize: fontSizes.small,
    fontWeight: "bolder",
    "&:disabled": {
      cursor: "default",
    },
  },
  buttonMain2: {
    border: "none",
    borderBottom: `0.6rem solid ${colourPalette.lighter3}`,
    background: colourPalette.lighter,
    color: colourPalette.textColor,
    marginBottom: paddingSizes.extraLarge,
    padding: paddingSizes.small,

    "&:disabled": {
      background: colourPalette.lighter2, // Apply disabled background color
      color: colourPalette.textColor, // Apply disabled text color
      border: `none`,
    },
  },
};
export const buttonCss: Record<string, any> = {
  buttonNormal: {
    ...defaultButtonStyles.buttonMain1,
    fontSize: fontSizes.mediumS,
    color: "white",
  },
  buttonAction: {
    ...defaultButtonStyles.buttonMain1,
    ...defaultButtonStyles.buttonMain2,
    fontSize: fontSizes.medium,
    fontWeight: "bold",
    width: "50%",
  },
  buttonAddOption: {
    ...defaultButtonStyles.buttonMain1,
    ...defaultButtonStyles.buttonMain2,
    fontSize: fontSizes.mediumS,
    fontWeight: "bold",
    margin: "0",
    height: fontSizes.extraLarge,
  },
};
//button segment ends here
