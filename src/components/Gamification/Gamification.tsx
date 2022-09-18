import { useContext, useState } from "react";
import Challenges from "./components/Challenges/Challenges";
import TabsController from "./components/TabsController/TabsController";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import SocialLinksPanel from "../SocialLinksPanel/SocialLinksPanel";
import { ScreenSize } from "../../constants/constants";
import { LayoutContext } from "../../App";
import Countdown from "../Shared/Countdown/Countdown";
import { useTranslation } from "react-i18next";
import moment from "moment";
import './index.scss';
import CTFDesktopCover from "../../assets/images/ctfs/ctf-desktop.svg";
import CTFMobileCover from "../../assets/images/ctfs/ctf-mobile.svg";

export enum Tab {
  Challenges,
  LeaderBoard
}

export const GAMIFICATION_BEGIN = "1651590000";

export default function Gamification() {
  const { screenSize } = useContext(LayoutContext);
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(Tab.Challenges);

  const renderContent = (currentTab: Tab) => {
    switch (currentTab) {
      case Tab.Challenges:
        return <Challenges />;
      case (Tab.LeaderBoard):
        return <LeaderBoard />;
    }
  }

  return (
    <div className="gamification-wrapper">
      <img className="banner" src={screenSize === ScreenSize.Desktop ? CTFDesktopCover : CTFMobileCover} alt="banner" />
      {moment().isBefore(moment.unix(Number(GAMIFICATION_BEGIN))) && (
        <div className="countdown-container">
          <span>{t("Gamification.gamification-vault")}</span>
          <Countdown endDate={GAMIFICATION_BEGIN} />
          <span>{t("Gamification.game-launch")}</span>
        </div>
      )}
      <div className="gamification-content">
        <TabsController currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderContent(currentTab)}
        <div className="gamification-footer-wrapper">
          <SocialLinksPanel />
        </div>
      </div>
    </div>
  )
}
