import React from "react";
import styled from "styled-components";
import App from "../App";

//styling

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Title = styled.h1`
color: black;
border-bottom: 1px dashed lightgray;
`
const Info = styled.p`

text-align: center;
color: gray;
`
const Date = styled.p`
color: skyblue;
font-size: 15px;
`
const Image = styled.img`
width: 800px;
border-radius: 80px;

`
function Content(props) {
    
    console.log('this is from content.jsx', props.explanation, props.title)
    
    return (
        
        <div>
            <Image className="mainImg" src={props.img}/> 
            <Title>{props.h1}</Title>
            <Date>{props.date}</Date>
            <Info>{props.p}</Info>
            <Button >Enter</Button>
        </div>
    )
} 

export default Content;