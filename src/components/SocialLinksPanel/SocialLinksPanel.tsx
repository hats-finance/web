import { SocialLinks } from '../../constants/constants';
import "./index.scss";

export default function SocialLinksPanel() {
  return (
    <div className="social-links-wrapper">
      <img src={require("../../assets/icons/telegram-icon-blue.svg").default} alt="telegram" onClick={() => window.open(SocialLinks.Telegram, '_blank')} />
      <img src={require("../../assets/icons/github-icon-blue.svg").default} alt="github" onClick={() => window.open(SocialLinks.GitHub, '_blank')} />
      <img src={require("../../assets/icons/discord-icon-blue.svg").default} alt="discord" onClick={() => window.open(SocialLinks.Discord, '_blank')} />
      <img src={require("../../assets/icons/twitter-icon-blue.svg").default} alt="twitter" onClick={() => window.open(SocialLinks.Twitter, '_blank')} />
      <img src={require("../../assets/icons/medium-icon-blue.svg").default} alt="medium" onClick={() => window.open(SocialLinks.Medium, '_blank')} />
    </div>
  )
}
