import { useTranslation } from "react-i18next";
import "./index.scss";

export default function Game() {
  const { t } = useTranslation();

  return (
    <div className="collections-wrapper">
      <section>
        <div className="title">{t("Gamification.Game.title-1")}</div>
        <div className="sub-title">{t("Gamification.Game.sub-title-1")}</div>
        <div>{t("Gamification.Game.text-1")}</div>
        <div className="sub-title">{t("Gamification.Game.sub-title-2")}</div>
        <div>{t("Gamification.Game.text-2")}</div>
      </section>
      <section>
        <div className="title">{t("Gamification.Game.title-3")}</div>
        <div>{t("Gamification.Game.text-3")}</div>
      </section>
    </div>
  )
}
