import { lazy, Suspense } from 'react'
// import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
// import { red, orange } from "@mui/material/colors";
import Loading from './pages/Loadig.jsx';
const HomePage = lazy(() => import('./pages/HomePage.jsx'))


function App() {
    // const theme = createTheme({
    //   spacing: 10,
    //   palette: {
    //     mode: "dark",
    //     primary: {
    //       main: orange[500]
    //     },
    //     customRibRed: {
    //       main: red[400],
    //       superDark: red[800],
    //       superLight: red[100]
    //     }
    //   },
    //   typography: {
    //     myVariant: {
    //       fontSize: "2rem"
    //     }
    //   }
    // });
  return (
    <>
    {/* <ThemeProvider theme={theme}>
    <CssBaseline /> */}
      <Suspense fallback={<Loading/>}>
          <HomePage />  
      </Suspense>   
    {/* </ThemeProvider> */}
    </>
  )
}

export default App
