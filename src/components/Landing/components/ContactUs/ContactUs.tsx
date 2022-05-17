import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

export default function ContactUs() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [position, setPosition] = useState("");
  const [sendDisabled, setSendDisabled] = useState(true);

  const validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    return regex.test(email);
  };

  useEffect(() => {
    const emailInvalid = !validateEmail(email);
    setEmailInvalid(emailInvalid);
    if (!emailInvalid && name && email && position) setSendDisabled(false);
    else setSendDisabled(true);
  }, [name, email, position]);

  return (
    <div className="section contactus-wrapper">
      <div className="section-content">
        <div className="contactus-form">
          <p className="contactus-form__title">
            {t("Landing.ContactUs.title")}
          </p>
          <p className="contactus-form__subtitle">
            {t("Landing.ContactUs.subtitle")}
          </p>
          <div className="contactus-form__element">
            <label>{t("Landing.ContactUs.name")}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contactus-form__element">
            <label>{t("Landing.ContactUs.email")}</label>
            <input
              type="email"
              value={email}
              className={email && emailInvalid ? "invalid" : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contactus-form__element">
            <label>{t("Landing.ContactUs.position")}</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <button
            className="button contactus-form__button"
            disabled={sendDisabled}
          >
            {t("Landing.ContactUs.action-btn")}
          </button>
        </div>
      </div>
    </div>
  );
}
