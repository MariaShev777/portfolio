import React from "react";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Home", "Skills", "Projects", "Contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Icon iconId={"logo"}/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #f8f8b1;
  //padding: 0 20px;
  //position: fixed;
  //width: 100%;
  //top: 0;
  //left: 0;
  //box-shadow: 0 0 40px rgba(0, 0, 0, 0.26), 0 0 2px rgba(0, 0, 0, 0.1);
`