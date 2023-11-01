import React from "react";
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./header-menu/HeaderMenu";

const items = ["Home", "Skills", "Projects", "Contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Icon iconId={"logo"}/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  //box-shadow: 0 0 40px rgba(0, 0, 0, 0.26), 0 0 2px rgba(0, 0, 0, 0.1);
`