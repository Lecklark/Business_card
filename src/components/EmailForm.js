import React from "react";
import emailjs from "emailjs-com"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Loader from "../UI/Loader";
import Alert from "../UI/Alert";

export default function EmailForm() {

    const { t } = useTranslation();
    const [fetching, setFetching] = useState(false);
    const [alert, setAlert] = useState({ open: false, type: '' })

    const openAlert = (type) => {
        setAlert({ ...alert, open: true, type });
        setTimeout(() => setAlert({ ...alert, open: false, type: '' }), 4000)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFetching(true)
        emailjs.sendForm('service_1iy5gak', 'template_6gbir8g', event.target, 'user_XBRlnMJTaDgnsPi3EQeXp')
            .then((result) => {
                console.log(result.text);
                setFetching(false);
                openAlert('success');
                event.target.reset()
            }, (error) => {
                console.log(error.text);
                setFetching(false);
                openAlert('warning')
            });
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="alert__wrap">{alert.open && <Alert type={alert.type} />}</div>
            {fetching && <div className="loader__wrap"><Loader /></div>}
            <div className="form-title">{t("modalEmail.callback")}</div>
            <input required type="text" placeholder={t("modalEmail.name")} className="form-control" name="name" />
            <input required type="email" placeholder={t("modalEmail.email")} className="form-control" name="email" />
            <textarea required className="form-control" placeholder={t("modalEmail.message")} rows="5" name="message" />
            <button type="submit" className="form-button">{t("modalEmail.btnSubmit")}</button>
        </form>
    );
}



