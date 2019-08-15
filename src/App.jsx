import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./index.scss";

//import components

import Content from './components/Content';

function App() {
  const  [mainCard, setMainCard] = useState();
  useEffect(() => {
    axios 
      .get (`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        // console.log(response.data);
        const card = response.data;
        setMainCard(card);
      })
  }, [])
  console.log(mainCard);

  if (!mainCard) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Content img={mainCard.hdurl} h1={mainCard.title} p={mainCard.explanation} date={mainCard.date}/>
    </div>
  );
}

export default App;   


