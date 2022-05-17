import { useTranslation } from "react-i18next";
import "./index.scss";

export default function ContactUs() {
  const { t } = useTranslation();

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
            <input type="text" />
          </div>
          <div className="contactus-form__element">
            <label>{t("Landing.ContactUs.email")}</label>
            <input type="text" />
          </div>
          <div className="contactus-form__element">
            <label>{t("Landing.ContactUs.position")}</label>
            <input type="text" />
          </div>
          <button className="button contactus-form__button">
            {t("Landing.ContactUs.action-btn")}
          </button>
        </div>
      </div>
    </div>
  );
}
