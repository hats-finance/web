import { useTranslation } from "react-i18next";
import { SMART_BUG_BOUNTY_VAULT } from "../../../../constants/constants";
import "./index.scss";

export default function Summary() {
  const { t } = useTranslation();

  return (
    <div className="section summary-wrapper">
      <div className="section-content summary-content">
        <button onClick={() => window.open(SMART_BUG_BOUNTY_VAULT, '_blank')} className="button smart-bug-bounty-btn">{t("Landing.Summary.action-btn")}</button>
      </div>
    </div>
  )
}
