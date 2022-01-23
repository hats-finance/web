import { useTranslation } from "react-i18next";
import "./index.scss";

export default function Collections() {
  const { t } = useTranslation();

  return (
    <div className="collections-wrapper">
      <section>
        <div className="title">{t("NFTRouth.Collections.Hackers Rewards")}</div>
        <div>{t("NFTRouth.Collections.Hackers Rewards explained")}</div>
      </section>
    </div>
  )
}
