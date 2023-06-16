import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AreaDropDown } from './components/AreaDropDown'
import SwitchesGroup from './components/MaleFemaleSwitch'
import StartButton from './components/StartButton'
import { HomePage } from './components/pages/HomePage'
import Distance from './components/DistanceInput'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import { SelectPage } from './components/pages/SelectPage'
import { StartTime } from './components/StartTime'
import { RunnersPage } from './components/pages/RunnersPage'
import { NewRunnersList } from './components/NewRunnerList'


function App() {

  return (
  <>
  <ThemeProvider theme={theme}>
  {/*<HomePage></HomePage>*/}
   <SelectPage></SelectPage>
   {/*<AreaDropDown></AreaDropDown>   
  <SwitchesGroup></SwitchesGroup>

  <StartButton></StartButton>
  <StartTime></StartTime>
  <Distance></Distance>
  <RunnersPage></RunnersPage>
  <NewRunnersList></NewRunnersList>*/}
  <NewRunnersList></NewRunnersList>
  </ThemeProvider>
    </>
  )
}

export default App
