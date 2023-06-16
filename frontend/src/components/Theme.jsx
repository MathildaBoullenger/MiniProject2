import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", // Replace with your primary color
    },
    secondary: {
      main: "#f50057", // Replace with your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Replace with your desired font family
  },
});

export default theme;