import { useTranslation } from "react-i18next";
import NFTPreview from "./NFTPreview";
import { DAPP_LINK } from "../../../../constants/constants";
import "./index.scss";

const FEATURED_NFTS = ["892", "342", "427", "374", "317", "807", "311", "852", "318", "801", "153", "19"];
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
      <span>{t("Artist")}: <a target="_blank" rel="noopener noreferrer" href={ARTIST_LINK}>Shira Noc</a></span>
      <button className="button fill to-nft-airdrop" onClick={() => window.open(`${DAPP_LINK}/nft_airdrop`, '_blank')}>{t("NFTRouth.Airdrop.Check Your Eligibility")}</button>
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
