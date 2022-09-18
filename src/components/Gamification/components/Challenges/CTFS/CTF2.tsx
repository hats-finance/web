import { useTranslation } from "react-i18next";
import "../../../index.scss";

const CTF2_LINK = "https://github.com/hats-finance/games";

export default function CTF2(){
  const { t } = useTranslation();
  
  return (
    <div className="ctf-2-wrapper">
      <section>
        <div className="title">{t("GamificationRoute.Challenges.CTF2.title-1")}</div>
        <div>{t("GamificationRoute.Challenges.CTF2.text-1")}</div>
      </section>
      <section>
        <div className="title">{t("GamificationRoute.Challenges.CTF2.title-2")}</div>
        <div>{t("GamificationRoute.Challenges.CTF2.text-2")}</div>
      </section>
      <section>
        <div className="title">{t("GamificationRoute.Challenges.CTF2.title-3")}</div>
        <div>{t("GamificationRoute.Challenges.CTF2.text-3")}</div>
      </section>
      <button className="button ctf-2-button" onClick={() => window.open(CTF2_LINK)}>{t("GamificationRoute.Challenges.CTF2.button-1")}</button>
    </div>
  )
}
