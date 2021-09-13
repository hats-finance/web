import './index.scss';
import { useTranslation } from 'react-i18next';
import LogoIcon from "../../assets/icons/logo.icon";
import { LayoutContext } from '../../App';
import { useContext, useState } from 'react';
import { COOKIES_POLICY, DAPP_LINK, GIT_BOOK, RoutePaths, ScreenSize, SocialLinks, TERMS_OF_USE } from '../../constants/constants';
import Menu from "./Menu";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();
  const { screenSize } = useContext(LayoutContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = <div className="links-wrapper">
    <NavLink to={RoutePaths.NFT} onClick={() => setToggleMenu(false)} className="header-link" activeClassName="selected">{t("NFT")}</NavLink>
    <a target="_blank" rel="noopener noreferrer" href={GIT_BOOK}>{t("Docs")}</a>
    <a target="_blank" rel="noopener noreferrer" href={SocialLinks.Discord}>{t("Community")}</a>
    <button onClick={() => window.open(DAPP_LINK, '_blank')} className="button fill">{t("App")}</button>
    {screenSize === ScreenSize.Mobile && <>
      <a target="_blank" rel="noopener noreferrer" href={TERMS_OF_USE}>{t("Term of use")}</a>
      <a target="_blank" rel="noopener noreferrer" href={COOKIES_POLICY}>{t("Cookies Policy")}</a>
    </>}
  </div>

  return (
    <div className="header-wrapper">
      <Link to="/" className="logo-wrapper">
        <LogoIcon />
        <span>Hats</span>
      </Link>
      {screenSize === ScreenSize.Desktop ? links : <img src={require(toggleMenu ? "../../assets/icons/close.svg" : "../../assets/icons/menu.svg").default} onClick={() => setToggleMenu(!toggleMenu)} alt="menu" />}
      {toggleMenu && <Menu>{links}</Menu>}
    </div>
  )
}
