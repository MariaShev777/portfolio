import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder='Your e-mail'></Field>
                <Field placeholder='Subject'></Field>
                <Field placeholder='Type here...' as={'textarea'}></Field>
                <StyledButton type='submit'>Send</StyledButton>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #331616;
`


const StyledForm = styled.form`
  background-color: rgba(255, 255, 255, 0.44);
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`
`