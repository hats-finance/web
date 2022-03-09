
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LayoutContext } from "../../App";
import { DAPP_LINK, MASTER_SHREDDER_HACKER_LINK, ScreenSize } from "../../constants/constants";
import WelcomeAnimation from "./WelcomeAnimation";
import './index.scss';


export default function Welcome() {
  const { t } = useTranslation();
  const { screenSize } = useContext(LayoutContext);

  return (
    <div className="welcome-wrapper">
      <div className="welcome-content">
        <WelcomeAnimation />
        <div className="buttons-wrapper">
          <button onClick={() => window.open(DAPP_LINK, '_blank')} className="button fill">{screenSize === ScreenSize.Desktop ? t("Happy hunting") : t("Launch app")}</button>
          <button onClick={() => window.open(MASTER_SHREDDER_HACKER_LINK, '_blank')} className="button">{t("Master Shredder hacker?")}</button>
        </div>
      </div>
    </div>
  )
}
