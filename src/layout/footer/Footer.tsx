import React from "react";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Maria</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId={"logo"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId={"logo"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId={"logo"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId={"logo"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Maria Shevtsova, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #96ffe3;
  min-height: 20vh;
`

const Name = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`