import React, {useEffect, useState} from "react";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";

const items = ["Home", "Skills", "Projects", "Contacts"];

export const Header: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Icon iconId={"logo"}/>

                    {width < breakpoint
                        ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>
                    }

                </FlexWrapper>
            </Container>
        </S.Header>
    );
};