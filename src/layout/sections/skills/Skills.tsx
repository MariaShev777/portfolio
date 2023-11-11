import React from "react";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {S} from "./Skills_Styles";


const skillsData = [
    {
        iconId: "logo",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis."
    },
    {
        iconId: "logo",
        title: "Redux",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis."
    },
    {
        iconId: "logo",
        title: "Typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis."
    },
    {
        iconId: "logo",
        title: "Javascript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis."
    },
    {
        iconId: "logo",
        title: "Git",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis."
    },
    {
        iconId: "logo",
        title: "HTML",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, corporis dignissimos doloribus eveniet id inventore numquam odit qui quos reiciendis."
    },
]


export const Skills = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                        {skillsData.map((skill, index) => {
                            return <Skill key={index}
                                          iconId={skill.iconId}
                                          title={skill.title}
                                          description={skill.description}/>
                        })}

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

