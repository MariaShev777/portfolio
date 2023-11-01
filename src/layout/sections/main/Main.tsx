import React from "react";
import photo from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextWrapper>
                        <Greeting>Hi There</Greeting>
                        <Name>I am <span>Maria Shevtsova</span></Name>
                        <MainTitle>Frontend Developer</MainTitle>
                    </TextWrapper>

                    <PhotoWrapper>
                        <Photo src={photo} alt="photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #f1bcbc;
  display: flex;
`


const TextWrapper = styled.div`
  text-align: left;
`

const Greeting = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    

    &::before {
      content: '';
      display: inline-block;
      height: 12px;
      width: 100%;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
    
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;
    height: 470px;
    width: 360px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    left: 24px;
    top: -24px;
    z-index: -1;
  }
`
