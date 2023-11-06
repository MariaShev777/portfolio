import React from "react";
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';


export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.Greeting>Hi There</S.Greeting>
                        <S.Name>I am <span>Maria Shevtsova</span></S.Name>
                        <S.MainTitle>Frontend Developer</S.MainTitle>
                    </S.TextWrapper>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="photo"/>
                    </S.PhotoWrapper>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};