
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import landingTextAnimation from "../../assets/lotties/landing-text.json";
import { MASTER_SHREDDER_HACKER_LINK } from "../../constants/constants";
import './index.scss';


export default function Welcome() {
  const { t } = useTranslation();

  const defaultLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: landingTextAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="welcome-wrapper">
      <Lottie options={defaultLottieOptions} />
      <div className="buttons-wrapper">
        <button className="button fill">{t("Happy hunting")}</button>
        <button onClick={() => window.open(MASTER_SHREDDER_HACKER_LINK, '_blank')} className="button">{t("Master Shredder hacker?")}</button>
      </div>
    </div>
  )
}
