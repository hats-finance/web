
import { useTranslation } from "react-i18next";
import './index.scss';

export default function TheHacker() {
  const { t } = useTranslation();

  return (
    <div className="section the-hacker-wrapper">
      <div className="section-content the-hacker-content">
        <img src={require("../../../../assets/images/landing/the-hacker.svg").default} className="section-image" alt="the hacker" />
        <div className="section-text-wrapper section-text-wrapper-the-hacker">
          <div className="section-text-header-wrapper">
            <img src={require("../../../../assets/icons/landing/the-hacker.svg").default} className="section-header-icon" alt="the hacker" />
            <div className="section-header-title">{t("Landing.Hacker.section-title")}</div>
          </div>
          <div className="section-title">{t("Landing.Hacker.title")}</div>
          <div className="section-description">{t("Landing.Hacker.description")}</div>
          <span className="the-hacker-subtitle">{t("Landing.Hacker.sub-title-1")}</span>
          <div className="the-hacker-advantage-element">
            <img src={require("../../../../assets/icons/landing/no-kyc.svg").default} alt="no kyc" />
            <span>{t("Landing.Hacker.text-1")}</span>
          </div>
          <div className="the-hacker-advantage-element">
            <img src={require("../../../../assets/icons/landing/bug.svg").default} alt="bug" />
            <span>{t("Landing.Hacker.text-2")}</span>
          </div>
          <div className="the-hacker-advantage-element">
            <img src={require("../../../../assets/icons/landing/dispute.svg").default} alt="dispute" />
            <span>{t("Landing.Hacker.text-3")}</span>
          </div>
          <div className="the-hacker-advantage-element">
            <img src={require("../../../../assets/icons/landing/nft.svg").default} alt="nft" />
            <span>{t("Landing.Hacker.text-4")}</span>
          </div>
          <div className="the-hacker-advantage-element">
            <img src={require("../../../../assets/icons/landing/gamification.svg").default} alt="gamification" />
            <span>{t("Landing.Hacker.text-5")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
