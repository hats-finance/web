
import { useTranslation } from "react-i18next";
import './index.scss';


export default function TheHacker() {
  const { t } = useTranslation();


  return (
    <div className="section the-hacker-wrapper">
      <div className="section-content">
        <img src={require("../../../../assets/images/landing/the-hacker.svg").default} className="section-image" alt="the hacker" />
        <div className="section-text-wrapper">

          <div className="section-title">{t("Landing.Hacker.title")}</div>
          <div className="section-description">{t("Landing.Hacker.description")}</div>
        </div>
      </div>
    </div>
  )
}
