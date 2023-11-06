import styled from "styled-components";
import {theme} from "../styles/theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 400, fontMax: 36, fontMin: 30})}
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 90px;

  position: relative;
  
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
    
    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`