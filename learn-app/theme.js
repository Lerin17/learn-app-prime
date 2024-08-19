import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { red } from '@mui/material/colors';
// import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: "#d6d3d1",
      },
      secondary:{
        main: "#a3a3a3"
      }
    },
  });

export default theme