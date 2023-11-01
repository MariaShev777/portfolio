import styled from "styled-components";
import {theme} from "../styles/theme";

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 90px;
  
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 55px;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    background-color: ${theme.colors.accent};
  }
`