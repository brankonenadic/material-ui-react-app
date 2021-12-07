import { Fragment } from "react";
import NavBar from "./components/section/Navbar";
import {ThemeProvider, createTheme} from '@material-ui/core/styles'


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
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
