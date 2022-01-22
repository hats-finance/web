import { useState } from "react";
import ForArtists from "./components/ForArtists/ForArtists";
import TabsController from "./components/TabsController/TabsController";
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
        return "";
      case Tab.Collections:
        return "";
      case (Tab.ForArtists):
        return <ForArtists />;
    }
  }

  return (
    <div className="nft-wrapper">
      <div className="banner">Banner</div>
      <div className="nft-content">
        <TabsController currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {renderContent(currentTab)}
      </div>
    </div>
  )
}
