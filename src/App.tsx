import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import NFT from "./components/NFT/NFT";
import Gamification from "./components/Gamification/Gamification";
import { SMALL_SCREEN_BREAKPOINT, ScreenSize, RoutePaths, LocalStorage } from "./constants/constants";
import { getScreenSize } from "./utils";
import { Route, Switch, useLocation } from "react-router-dom";
import useModal from "./hooks/useModal";
import Modal from "./components/Shared/Modal/Modal";
import AirdropPrompt from "./components/NFT/components/AirdropPrompt/AirdropPrompt";
import AirdropBar from "./components/NFT/components/AirdropBar/AirdropBar";

export const LayoutContext = React.createContext({ screenSize: "" });

function App() {
  const hasSeenAirdropPromt = localStorage.getItem(LocalStorage.AirdropPrompt) === "true";
  const [screenSize, setScreenSize] = useState(getScreenSize());
  const { isShowing: showAirdropPrompt, toggle: toggleAirdropPrompt } = useModal();
  const location = useLocation();

  const currentScreenSize = window.matchMedia(`(min-width: ${SMALL_SCREEN_BREAKPOINT})`);
  currentScreenSize.addEventListener("change", (screenSize) => {
    setScreenSize(screenSize.matches ? ScreenSize.Desktop : ScreenSize.Mobile);
  });

  const openAirdropPrompt = useCallback(() => {
    setTimeout(() => {
      !hasSeenAirdropPromt && toggleAirdropPrompt();
    }, 1000);
  }, [toggleAirdropPrompt, hasSeenAirdropPromt]);

  useEffect(() => {
    window.addEventListener("load", openAirdropPrompt);
    return () => window.removeEventListener("load", openAirdropPrompt);
  }, [openAirdropPrompt]);

  return (
    <LayoutContext.Provider value={{ screenSize: screenSize }}>
      <div className="app-wrapper">
        {!location.pathname.includes(RoutePaths.NFT) && <AirdropBar />}
        <Header />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path={RoutePaths.NFT}>
            <NFT />
          </Route>
          <Route path={RoutePaths.Challenges}>
            <Gamification />
          </Route>
        </Switch>
        <Modal
          isShowing={showAirdropPrompt}
          hide={() => {
            toggleAirdropPrompt();
            localStorage.setItem(LocalStorage.AirdropPrompt, "true");
          }}>
          <AirdropPrompt closeModal={toggleAirdropPrompt} />
        </Modal>
      </div>
    </LayoutContext.Provider>
  );
}

export default App;
