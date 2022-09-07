import { useTranslation } from "react-i18next";
import "./index.scss";

export default function EmbassyCollection() {
  const { t } = useTranslation();

  return (
    <div className="embassy-collection-wrapper">
      <section>
        <div className="title">{t("NFTRouth.EmbassyCollection.section-1-title")}</div>
        <div>{t("NFTRouth.EmbassyCollection.section-1-text")}</div>
      </section>
      <section>
        <div className="title">{t("NFTRouth.EmbassyCollection.section-2-title")}</div>
        <div>{t("NFTRouth.EmbassyCollection.section-2-text")}</div>
      </section>
      <section>
        <div className="title">{t("NFTRouth.EmbassyCollection.section-3-title")}</div>
        <div>{t("NFTRouth.EmbassyCollection.section-3-text")}</div>
      </section>
      <section>
        <div className="title">{t("NFTRouth.EmbassyCollection.section-4-title")}</div>
        <div>{t("NFTRouth.EmbassyCollection.section-4-text")}</div>
      </section>
    </div>
  )
}
