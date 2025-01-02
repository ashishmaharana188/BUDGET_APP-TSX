import { GlobalStyles } from "@mui/material";
const globalStyles = (
  <GlobalStyles
    styles={{
      html: {
        fontSize: "62.5%", // This works fine
      },
      body: {
        fontSize: "2.2rem",
        backgroundColor: "#403838",
        color: "oldlace", // Apply body font size here
      },
      button: {
        cursor: "pointer",
        fontSize: "1.3rem",
        fontWeight: "bolder",
        "&:disabled": {
          cursor: "default",
        },
      },
      ".nav-is-active":{
        color: "oldlace",
        fontWeight: "bold",
      }
    }}
  />
);

export default globalStyles;
