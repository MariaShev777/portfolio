import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/theme";

const Main = styled.section`
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
  ${font({weight: 400, fontMax: 27, fontMin: 20})};
  
  p {
    display: none;
  }
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

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
`

export const S = {
    Main,
    TextWrapper,
    Greeting,
    MainTitle,
    Name,
    Photo,
    PhotoWrapper
}