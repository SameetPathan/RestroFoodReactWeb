import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Dishes from './components/Dishes';
import { DISHES } from './shared/dishes';
import Alert from './components/Alert';
import About from './components/About';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';





function App() {

  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
    setalert({
        message:message,
        type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }




  const [mode, setmode] = useState('light');
  const modetoggle=()=>{
    if(mode=='light'){
      setmode('dark');
      document.body.style.backgroundColor="#171717";
      showalert("Dark Mode has Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("Light Mode has Enabled","success");
    }
  }


  const avail=()=>{
    showalert("Available Soon","danger");
  }
  

  return (
    <>
    <Router>
      <div>
        <Navbar title="RestroFood" mode={mode} togglemode={modetoggle} ></Navbar>
        <Alert alert={alert}></Alert>
        <br/>
      </div>
      <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
        
            <Route exact path="/">
              <Dishes dishes={DISHES} Avail={avail}  mode={mode}></Dishes>
            </Route>
          </Switch>
     
    </Router>
    </>
  );
}

export default App;
