import { useTranslation } from "react-i18next";
import "../../../index.scss";

export default function CTF1(){
  const { t } = useTranslation();
  
  return (
    <div className="ctf-1-wrapper">
      <section>
        <div className="title">{t("GamificationRoute.Challenges.CTF1.title-1")}</div>
        <div>{t("GamificationRoute.Challenges.CTF1.text-1")}</div>
      </section>
    </div>
  )
}
