import React from "react";
import styled from "styled-components"

const Header = styled.h3 `
width:100%;
text-align:center;
color:white;
border-bottom:2px solid red;
background-color:gray;
`
const IotdDiv = styled.div `
width:100%;
display:flex;
margin: 0 auto ;
align-items:center;
flex-direction:column;
border:5px solid green;
`
const IotdImg = styled.img `
width:400px;
height:400px;
border:2px solid red;
background-color:gray;
`
const Body = styled.body `
max-width:800px;
margin: 0 auto ;

`
const Paragraph = styled.p `
width:50%;
border:2px solid red;
background-color:gray;
color:white;
`

const Span = styled.span `
width:100%;
border-top:2px solid red;
background-color:gray;
color:white;
`

const Iotd = ({ iotd }) => {
  return (
    <Body>
      <IotdDiv>
      <Header>{iotd.title}</Header>
      <IotdImg src={iotd.url} />
      <Paragraph>{iotd.explanation}</Paragraph>
      <Span>
        {iotd.copyright}, {iotd.date}
      </Span>
      </IotdDiv>
    </Body>
  );
};

export default Iotd;
