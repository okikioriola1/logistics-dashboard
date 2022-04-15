import React, {useState} from 'react'
import './App.css';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/styles/globalStyles";
import { lightTheme, darkTheme } from "./components/styles/Theme"
import Sidebar from './components/sidebar/Sidebar';
import {RiMenu3Line} from 'react-icons/ri'
import {RiCloseLine} from 'react-icons/ri'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Vehicles from './pages/vehicles/Vehicles';

import Toggle from './components/Toggle';
import { useDarkMode } from './components/styles/useDarkMode';





function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [theme, themeToggler] = useDarkMode();
  const themeMode= theme === 'light' ? lightTheme : darkTheme

  const hide =()=>{
    setToggleMenu (false)
  }

  return (
    <Router>
      <Switch>
        <ThemeProvider theme={themeMode}> 
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler}/>
    <div className="App">
      <div className="left-side">
        <Sidebar/>

      </div>
      <div className="right-side">
        <Route exact path ="/" ><Home/></Route>
        <Route path ="/vehicles" ><Vehicles/></Route>

        


      </div>
      <div className="mobile-menu">
        {toggleMenu ? <RiCloseLine size={30} className="close-svg" onClick={()=>setToggleMenu(false)}/> : <RiMenu3Line size = {30} onClick={()=>setToggleMenu(true)}/>}

        {toggleMenu && (
          <div className="mobile-menu-container scale-up-hor-left">
            <Sidebar hide={hide} className="mobile-sidebar" />
            </div>

        )}

      </div>


    </div>
    </ThemeProvider>
    </Switch>
    </Router>
   
  );
}

export default App;
