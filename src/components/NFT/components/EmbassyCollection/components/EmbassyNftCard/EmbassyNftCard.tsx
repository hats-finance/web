import { useTranslation } from "react-i18next";
import { IPFS_PREFIX } from "../../../../../../constants/constants";
import "./index.scss";

interface IProps {
  nftData: { project: string, role: string, tier: string };
}

const Tiers = {
  "low": 1,
  "medium": 2,
  "high": 3
}

const IPFS_NFT_COLLECTION = "QmdyyJWXrD8texwRW41sCxGzAGcmnWrWPRSx58EFk3KA3S"

export default function EmbassyNftCard({ nftData }: IProps) {
  const { t } = useTranslation();

  return (
    <div className="embassy-nft-card-wrapper">
      <img src={`${IPFS_PREFIX}/${IPFS_NFT_COLLECTION}/${nftData.project}/${nftData.role}/${nftData.tier}.jpg`} alt="nft" />
      <div className="embassy-nft-card__info-container">
        <div className="embassy-nft-card__info-title">{nftData.role}</div>
        <div className="embassy-nft-card__info-element">
          <div className="embassy-nft-card__info-element-title">{t("NFTRouth.EmbassyCollection.EmbassyNftCard.vault-embassy")}</div>
          <div className="embassy-nft-card__info-element-value">{nftData.project}</div>
        </div>
        <div className="embassy-nft-card__info-element">
          <div className="embassy-nft-card__info-element-title">{t("NFTRouth.EmbassyCollection.EmbassyNftCard.tier")}</div>
          <div className="embassy-nft-card__info-element-value">{(Tiers as any)[nftData.tier]} {t("NFTRouth.EmbassyCollection.EmbassyNftCard.tier-text")}</div>
        </div>
      </div>
    </div>
  )
}
