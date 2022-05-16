import { useTranslation } from "react-i18next";
import "./index.scss";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="section contactus-wrapper">
      <div className="section-content">
        <div className="contactus-form">
          <p className="contactus-form__title">Stay up to date</p>
          <p className="contactus-form__subtitle">
            Subscribe to our newsletter
          </p>
          <div className="contactus-form__element">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="contactus-form__element">
            <label>E-mail</label>
            <input type="text" />
          </div>
          <div className="contactus-form__element">
            <label>Position</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
