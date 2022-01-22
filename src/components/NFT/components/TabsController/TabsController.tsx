import { useTranslation } from "react-i18next";
import { Tab } from "../../NFT";
import "./index.scss";

interface IProps {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export default function TabsController({ currentTab, setCurrentTab }: IProps) {
  const { t } = useTranslation();

  return (
    <div className="tabs-controller-wrapper">
      <div className={`tab ${currentTab === Tab.Airdrop && "selected"}`} onClick={() => setCurrentTab(Tab.Airdrop)}>{t("NFTRouth.TabController.airdrop")}</div>
      <div className={`tab ${currentTab === Tab.Collections && "selected"}`} onClick={() => setCurrentTab(Tab.Collections)}>{t("NFTRouth.TabController.collections")}</div>
      <div className={`tab ${currentTab === Tab.ForArtists && "selected"}`} onClick={() => setCurrentTab(Tab.ForArtists)}>{t("NFTRouth.TabController.forArtists")}</div>
    </div>
  )
}
