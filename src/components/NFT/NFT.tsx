import { useContext, useState } from "react";
import ForArtists from "./components/ForArtists/ForArtists";
import TabsController from "./components/TabsController/TabsController";
import Collections from "./components/Collections/Collections";
import Airdrop from "./components/Airdrop/Airdrop";
import { TERMS_OF_SALE_OF_NFTS, ScreenSize } from "../../constants/constants";
import { LayoutContext } from "../../App";
import { useTranslation } from "react-i18next";
import SocialLinksPanel from "../SocialLinksPanel/SocialLinksPanel";
import './index.scss';
import EmbassyCollection from "./components/EmbassyCollection/EmbassyCollection";
import EmbassyBanner from "../../assets/images/nft/embassy-banner.svg";
import EmbassyBannerMobile from "../../assets/images/nft/embassy-banner-mobile.svg";
import CrowClanBanner from "../../assets/images/nft/crow-clan-banner.gif";
import CrowClanBannerMobile from "../../assets/images/nft/crow-clan-banner-mobile.gif";

export enum Tab {
  EmbassyCollection,
  Airdrop,
  Collections,
  ForArtists
}

export default function NFT() {
  const [currentTab, setCurrentTab] = useState(Tab.EmbassyCollection);
  const { screenSize } = useContext(LayoutContext);
  const { t } = useTranslation();

  const renderContent = (currentTab: Tab) => {
    switch (currentTab) {
      case Tab.EmbassyCollection:
        return <EmbassyCollection />;
      case Tab.Airdrop:
        return <Airdrop />;
      case Tab.Collections:
        return <Collections />;
      case (Tab.ForArtists):
        return <ForArtists />;
    }
  }

  const banner = currentTab === Tab.Airdrop ?
    screenSize === ScreenSize.Desktop ? CrowClanBanner : CrowClanBannerMobile
    : screenSize === ScreenSize.Desktop ? EmbassyBanner : EmbassyBannerMobile;

  return (
    <div className="nft-wrapper">
      <img className="banner" src={banner} alt="banner" />
      <div className="nft-content">
        <TabsController currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderContent(currentTab)}
        <div className="nft-footer-wrapper">
          <a target="_blank" rel="noopener noreferrer" href={TERMS_OF_SALE_OF_NFTS}>{t("NFTRouth.Terms of Sale of NFTs")}</a>
          <SocialLinksPanel />
        </div>
      </div>
    </div>
  )
}
