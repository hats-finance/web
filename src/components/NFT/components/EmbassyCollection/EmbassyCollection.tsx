import { useTranslation } from "react-i18next";
import EmbassyNftCard from "./components/EmbassyNftCard/EmbassyNftCard";
import "./index.scss";

const FEATURED_NFTS = ["892", "342", "427", "374", "317", "807", "311", "852", "318", "801", "153", "19"];
const ARTIST_LINK = "https://www.facebook.com/Rafahu/";

export default function EmbassyCollection() {
  const { t } = useTranslation();

  const nfts = FEATURED_NFTS.map(nft => {
    return <EmbassyNftCard key={nft} index={nft} />;
  })

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
      <span>{t("Artist")}: <a target="_blank" rel="noopener noreferrer" href={ARTIST_LINK}>Rafahu</a></span>
      <div className="embassy-collection__nfts-container">
        {nfts}
      </div>
    </div>
  )
}
