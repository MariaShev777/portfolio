import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/theme";
import {StyledButton} from "../../../../components/Button";

type ProjectPropsType = {
    src: string
    title: string
    description: string
}

export const Project:React.FC<ProjectPropsType>= (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <StyledButton>View Project</StyledButton>
            </ImageWrapper>

            <DescriptionBlock>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </DescriptionBlock>
        </StyledProject>
    );
};


const StyledProject = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      padding-left: 20px;
    }
  }

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
    backdrop-filter: blur(4px);
    opacity: 0;
  }
  
  ${StyledButton} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.secondaryBg};

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
`
