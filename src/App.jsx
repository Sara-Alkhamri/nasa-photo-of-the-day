import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./index.css";

//Import components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const  [maincard, setMainCard] = useState();
  useEffect(() => {
    axios 
      .get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response);
      })
  }, [])
  
  
  return (


    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
