import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LayoutContext } from "../../../../App";
import { ScreenSize } from "../../../../constants/constants";
import { Tab } from "../../NFT";
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
        case Tab.Airdrop:
          return tabsWrapperElement.current.scrollLeft = maxLeftScroll;
        case Tab.Collections:
          return tabsWrapperElement.current.scrollLeft = -maxLeftScroll / 2;
        case Tab.ForArtists:
          return tabsWrapperElement.current.scrollLeft = -maxLeftScroll;
      }
    }
  }

  return (
    <div ref={tabsWrapperElement} className="tabs-controller-wrapper">
      <div className={`tab ${currentTab === Tab.Airdrop && "selected"}`} onClick={() => handleClick(Tab.Airdrop)}>{t("NFTRouth.TabController.airdrop")}</div>
      <div className={`tab ${currentTab === Tab.Collections && "selected"}`} onClick={() => handleClick(Tab.Collections)}>{t("NFTRouth.TabController.collections")}</div>
      <div className={`tab ${currentTab === Tab.ForArtists && "selected"}`} onClick={() => handleClick(Tab.ForArtists)}>{t("NFTRouth.TabController.forArtists")}</div>
    </div >
  )
}
