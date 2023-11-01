import React from "react";
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/theme";
import {StyledButton} from "../../../../components/Button";

type ProjectPropsType = {
    picture: string
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.picture} alt=""/>
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
  max-width: 540px;
  width: 100%;
  
  ${Link} {
    padding: 10px 0;
    
    & + ${Link} {
      padding-left: 20px;
    }
  }
`


const ImageWrapper = styled.div`
  position: relative;
  
  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
    
    ${StyledButton} {
      opacity: 1;
    }
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
