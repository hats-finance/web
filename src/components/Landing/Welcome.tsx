
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import { LayoutContext } from "../../App";
import landingTextAnimation from "../../assets/lotties/landing-text.json";
import landingTextAnimationMobile from "../../assets/lotties/landing-text-mobile.json";
import { DAPP_LINK, MASTER_SHREDDER_HACKER_LINK, ScreenSize } from "../../constants/constants";
import './index.scss';


export default function Welcome() {
  const { t } = useTranslation();
  const { screenSize } = useContext(LayoutContext);

  const defaultLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: screenSize === ScreenSize.Desktop ? landingTextAnimation : landingTextAnimationMobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="welcome-wrapper">
      <div className="welcome-content">
        <Lottie options={defaultLottieOptions} />
        <div className="buttons-wrapper">
          <button onClick={() => window.open(DAPP_LINK, '_blank')} className="button fill">{screenSize === ScreenSize.Desktop ? t("Happy hunting") : t("Launch app")}</button>
          <button onClick={() => window.open(MASTER_SHREDDER_HACKER_LINK, '_blank')} className="button">{t("Master Shredder hacker?")}</button>
        </div>
      </div>
    </div>
  )
}
