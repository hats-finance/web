import { useTranslation } from "react-i18next";
import NFTPreview from "./NFTPreview";
import "./index.scss";

const FEATURED_NFTS = ["990", "991", "992", "993", "994", "995", "996", "997"];
const ARTIST_LINK = "https://shira-noc.com/";

export default function Airdrop() {
  const { t } = useTranslation();

  const nfts = FEATURED_NFTS.map(nft => {
    return <NFTPreview key={nft} index={nft} />;
  })

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
      <span>{t("Artist")}: <a target="_blank" rel="noopener noreferrer" href={ARTIST_LINK}>Shira</a></span>
      <span className="crow-moto">{t("NFTRouth.Airdrop.Crow Moto")}</span>
      <section>
        <span className="title">{t("NFTRouth.Airdrop.Featured")}</span>
        <div className="nfts-container">
          {nfts}
        </div>
      </section>
    </div>
  )
}
