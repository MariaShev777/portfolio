import React from "react";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";


export const Header = () => {
    return (
        <StyledHeader>
            <Icon iconId={'logo'} />
            <Menu/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #a5f1a4;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`