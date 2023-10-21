import React from "react";
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </StyledMenu>
    );
};



const StyledMenu = styled.nav`
  background-color: #ec4f4f;

  ul {
    display: flex;
    gap: 20px;
  }
  
  li {
    list-style: none;
  }
`