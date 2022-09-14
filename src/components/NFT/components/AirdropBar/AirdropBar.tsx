import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { RoutePaths } from "../../../../constants/constants";
import "./index.scss";

export default function AirdropBar() {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className="airdrop-bar-wrapper">
      <div className="airdrop-bar__text-container">
        <div className="airdrop-bar__text-container__new-label">
          <div className="airdrop-bar__text-container__new-label__dot" />
          {t("AirdropBar.text-1")}
        </div>
        {t("AirdropBar.text-2")}
      </div>
      <button
        className="button airdrop-bar__go-to-nft-btn"
        onClick={() => history.push(RoutePaths.NFT)}>
        {t("AirdropBar.text-3")}
      </button>
    </div>
  )
}
