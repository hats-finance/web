import { useState } from "react";
import ForArtists from "./components/ForArtists/ForArtists";
import TabsController from "./components/TabsController/TabsController";
import Collections from "./components/Collections/Collections";
import Airdrop from "./components/Airdrop/Airdrop";
import { IPFS_ASSETS, IPFS_PREFIX } from "../../constants/constants";
import './index.scss';

export enum Tab {
  Airdrop,
  Collections,
  ForArtists
}

export default function NFT() {
  const [currentTab, setCurrentTab] = useState(Tab.Airdrop);

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
      <img className="banner" src={`${IPFS_PREFIX}/${IPFS_ASSETS}/New%20website%20banner.gif`} alt="banner" />
      <div className="nft-content">
        <TabsController currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderContent(currentTab)}
      </div>
    </div>
  )
}
