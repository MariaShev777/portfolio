import React, {ElementRef, useRef, useState} from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import emailjs from "@emailjs/browser";

export const Contacts: React.FC = () => {
    const [visibility, setVisibility] = useState(0)

    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm("service_czsqglr", "template_x48davr", form.current, "CUXmzRs64xr9m_Mif")
            .then((result) => {
                setVisibility(1)
                setTimeout(() => {
                    setVisibility(0)
                }, 3000)
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    let alertStyle = {
        opacity: visibility
    }

    return (
        <S.Contacts id="contacts">
            <Container>
                    <S.Alert style={alertStyle}><p>Your email has been sent successfully.</p> <p>Thank you!</p>
                    </S.Alert>
                <SectionTitle>Contacts</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder="Your name" name="user_name"></S.Field>
                    <S.Field required placeholder="Your e-mail" name="user_email"></S.Field>
                    <S.Field required placeholder="Subject" name="subject"></S.Field>
                    <S.Field required placeholder="Type here..." as={"textarea"} name="message"></S.Field>
                    <StyledButton type="submit">Send</StyledButton>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};