import './index.scss';
import { useTranslation } from "react-i18next";
import { SocialLinks } from '../../constants/constants';

export default function Social() {
  const { t } = useTranslation();

  return (
    <div className="social-wrapper">
      <div className="soical-content">
        <span className="sub-title">{t("Stay connected")}</span>
        <div className="links-wrapper">
          <img src={require("../../assets/icons/telegram-icon.svg").default} alt="telegram" onClick={() => window.open(SocialLinks.Telegram, '_blank')} />
          <img src={require("../../assets/icons/github-icon.svg").default} alt="github" onClick={() => window.open(SocialLinks.GitHub, '_blank')} />
          <img src={require("../../assets/icons/discord-icon.svg").default} alt="discord" onClick={() => window.open(SocialLinks.Discord, '_blank')} />
          <img src={require("../../assets/icons/twitter-icon.svg").default} alt="twitter" onClick={() => window.open(SocialLinks.Twitter, '_blank')} />
          <img src={require("../../assets/icons/medium-icon.svg").default} alt="medium" onClick={() => window.open(SocialLinks.Medium, '_blank')} />
        </div>
      </div>
    </div>
  )
}
