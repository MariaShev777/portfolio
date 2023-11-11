import React from "react";
import {Link} from "../../../../components/Link";
import {StyledButton} from "../../../../components/Button";
import {S} from '../Projects_Styles';
import {ProjectType} from "../Projects";


export const Project:React.FC<{project: ProjectType}>= (props: {project: ProjectType}) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.project.src} alt=""/>
                <StyledButton>View Project</StyledButton>
            </S.ImageWrapper>

            <S.DescriptionBlock>
                <S.Title>{props.project.title}</S.Title>
                <S.Description>{props.project.description}</S.Description>
                <Link href={props.project.href}>code</Link>
                <Link href={props.project.link}>demo</Link>
            </S.DescriptionBlock>
        </S.Project>
    );
};