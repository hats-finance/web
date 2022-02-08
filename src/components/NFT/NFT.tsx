import { useContext, useState } from "react";
import ForArtists from "./components/ForArtists/ForArtists";
import TabsController from "./components/TabsController/TabsController";
import Collections from "./components/Collections/Collections";
import Airdrop from "./components/Airdrop/Airdrop";
import { IPFS_ASSETS, IPFS_PREFIX, TERMS_OF_SALE_OF_NFTS, ScreenSize } from "../../constants/constants";
import { LayoutContext } from "../../App";
import { useTranslation } from "react-i18next";
import './index.scss';

export enum Tab {
  Airdrop,
  Collections,
  ForArtists
}

export default function NFT() {
  const [currentTab, setCurrentTab] = useState(Tab.Airdrop);
  const { screenSize } = useContext(LayoutContext);
  const { t } = useTranslation();

  const renderContent = (currentTab: Tab) => {
    switch (currentTab) {
      case Tab.Airdrop:
        return <Airdrop />;
      case Tab.Collections:
        return <Collections />;
      case (Tab.ForArtists):
        return <ForArtists />;
    }
  }

  return (
    <div className="nft-wrapper">
      <img className="banner" src={`${IPFS_PREFIX}/${IPFS_ASSETS}/${screenSize === ScreenSize.Desktop ? "New%20website%20banner" : "Mobile%20banner"}.gif`} alt="banner" />
      <div className="nft-content">
        <TabsController currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderContent(currentTab)}
        <div className="nft-footer-wrapper">
          <a target="_blank" rel="noopener noreferrer" href={TERMS_OF_SALE_OF_NFTS}>{t("NFTRouth.Terms of Sale of NFTs")}</a>
        </div>
      </div>
    </div>
  )
}
