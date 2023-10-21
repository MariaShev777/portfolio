import React from "react";
import styled from "styled-components";

type ProjectPropsType = {
    picture: string
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.picture} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledProject>
    );
};


const StyledProject = styled.div`
  background-color: #f3e86f;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`

const Title = styled.h3`
`

const Description = styled.p`
`

const Link = styled.a`
`