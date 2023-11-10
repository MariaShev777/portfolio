import React, {useState} from "react";
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles';


export const MobileMenu:React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const onBurgerBtnClick = () => {
        setOpen(!isOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopUp isOpen={isOpen} onClick={() => setOpen(false)}>
                <Menu />
            </S.MobileMenuPopUp>
        </S.MobileMenu>
    );
};