import React from "react";
import { useTranslation } from "react-i18next";

const Header = ({ changeLanguage }) => {

    const { i18n } = useTranslation();

    return (
        <header className="header">
            <select value={i18n.language} className="header_select" size="1" onChange={(e) => changeLanguage(e.target.value)}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        </header>
    )
}

export default Header