import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import pic1 from "../../../assets/images/photo_1.jpg";
import pic2 from "../../../assets/images/13.jpg";
import pic3 from "../../../assets/images/110726349.jpg";
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles';

const worksKeyWords = ["All", "Landing Page", "React", "Spa"];


const projectsData = [
    {
        title: "Social Network",
        src: pic2,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Task Manager",
        src: pic1,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Counter",
        src: pic3,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]


export const Projects:React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={worksKeyWords}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {projectsData.map((project, index) => {
                        return <Project
                            key={index}
                            title={project.title}
                            src={project.src}
                            description={project.description}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};