import { useTranslation } from "react-i18next";
import { DAPP_LINK } from "../../../../constants/constants";
import NftExample from "../../../../assets/images/nft/nft-example.jpeg";
import "./index.scss";

export default function AirdropPrompt() {
  const { t } = useTranslation();
  
  return (
    <div className="airdrop-prompt-wrapper">
      <div className="airdrop-prompt__new">
        <div className="airdrop-prompt__new__dot" />
        {t("AirdropPrompt.text-1")}
      </div>
      <div className="airdrop-prompt__title">{t("AirdropPrompt.text-2")}</div>
      <img src={NftExample} className="airdrop-prompt__nft-example" alt="nft" />
      <button className="button airdrop-prompt__to-airdrop-machine-btn" onClick={() => window.open(`${DAPP_LINK}/airdrop_machine`, '_blank')}>{t("AirdropPrompt.text-3")}</button>
    </div>
  )
}
