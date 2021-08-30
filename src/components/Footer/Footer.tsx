import { useTranslation } from 'react-i18next';
import LogoIcon from '../../assets/icons/logo.icon';
import { COOKIES_POLICY, TERMS_OF_USE } from '../../constants/constants';
import './index.scss';


export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <div className="footer-wrapper">
      <div className="logo-wrapper">
        <LogoIcon />
        <span>Hats</span>
      </div>
      <div className="links-wrapper">
        <a target="_blank" rel="noopener noreferrer" href={TERMS_OF_USE}>{t("Term of use")}</a>
        <a target="_blank" rel="noopener noreferrer" href={COOKIES_POLICY}>{t("Cookies Policy")}</a>
      </div>
    </div>
  )
}
