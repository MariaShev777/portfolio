import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/theme";


const Contacts = styled.section`
  position: relative;
`

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;

  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`


const Alert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 150px;
  animation-delay: 2s;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: ${theme.colors.primaryBg};
  opacity: .8;

  p {
    //line-height: 150px;
    text-align: center;
    font-size: 22px;
    padding-top: 20px;
  }

  
`




export const S = {
    Contacts,
    Form,
    Field,
    Alert
}