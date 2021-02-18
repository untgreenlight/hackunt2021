import React from "react";
import styled from "styled-components";
// import logo from '/templogo.png';
import Image from "next/image"
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

const Header = () => {
  return (
    <Root>
      <ImageWrapper>
        <Image src={'/templogo.png'} layout="responsive" height="400" width="400"/>
        {/* <logo /> */}
      </ImageWrapper>
      <Container>
        <FloatDown>
          <StyledSlider>
              {[...new Array(15)].map((_, i) => (
                  <div data-src={`/2020/${i + 1}.jpg`}/>
              ))}
          </StyledSlider>
        </FloatDown>
        <FloatUp>
          <Card>
            <DateInfo>March 13 - 14, 2021</DateInfo>
            <Button>Register</Button>
          </Card>
        </FloatUp>
      </Container>
    </Root>
  );
};
export default Header;

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
`
const FloatUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const FloatDown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 25%;
`
const DateInfo = styled.h1`
  text-shadow: 2px 2px black;
`

const Card = styled.div`
  padding: 30px;
  background-color: #C38ECD;
  box-shadow: 10px 10px #a455b4;
  margin: 20px;
`
const Button = styled.button`
  background-color: #F18E7E;
  padding: 15px 32px;
  font-size: x-large;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px black;
  border-radius: 3px;
  border: none;
  margin-top: 10px;
`

// background-color: #a455b4;
// padding: 15px 32px;
// font-size: x-large;
// font-weight: bold;
// color: white;
// text-shadow: 2px 2px black;
// border-radius: 3px;
// border: none;
// margin-top: 10px;

const StyledSlider = styled(AwesomeSlider)`
  width: 50%;
  box-shadow: 10px 10px #a455b4;
  --slider-height-percentage: 60%;
  --slider-transition-duration: 700ms;
  --organic-arrow-thickness: 10px;
  --organic-arrow-border-radius: 20px;
  --organic-arrow-height: 39px;
  --organic-arrow-color: #874195;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: transparent;
  --control-bullet-active-color:  #874195;
  --loader-bar-color: #851515;
  --loader-bar-height: 6px;
`