import React from "react";
import { useTranslation } from "react-i18next";

const Alert = ({ type }) => {

    const { t } = useTranslation();
    return (<div className={"alert " + type}>{t(`alerts.${type}`)}</div>);

}

export default Alert