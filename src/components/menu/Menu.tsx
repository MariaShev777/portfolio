import React from "react";
import styled from "styled-components";



export const Menu = (props: {menuItems: string[]}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                        return <li key={index}><a href="#">{item}</a></li>
                    })}
            </ul>
        </StyledMenu>
    );
};



const StyledMenu = styled.nav`
  background-color: #eae5e5;

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  li {
    list-style: none;
  }
`