
import { useTranslation } from "react-i18next";
import moment from "moment";
import { GAMIFICATION_BEGIN } from "../../../Gamification/Gamification";
import Countdown from "../../../Shared/Countdown/Countdown";
import './index.scss';

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="section welcome-wrapper">
      <div className="section-content">
        <div className="section-text-wrapper">
          <div className="hats-finance">{t("Landing.Welcome.HATS.FINANCE")}</div>
          <div className="section-title">{t("Landing.Welcome.title")}</div>
          <div className="section-description">{t("Landing.Welcome.description")}</div>
        </div>
        <img src={require("../../../../assets/images/landing/welcome.svg").default} className="section-image" alt="all users" />
        {moment().isBefore(moment.unix(Number(GAMIFICATION_BEGIN))) && (
          <div className="countdown-container">
            <span>{t("Gamification.gamification-vault")}</span>
            <Countdown endDate={GAMIFICATION_BEGIN} />
            <span>{t("Gamification.game-launch")}</span>
          </div>
        )}
      </div>
      <button className="button start" onClick={() => document.getElementById("startStage")?.scrollIntoView({ behavior: "smooth" })}>{t("Landing.Welcome.start")}<img src={require("../../../../assets/icons/landing/down-arrow.svg").default} alt="arrow" /></button>
      <div className="moto">{t("Landing.Welcome.moto")}</div>
    </div>
  )
}
