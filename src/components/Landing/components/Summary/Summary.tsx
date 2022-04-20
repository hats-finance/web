import { useTranslation } from "react-i18next";
import { SMART_BUG_BOUNTY_VAULT } from "../../../../constants/constants";
import "./index.scss";

export default function Summary() {
  const { t } = useTranslation();

  return (
    <div className="section summary-wrapper">
      <div className="section-content summary-content">
        <div className="features-wrapper">
          <div className="feature">
            <img src={require("../../../../assets/images/landing/web3.svg").default} alt="web3" />
            <span>{t("Landing.Summary.web3")}</span>
          </div>

          <div className="feature">
            <img src={require("../../../../assets/images/landing/on-chain-dispute.svg").default} alt="dispute" />
            <span>{t("Landing.Summary.dispute")}</span>
          </div>

          <div className="feature">
            <img src={require("../../../../assets/images/landing/pay-bounty.svg").default} alt="web3" />
            <span>{t("Landing.Summary.pay-bounty")}</span>
          </div>
        </div>
        <button
          onClick={() => window.open(SMART_BUG_BOUNTY_VAULT, '_blank')}
          className="button smart-bug-bounty-btn">
          {t("Landing.Summary.action-btn")}
        </button>
      </div>
    </div>
  )
}
