//import logo from './logo.svg';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import image from './images/Shreejalogo.png'
import './App.css';
import { useMediaQuery } from 'react-responsive'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
// Importing loader
import img from './images/cake logo.jpeg'
import PacmanLoader from "react-spinners/PacmanLoader";
// import ClockLoader from "react-spinners/ClockLoader";
import Homepage from './components/Homepage/homepage.js';
import Login from './components/LoginPage/login'
import Register from './components/RegisterPage/register'


const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 1224 },
    { deviceWidth: 1600 } // `device` prop
  )

  const apicall = () => {
    // console.log('test')


    // axios.post('http://localhost:5000/test', {
    //   params: {
    //     Email: 'bar',
    //     Password: ''
    //   }
    // }.then((response) => {
    //   console.log(response);

    //   // setPost(response.data);
    // })
    // )
  }

  useEffect(() => {
    apicall()
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    // <h1 className="App">

    <div className='App'>
      {/* <MediaQuery minWidth={1824}> */}
      {isDesktopOrLaptop && (
        <Router>
          <div>

            <Homepage />

            <Routes>

              <Route path="/Login" element={

                <Login />}
              />
              <Route path="/Register" element={

                <Register />}
              />
              <Route path="/Homepage" element={

                <Homepage />}
              />
            </Routes>
          </div>
        </Router>
      )}
      {/* </MediaQuery> */}

    </div>
    // </h1>
  );
}


const override = `
display: block;
margin: 0 auto;
border-color: red;

`;


export default App;
