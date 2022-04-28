import { useTranslation } from "react-i18next";
import "./index.scss";

interface IProps {
  switchToGame: () => void;
}

export default function About({ switchToGame }: IProps) {
  const { t } = useTranslation();

  return (
    <div className="about-wrapper">
      <section>
        <div className="title">{t("Gamification.About.title-1")}</div>
        <div>{t("Gamification.About.text-1")}</div>
      </section>
      <section>
        <div className="title">{t("Gamification.About.title-2")}</div>
        <div>{t("Gamification.About.text-2")}</div>
      </section>
      <section>
        <div className="title">{t("Gamification.About.title-3")}</div>
        <div>{t("Gamification.About.text-3")}</div>
      </section>
      <button className="button go-to-game-btn" onClick={switchToGame}>{t("Gamification.About.btn-1")}</button>
    </div>
  )
}
