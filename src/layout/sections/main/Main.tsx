import React from "react";
import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main:React.FC = () => {
    return (
        <S.Main id='home'>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.Greeting>Hi There</S.Greeting>
                        <S.Name>I am <span>Maria Shevtsova</span></S.Name>
                        <S.MainTitle>
                            <p>Frontend Developer</p>
                            <Typewriter
                            options={{
                                strings: ['Developer', 'Front-end Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 120
                            }}
                        />
                        </S.MainTitle>
                    </S.TextWrapper>

                    <Tilt>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="photo"/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};