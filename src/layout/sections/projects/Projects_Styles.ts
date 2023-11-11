import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/theme";
import {Link} from "../../../components/Link";
import {StyledButton} from "../../../components/Button";

const Projects = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Project = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
  z-index: 0;
  
  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &::before { 
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }
  
  ${StyledButton} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    color: ${theme.colors.secondaryBg};
    transition: ${theme.animations.transition};
    

    &::before {
      width: 100%;
      height: 100%
    }
  }
  
  &:hover {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${StyledButton} {
      opacity: 1;
    }
  }
  
`

const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`

const DescriptionBlock = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`
`

const Description = styled.p`
  margin: 14px 0 10px;
  letter-spacing: .2px;
`

export const S = {
    Projects,
    Project,
    ImageWrapper,
    Image,
    DescriptionBlock,
    Title,
    Description
}