import './index.scss';
import { useTranslation } from 'react-i18next';
import LogoIcon from "../../assets/icons/logo.icon";
import { LayoutContext } from '../../App';
import { useContext, useState } from 'react';
import { DAPP_LINK, GIT_BOOK, ScreenSize } from '../../constants/constants';
import Menu from "./Menu";

export default function Header() {
  const { t } = useTranslation();
  const { screenSize } = useContext(LayoutContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = <div className="links-wrapper">
    {/* <a target="_blank" rel="noopener noreferrer" href="https://google.com">{t("Whitepaper")}</a> */}
    <a target="_blank" rel="noopener noreferrer" href={GIT_BOOK}>{t("Docs")}</a>
    {/* <a target="_blank" rel="noopener noreferrer" href={GIT_BOOK}>{t("FAQ")}</a> */}
    {/* <button className="button create-vault-btn">{t("Create Vault")}</button> */}
    <button onClick={() => window.open(DAPP_LINK, '_blank')} className="button fill">{t("App")}</button>
  </div>

  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <LogoIcon />
        <span>Hats</span>
      </div>
      {screenSize === ScreenSize.Desktop ? links : <img src={require("../../assets/icons/menu.svg").default} onClick={() => setToggleMenu(!toggleMenu)} alt="menu" />}
      {toggleMenu && <Menu>{links}</Menu>}
    </div>
  )
}
