import { useTranslation } from 'react-i18next';
import { COOKIES_POLICY, TERMS_OF_USE } from '../../constants/constants';
import SocialLinksPanel from '../SocialLinksPanel/SocialLinksPanel';
import './index.scss';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <img src={require("../../assets/icons/logo-new.svg").default} alt="logo" width="50px" />
        <div className="links-wrapper">
          <a target="_blank" rel="noopener noreferrer" href={TERMS_OF_USE}>{t("Term of use")}</a>
          <a target="_blank" rel="noopener noreferrer" href={COOKIES_POLICY}>{t("Cookies Policy")}</a>
          <SocialLinksPanel />
        </div>
      </div>
    </div>
  )
}
