import { useTranslation } from "react-i18next";
import NFTMedia from "./NFTMedia";
import "./index.scss";

const FEATURED_NFTS_MEDIA = ["Altair", "Aparat", "Electric Dreams", "Swarm of Thoughts", "Tech Sphere"];
const ARTIST_LINK = "https://www.instagram.com/bzik_d/";

export default function Collections() {
  const { t } = useTranslation();

  const nfts = FEATURED_NFTS_MEDIA.map(nft => {
    return <NFTMedia key={nft} item={nft} />;
  })

  return (
    <div className="collections-wrapper">
      <section>
        <div className="title">{t("NFTRouth.Collections.Hackers Rewards")}</div>
        <div>{t("NFTRouth.Collections.Hackers Rewards explained")}</div>
      </section>
      <section>
        <div className="title">{t("NFTRouth.Collections.Collection Example")}</div>
        <div>{t("NFTRouth.Collections.Collection Example explained")}</div>
      </section>
      <span>{t("Artist")}: <a target="_blank" rel="noopener noreferrer" href={ARTIST_LINK}>David Budzik</a></span>
      <section>
        <div className="nfts-media-container">
          {nfts}
        </div>
      </section>
    </div>
  )
}
