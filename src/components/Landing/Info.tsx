import './index.scss';
import FaceIcon from '../../assets/icons/face.icon';
import LockIcon from '../../assets/icons/lock.icon';
import CubesIcon from '../../assets/icons/cubes.icon';
import { useTranslation } from 'react-i18next';
import { DAPP_LINK, GET_IN_TOUCH, GIT_BOOK } from '../../constants/constants';

export default function Info() {
  const { t } = useTranslation();
  return (
    <div className="info-wrapper">
      <section className="features-wrapper">
        <div className="features-content">
          <div className="title large">{t("Features title")}</div>
          <div className="features-icons-wrapper">
            <div className="feature">
              <CubesIcon />
              <span>{t("#Decentralized")}</span>
            </div>
            <div className="feature">
              <LockIcon />
              <span>{t("#Permissionless")}</span>
            </div>
            <div className="feature">
              <FaceIcon />
              <span>{t("#Anonymous")}</span>
            </div>
          </div>
        </div>
        <a target="_blank" rel="noopener noreferrer" href={GIT_BOOK}>{t("Learn more")}</a>
      </section>

      <section className="protector-wrapper">
        <img className="protector-icon" src={require("../../assets/icons/protector.svg").default} alt="protector" />
        <div className="text-wrapper">
          <span className="title">{t("Become a protector")}</span>
          <span className="text">{t("Protector explained")}</span>
          <button onClick={() => window.open(DAPP_LINK, '_blank')} className="button deposit-claim-btn">{t("Deposit and claim Hats")}</button>
        </div>
      </section>

      <section className="protocol-wrapper">
        <img className="protocol-icon" src={require("../../assets/icons/protocol.svg").default} alt="protocol" />
        <div className="text-wrapper">
          <span className="title">{t("Protect my protocol")}</span>
          <span className="text">{t("Protocol explained")}</span>
          <button onClick={() => window.open(GET_IN_TOUCH, '_blank')} className="button deposit-claim-btn">{t("Get in touch")}</button>
        </div>
      </section>
    </div>
  )
}
