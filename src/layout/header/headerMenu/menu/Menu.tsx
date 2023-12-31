import React from "react";
import {S} from "../HeaderMenu_Styles";

const items = [
    {
        title: "Home",
        id: "home"
    },
    {
        title: "Skills",
        id: "skills"
    },
    {
        title: "Projects",
        id: "projects"
    },
    {
        title: "Contacts",
        id: "contacts"
    }
];

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        to={item.id}
                        smooth={true}
                        offset={-16}

                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink></S.MenuItem>
            })}
        </ul>
    );
};