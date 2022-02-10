import './index.scss';
import { useTranslation } from "react-i18next";
import SocialLinksPanel from "../SocialLinksPanel/SocialLinksPanel";

export default function Social() {
  const { t } = useTranslation();

  return (
    <div className="social-wrapper">
      <div className="soical-content">
        <span className="sub-title">{t("Stay connected")}</span>
        <SocialLinksPanel />
      </div>
    </div>
  )
}
