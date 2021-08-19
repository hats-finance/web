import './index.scss';
import FaceIcon from '../../assets/icons/face.icon';
import LockIcon from '../../assets/icons/lock.icon';
import CubesIcon from '../../assets/icons/cubes.icon';
import { useTranslation } from 'react-i18next';

export default function Info() {
  const { t } = useTranslation();
  return (
    <div className="info-wrapper">
      <section className="protector-wrapper">
        <img className="protector-icon" src={require("../../assets/icons/protector.svg").default} alt="protector" />
        <div className="text-wrapper">
          <span className="title">{t("Become a protector")}</span>
          <span className="text">{t("Protector explained")}</span>
          <button className="button deposit-claim-btn">{t("Deposite and claim Hats")}</button>
        </div>
      </section>
      <section className="features-wrapper">
        <div className="features-content">
          <div className="title">{t("Features title")}</div>
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
      </section>

    </div>
  )
}
