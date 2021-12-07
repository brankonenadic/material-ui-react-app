import { Fragment } from "react";
import NavBar from "./components/section/Navbar";
import {ThemeProvider, createTheme} from '@material-ui/core/styles'
import { Button } from "@material-ui/core";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#4a148c',
      },
      secondary: {
        main: '#ab47bc',
      },
    },
  });
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
      <NavBar />
      <Button size="large" color="secondary" variant="contained">Secondary</Button>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
