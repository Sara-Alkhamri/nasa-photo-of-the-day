import React from "react";
import styled from "styled-components";

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

color: red;
`
const Info = styled.p`

text-align: center;
color: skyblue;
`
const Date = styled.p`

color: blue;
font-size: 15px;
`

const Image = styled.img`

width: 800px;

`
function Content(props) {
    
    console.log('this is from content.jsx', props.explanation, props.title)
    
    return (
        
        <div className="mainContent">
            <Image className="mainImg" src={props.img}/>
            <Title>{props.h1}</Title>
            <Info>{props.p}</Info>
            <Date>{props.date}</Date>
            <Button >Enter</Button>
        </div>
    )
} 

export default Content;