import React from "react";
import { useTranslation } from "react-i18next";

export default function Info() {

    const { t } = useTranslation();
    return (
        <div className="info">
            <div className="info_title">{t("info.about")}</div>
            <div className="info_text">{t("info.aboutInf")}</div>
            <div className="info_title">{t("info.interests")}</div>
            <div className="info_text">{t("info.interestsInf")}</div>
        </div>
    )
}
