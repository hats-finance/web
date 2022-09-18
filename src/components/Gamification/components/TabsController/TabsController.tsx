import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LayoutContext } from "../../../../App";
import { ScreenSize } from "../../../../constants/constants";
import { Tab } from "../../Gamification";
import "./index.scss";

interface IProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export default function TabsController({ currentTab, setCurrentTab }: IProps) {
  const { t } = useTranslation();
  const tabsWrapperElement = useRef<any>();
  const { screenSize } = useContext(LayoutContext);

  const handleClick = (tab: Tab) => {
    setCurrentTab(tab);
    if (screenSize === ScreenSize.Mobile) {
      const maxLeftScroll = tabsWrapperElement.current?.clientWidth - tabsWrapperElement.current?.scrollWidth;
      switch (tab) {
        case Tab.Challenges:
          return tabsWrapperElement.current.scrollLeft = maxLeftScroll;
        case Tab.LeaderBoard:
          return tabsWrapperElement.current.scrollLeft = -maxLeftScroll;
      }
    }
  }

  return (
    <div ref={tabsWrapperElement} className="gamification-tabs-controller-wrapper">
      <div className={`tab ${currentTab === Tab.Challenges && "selected"}`} onClick={() => handleClick(Tab.Challenges)}>{t("GamificationRoute.TabController.challenges")}</div>
      <div className={`tab ${currentTab === Tab.LeaderBoard && "selected"}`} onClick={() => handleClick(Tab.LeaderBoard)}>{t("GamificationRoute.TabController.leaderBoard")}</div>
    </div >
  )
}
