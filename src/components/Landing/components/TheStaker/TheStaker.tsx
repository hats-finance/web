
import { useTranslation } from "react-i18next";
import './index.scss';


export default function TheStaker() {
  const { t } = useTranslation();


  return (
    <div className="section the-staker-wrapper">
      <div className="section-content">
        <div className="section-text-wrapper">
          <div className="section-text-header-wrapper">
            <img src={require("../../../../assets/icons/landing/the-staker.svg").default} className="section-header-icon" alt="the staker" />
            <div className="section-header-title">{t("Landing.Staker.section-title")}</div>
          </div>
          <div className="section-title">{t("Landing.Staker.title")}</div>
          <div className="section-description">{t("Landing.Staker.description")}</div>
        </div>
        <img src={require("../../../../assets/images/landing/the-chain-protector.svg").default} className="section-image" alt="the chain protector" />
      </div>
    </div>
  )
}
