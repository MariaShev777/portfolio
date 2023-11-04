import React from "react";
import photo from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
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

const Greeting = styled.h2`
  font-size: 14px;
  font-weight: 400;
`

const MainTitle = styled.h1`
  ${font({weight: 400, fontMax: 27, fontMin: 20})}
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, fontMax: 50, fontMin: 36})}
  
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    

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
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }

`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: '';
    display: inline-block;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }

  }
`
