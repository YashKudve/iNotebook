// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TF1 from "./components/TF1";
// import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0B0B61';
      showAlert("Dark Mode has been enabled", "success");
      document.title("TextUtils - Dark Mode");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title("TextUtils - Light Mode");
    }

  }
  return (
    <>
      <Navbar title="TextUtils" about='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      
      {/* <Switch>
        <Route path="/about">
          <About />
        </Route>
        
        <Route path="/"> */}
        <TF1 showAlert={showAlert} placeholder="Type Text Here" mode={mode} />
        {/* </Route>
      </Switch> */}
     
      <br />
      {/* <div className="container">
     <About />
     </div> */}


    </>
  );
}

export default App;
