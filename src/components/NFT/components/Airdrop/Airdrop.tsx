import { useTranslation } from "react-i18next";
import "./index.scss";

export default function Airdrop() {
  const { t } = useTranslation();

  return (
    <div className="airdrop-wrapper">
      <section>
        <div className="title">{t("NFTRouth.Airdrop.Once a Crow")}</div>
        <div>{t("NFTRouth.Airdrop.Once a Crow explained")}</div>
      </section>
      <section>
        <div className="title">{t("NFTRouth.Airdrop.The Crow")}</div>
        <div>{t("NFTRouth.Airdrop.The Crow explained")}</div>
      </section>
      <span className="crow-moto">{t("NFTRouth.Airdrop.Crow Moto")}</span>
    </div>
  )
}
