import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AreaDropDown } from './components/AreaDropDown'
import SwitchesGroup from './components/MaleFemaleSwitch'
import StartButton from './components/StartButton'
import Distance from './components/DistanceInput'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import { StartTime } from './components/StartTime'
import NewRunnerList from './components/NewRunnerList'
import { HomePage } from './components/pages/HomePage.jsx'
import { RunnersPage } from './components/pages/RunnersPage.jsx'
import { SelectPage } from './components/pages/SelectPage.jsx'
import { Routes, Route } from 'react-router-dom';
import { AreaContext } from './components/AreaContext'
import { AreaProvider } from './components/AreaContext'
import { GenderProvider } from './components/GenderContext'

function App() {

  return (
    <>
    
    <ThemeProvider theme={theme}>

<AreaProvider>
<GenderProvider>
  <Routes>
      <Route exact path="/" element={ <HomePage></HomePage> } />
      <Route exact path="/select" element={ <SelectPage></SelectPage> } />
      <Route exact path="/runners" element={ <RunnersPage></RunnersPage> } />
  </Routes>
 </GenderProvider> 
 </AreaProvider>    
    
    </ThemeProvider>

    </>
  );
}

export default App
