import React from "react";
import { useTranslation } from "react-i18next";

export default function MainInfo() {

    const { t } = useTranslation();
    return (
        <div className="main_info">
            <div className="FIO">{t('mainInfo.FIO')}</div>
            <div className="position">{t('mainInfo.position')}</div>
            <a className="portfolio_link" href="https://lecklark.github.io/Portfolio/">{t('mainInfo.portfolioLink')}</a>
        </div>
    )
}
