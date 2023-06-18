import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#388E3C ", 
    },
    secondary: {
      main: "#f2f2f2", 
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;