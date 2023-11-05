import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import pic1 from "../../../assets/images/photo_1.jpg";
import pic2 from "../../../assets/images/13.jpg";
import pic3 from "../../../assets/images/110726349.jpg";
import {Container} from "../../../components/Container";

const worksKeyWords = ["All", "Landing Page", "React", "Spa"];

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={worksKeyWords}/>
                <FlexWrapper justify={"space-between"} align={'flex-start'} wrap={'wrap'}>
                    <Project picture={pic2} title={"Social Network"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Project picture={pic1} title={"Task Manager"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Project picture={pic3} title={"Counter"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    ${FlexWrapper} {
      gap: 30px;
    }
`