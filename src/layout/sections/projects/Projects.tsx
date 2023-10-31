import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import pic1 from '../../../assets/images/photo_1.jpg';
import pic2 from '../../../assets/images/13.jpg';
import pic3 from '../../../assets/images/110726349.jpg';

const worksKeyWords = ["All", "Landing Page", "React", "Spa"];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={worksKeyWords}/>
            <FlexWrapper justify={'space-around'}>
                <Project picture={pic2} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Project picture={pic1} title={'Task Manager'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Project picture={pic3} title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
            </FlexWrapper>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
  min-height: 100vh;
  //background-color: #838580;
`