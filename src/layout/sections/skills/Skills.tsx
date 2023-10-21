import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
         <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'logo'} title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis.'}/>
                <Skill iconId={'logo'} title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis.'}/>
                <Skill iconId={'logo'} title={'Typescript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis.'}/>
                <Skill iconId={'logo'} title={'Javascript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis.'}/>
                <Skill iconId={'logo'} title={'Git'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis.'}/>
                <Skill iconId={'logo'} title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis.'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: rgb(46, 46, 54);
  min-height: 70vh;
`