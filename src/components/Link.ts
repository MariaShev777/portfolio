import styled from "styled-components";
import {theme} from "../styles/theme";

export const Link = styled.a.attrs(() => ({
    target: '_blank'
}))`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  
  &:hover {
    &::before {
      height: 9px;
    }
  }
  
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
    z-index: -1;
    height: 0;
    transition: ${theme.animations.transition};
  }
`