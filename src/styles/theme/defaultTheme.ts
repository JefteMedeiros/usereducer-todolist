import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#000"
    }
  },
  typography: {
    fontFamily: [
      "Montserrat"
    ].join(","),
  }
});
