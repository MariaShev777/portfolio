import React from "react";
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.description}</SkillDescription>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
  width: 30%;
  background-color: rgba(255, 255, 255, 0.53);
  margin: 10px;
  border-radius: 10px;
`

const SkillTitle = styled.h3`

`

const SkillDescription = styled.p`
    
`