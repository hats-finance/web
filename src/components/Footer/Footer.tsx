import { useTranslation } from 'react-i18next';
import LogoIcon from '../../assets/icons/logo.icon';
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
        <a>{t("Overview")}</a>
        <a>{t("Term of use")}</a>
        <a>{t("Privacy Policy")}</a>
      </div>
    </div>
  )
}
