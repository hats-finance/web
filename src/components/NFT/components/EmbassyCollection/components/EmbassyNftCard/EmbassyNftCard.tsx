import { useTranslation } from "react-i18next";
import { IPFS_PREFIX } from "../../../../../../constants/constants";
import "./index.scss";

interface IProps {
  index: string;
}

const IPFS_NFT_COLLECTION = "QmSiPFLfYwodihG94ASaiWJuQ6uLUXkz8p8kvoCTv8KraP";

export default function EmbassyNftCard({ index }: IProps) {
  const { t } = useTranslation();
  
  return (
    <div className="embassy-nft-card-wrapper">
      <img src={`${IPFS_PREFIX}/${IPFS_NFT_COLLECTION}/${index}.png`} alt="nft" />
      <div className="embassy-nft-card__info-container">
        <div className="embassy-nft-card__info-title">NFT TITLE</div>
        <div className="embassy-nft-card__info-element">
          <div className="embassy-nft-card__info-element-title">{t("NFTRouth.EmbassyCollection.EmbassyNftCard.vault-embassy")}</div>
          <div className="embassy-nft-card__info-element-value">VAULT NAME</div>
        </div>
        <div className="embassy-nft-card__info-element">
          <div className="embassy-nft-card__info-element-title">{t("NFTRouth.EmbassyCollection.EmbassyNftCard.tier")}</div>
          <div className="embassy-nft-card__info-element-value">TIER {t("NFTRouth.EmbassyCollection.EmbassyNftCard.tier-text")}</div>
        </div>
      </div>
    </div>
  )
}
