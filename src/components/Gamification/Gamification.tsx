import { useContext, useEffect, useState } from "react";
import Challenges from "./components/Challenges/Challenges";
import TabsController from "./components/TabsController/TabsController";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import SocialLinksPanel from "../SocialLinksPanel/SocialLinksPanel";
import { IPFS_PREFIX, ScreenSize } from "../../constants/constants";
import { LayoutContext } from "../../App";
import Countdown from "../Shared/Countdown/Countdown";
import { useTranslation } from "react-i18next";
import moment from "moment";
import './index.scss';
import CTFDesktopCover from "../../assets/images/ctfs/ctf-desktop.svg";
import CTFMobileCover from "../../assets/images/ctfs/ctf-mobile.svg";
import axios from "axios";
import classNames from "classnames";
import { CTF_VAULT_IPFS } from "../../settings";

export enum Tab {
  Challenges,
  LeaderBoard
}

export default function Gamification() {
  const { screenSize } = useContext(LayoutContext);
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(Tab.Challenges);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${IPFS_PREFIX}/${CTF_VAULT_IPFS}`);
      setStartTime(res.data["project-metadata"].starttime);
      setEndTime(res.data["project-metadata"].endtime);
    })();
  }, [])

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
      <div className="gamification__banner-container">
        <img className="gamification__banner" src={screenSize === ScreenSize.Desktop ? CTFDesktopCover : CTFMobileCover} alt="banner" />
        {startTime && endTime && moment().isBefore(moment.unix(endTime)) && (
          <div className={classNames("countdown-container", { "live": moment().isAfter(moment.unix(startTime)) })}>
            <span>{t("ChallengesRoute.Gamification.ctf-2")}</span>
            <Countdown endDate={moment().isBefore(moment.unix(startTime)) ? startTime : endTime} className="gamification__countdown" />
            <span>{t(moment().isAfter(moment.unix(startTime)) ? "ChallengesRoute.Gamification.is-live" : "ChallengesRoute.Gamification.to-launch")}</span>
          </div>
        )}
      </div>
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
