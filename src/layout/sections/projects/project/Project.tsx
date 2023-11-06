import React from "react";
import {Link} from "../../../../components/Link";
import {StyledButton} from "../../../../components/Button";
import {S} from '../Projects_Styles';

type ProjectPropsType = {
    title: string
    src: string
    description: string
}

export const Project:React.FC<ProjectPropsType>= (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <StyledButton>View Project</StyledButton>
            </S.ImageWrapper>

            <S.DescriptionBlock>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.DescriptionBlock>
        </S.Project>
    );
};