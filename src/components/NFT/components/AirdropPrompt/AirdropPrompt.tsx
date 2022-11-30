import { useTranslation } from "react-i18next";
import { DAPP_LINK, LocalStorage } from "../../../../constants/constants";
import NftExample from "../../../../assets/images/nft/nft-example.svg";
import "./index.scss";

interface AirdropPromptProps {
  closeModal: () => void;
}

export default function AirdropPrompt({ closeModal }: AirdropPromptProps) {
  const { t } = useTranslation();

  const handleClick = () => {
    closeModal();
    window.open(`${DAPP_LINK}/airdrop_machine`, "_blank");
    localStorage.setItem(LocalStorage.AirdropPrompt, "true");
  };

  return (
    <div className="airdrop-prompt-wrapper">
      <div className="airdrop-prompt__new">
        <div className="airdrop-prompt__new__dot" />
        {t("AirdropPrompt.text-1")}
      </div>
      <div className="airdrop-prompt__title">{t("AirdropPrompt.text-2")}</div>
      <img src={NftExample} className="airdrop-prompt__nft-example" alt="nft" />
      <button className="button airdrop-prompt__to-airdrop-machine-btn" onClick={handleClick}>
        {t("AirdropPrompt.text-3")}
      </button>
    </div>
  );
}
