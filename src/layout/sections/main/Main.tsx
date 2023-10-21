import React from "react";
import photo from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Maria Shevtsova</Name>
                    <MainTitle>Frontend Developer</MainTitle>
                </div>

                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};




const StyledMain = styled.div`
  min-height: 70vh;
  background-color: #f1bcbc;
`


const Photo = styled.img`
  width: 350px;
  height: 400px;
  object-fit: cover;
`


const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`

