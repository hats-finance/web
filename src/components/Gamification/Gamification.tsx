import { useContext, useState } from "react";
import About from "./components/About/About";
import TabsController from "./components/TabsController/TabsController";
import Game from "./components/Game/Game";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import SocialLinksPanel from "../SocialLinksPanel/SocialLinksPanel";
import { IPFS_PREFIX, ScreenSize } from "../../constants/constants";
import { LayoutContext } from "../../App";
import Countdown from "../Shared/Countdown/Countdown";
import { useTranslation } from "react-i18next";
import './index.scss';
import moment from "moment";

export enum Tab {
  About,
  Game,
  LeaderBoard
}

const DESKTOP_BANNER = "QmUWZ2SeZjLhSDnPFgShb2VXeJhpDN9ZrnNpPz4sNgdXYp";
const MOBILE_BANNER = "QmQvufMzAWBjPu2jtLaK3jazK2y1H7vNSfPh7ZhHyESuAf";
const GAMIFICATION_BEGIN = "1651590000";

export default function Gamification() {
  const { screenSize } = useContext(LayoutContext);
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(Tab.About);

  const renderContent = (currentTab: Tab) => {
    switch (currentTab) {
      case Tab.About:
        return <About switchToGame={() => setCurrentTab(Tab.Game)} />;
      case Tab.Game:
        return <Game />;
      case (Tab.LeaderBoard):
        return <LeaderBoard />;
    }
  }

  return (
    <div className="gamification-wrapper">
      <img className="banner" src={`${IPFS_PREFIX}/${screenSize === ScreenSize.Desktop ? DESKTOP_BANNER : MOBILE_BANNER}`} alt="banner" />
      {screenSize === ScreenSize.Desktop && moment().isBefore(moment.unix(Number(GAMIFICATION_BEGIN))) && (
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
