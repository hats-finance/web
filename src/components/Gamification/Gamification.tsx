import { useState } from "react";
import About from "./components/About/About";
import TabsController from "./components/TabsController/TabsController";
import Game from "./components/Game/Game";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import SocialLinksPanel from "../SocialLinksPanel/SocialLinksPanel";
import './index.scss';

export enum Tab {
  About,
  Game,
  LeaderBoard
}

export default function Gamification() {
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
      <img className="banner" src="https://hats-finance.mypinata.cloud/ipfs/QmUWZ2SeZjLhSDnPFgShb2VXeJhpDN9ZrnNpPz4sNgdXYp" alt="banner" />
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
