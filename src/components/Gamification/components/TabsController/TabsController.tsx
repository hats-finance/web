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
        case Tab.About:
          return tabsWrapperElement.current.scrollLeft = maxLeftScroll;
        case Tab.Game:
          return tabsWrapperElement.current.scrollLeft = -maxLeftScroll / 2;
        case Tab.LeaderBoard:
          return tabsWrapperElement.current.scrollLeft = -maxLeftScroll;
      }
    }
  }

  return (
    <div ref={tabsWrapperElement} className="tabs-controller-wrapper">
      <div className={`tab ${currentTab === Tab.About && "selected"}`} onClick={() => handleClick(Tab.About)}>{t("Gamification.TabController.about")}</div>
      <div className={`tab ${currentTab === Tab.Game && "selected"}`} onClick={() => handleClick(Tab.Game)}>{t("Gamification.TabController.game")}</div>
      <div className={`tab ${currentTab === Tab.LeaderBoard && "selected"}`} onClick={() => handleClick(Tab.LeaderBoard)}>{t("Gamification.TabController.leaderBoard")}</div>
    </div >
  )
}
