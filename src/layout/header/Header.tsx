import React from "react";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";

const items = ['Home', 'Skills', 'Projects', 'Contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Icon iconId={'logo'} />
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #f8f8b1;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`