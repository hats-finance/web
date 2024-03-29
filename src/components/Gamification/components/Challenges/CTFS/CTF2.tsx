import { useTranslation } from "react-i18next";
import "../../../index.scss";

const CTF2_LINK = "https://github.com/hats-finance/vault-game";
const FAQ_LINK = "https://docs.hats.finance/ctf/faq";

export default function CTF2(){
  const { t } = useTranslation();
  
  return (
    <div className="ctf-2-wrapper">
      <section>
        <div className="title">{t("ChallengesRoute.Challenges.CTF2.title-1")}</div>
        <div>{t("ChallengesRoute.Challenges.CTF2.text-1")}</div>
      </section>
      <section>
        <div className="title">{t("ChallengesRoute.Challenges.CTF2.title-2")}</div>
        <div>{t("ChallengesRoute.Challenges.CTF2.text-2")}</div>
      </section>
      <section>
        <div className="title">{t("ChallengesRoute.Challenges.CTF2.title-3")}</div>
        <div>{t("ChallengesRoute.Challenges.CTF2.text-3")}</div>
        <a className="ctf-2__faq-link" target="_blank" rel="noopener noreferrer" href={FAQ_LINK}>FAQ</a>
      </section>
      <button className="button ctf-2-button" onClick={() => window.open(CTF2_LINK)}>{t("ChallengesRoute.Challenges.CTF2.button-1")}</button>
    </div>
  )
}
