import React from "react";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";
import {GoTopBtn} from "../../components/goTopBtn/GoTopBtn";


const socialItemsData = [
    {
        iconId: "logo"
    },
    {
        iconId: "logo"
    },
    {
        iconId: "logo"
    },
    {
        iconId: "logo"
    },
]


export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Maria</S.Name>
                <S.SocialList>

                    {socialItemsData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon height="21" width="21" viewBox="0 0 51 51" iconId={s.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Maria Shevtsova, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};