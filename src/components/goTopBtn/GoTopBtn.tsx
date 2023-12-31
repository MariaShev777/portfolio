import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [visibleBtn, setVisibleBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 200 ? setVisibleBtn(true) : setVisibleBtn(false)
        })
    }, [])

    return (
        <>
            {visibleBtn &&
            <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                <Icon iconId={"arrowGoTop"} height={"15"} width={"16"} viewBox={"0 0 16 15"}/>
            </StyledGoTopBtn>}
        </>
    )
};

const Bouncing = keyframes`
  50% {
    transform: translateY(20%);
  }
`

const StyledGoTopBtn = styled.button`
  padding: 8px 8px 7px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  right: 30px;
  bottom: 30px;
  animation: ${Bouncing} 2s linear infinite alternate;
  //transition: 0.6s;
  
 
  
  &:hover {
    transform: scale(1.4);
  }
`

