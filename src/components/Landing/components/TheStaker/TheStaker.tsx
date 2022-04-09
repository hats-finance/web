
import { useTranslation } from "react-i18next";
import './index.scss';


export default function TheStaker() {
  const { t } = useTranslation();


  return (
    <div className="section the-staker-wrapper">
      <div className="section-content">
        <div className="section-text-wrapper">

          <div className="section-title">{t("Landing.Staker.title")}</div>
          <div className="section-description">{t("Landing.Staker.description")}</div>
        </div>
        <img src={require("../../../../assets/images/landing/the-chain-protector.svg").default} className="section-image" alt="the chain protector" />
      </div>
    </div>
  )
}
