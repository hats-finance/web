import './index.scss';
import { useTranslation } from 'react-i18next';
import LogoIcon from "../../assets/icons/logo.icon";
import MenuIcon from "../../assets/icons/menu.icon";
import { LayoutContext } from '../../App';
import { useContext } from 'react';
import { ScreenSize } from '../../constants/constants';

export default function Header() {
  const { t } = useTranslation();
  const { screenSize } = useContext(LayoutContext);


  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <LogoIcon />
        <span>Hats</span>
      </div>

      {
        screenSize === ScreenSize.Desktop ?
          <div className="links-wrapper">
            {/* <div>{t("Whitepaper")}</div>
            <div>{t("FAQ")}</div> */}
            <button className="button create-vault-btn">{t("Create Vault")}</button>
            <button className="button fill">{t("App")}</button>
          </div> : <MenuIcon />
      }
    </div>
  )
}
