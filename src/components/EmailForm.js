import React from "react";
import emailjs from "emailjs-com"
import { useTranslation } from "react-i18next";

export default function EmailForm() {

    const { t } = useTranslation();

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm('service_1iy5gak', 'template_6gbir8g', event.target, 'user_XBRlnMJTaDgnsPi3EQeXp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset()
    }

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-title">{t("modalEmail.callback")}</div>
            <input required type="text" placeholder={t("modalEmail.name")} className="form-control" name="name" />
            <input required type="email" placeholder={t("modalEmail.email")} className="form-control" name="email" />
            <textarea required className="form-control" placeholder={t("modalEmail.message")} rows="5" name="message" />
            <button type="submit" className="form-button">{t("modalEmail.btnSubmit")}</button>
        </form>
    );
}



