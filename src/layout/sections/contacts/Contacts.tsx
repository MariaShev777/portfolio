import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import { Container } from "../../../components/Container";
import {S} from './Contacts_Styles';

export const Contacts:React.FC = () => {
    return (
        <S.Contacts id='contacts'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <S.Form>
                    <S.Field placeholder='Your e-mail'></S.Field>
                    <S.Field placeholder='Subject'></S.Field>
                    <S.Field placeholder='Type here...' as={'textarea'}></S.Field>
                    <StyledButton type='submit'>Send</StyledButton>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};