import React from "react";


function Content(props) {
    
    console.log('this is from content.jsx', props.explanation, props.title)
    
    return (
        <div className="contDiv">
        <img src={props.img}>
        </img>
        <h1>{props.h1}</h1>
        <p>{props.p} </p>
        <p>{props.date}</p>
        </div>
    )
} 

export default Content;