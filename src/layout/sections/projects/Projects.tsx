import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import cccounter from '../../../assets/images/cccounter.png';
import social2 from '../../../assets/images/social2.png';
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles';
import todo2 from '../../../assets/images/todo2.png';


const worksKeyWords = ["All", "Landing Page", "React", "Spa"];

export type ProjectType = {
    title: string
    src: string
    description: string
    href: string
    link: string
}
const projectsData: ProjectType[] = [
    {
        title: "Social Network",
        src: social2,
        description: "An online platform to build social networks and relationships with people",
        href: 'https://github.com/MariaShev777/samurai-way-main',
        link: 'https://mariashev777.github.io/samurai-way-main/'
    },
    {
        title: "Task Manager",
        src: todo2,
        description: "A tool that helps you organize and manage your tasks",
        href: 'https://github.com/MariaShev777/my-todolist',
        link: 'https://mariashev777.github.io/login'
    },
    {
        title: "Counter",
        src: cccounter,
        description: "A free simple app designed for keeping the count value",
        href: 'https://github.com/MariaShev777/counter-with-redux',
        link: 'https://mariashev777.github.io/counter-with-redux/'
    },
]


export const Projects:React.FC = () => {
    return (
        <S.Projects id='projects'>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={worksKeyWords}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {projectsData.map((project, index) => {
                        return <Project
                            key={index}
                            project={project}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};