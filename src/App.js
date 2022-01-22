import React, { useState } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import NFT from "./components/NFT/NFT";
import { SMALL_SCREEN_BREAKPOINT, ScreenSize, RoutePaths } from "./constants/constants";
import { getScreenSize } from "./utils";
import { Route, Switch } from "react-router-dom";

export const LayoutContext = React.createContext();

function App() {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  const currentScreenSize = window.matchMedia(`(min-width: ${SMALL_SCREEN_BREAKPOINT})`);
  currentScreenSize.addEventListener("change", screenSize => {
    setScreenSize(screenSize.matches ? ScreenSize.Desktop : ScreenSize.Mobile);
  });

  return (
    <LayoutContext.Provider value={{ screenSize: screenSize }}>
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path={RoutePaths.NFT}>
            <NFT />
          </Route>
        </Switch>
      </div>
    </LayoutContext.Provider>
  );
}

export default App;
