import { useTranslation } from "react-i18next";
import AuditFirmsBanner from "../../assets/images/audit/audits_banner.jpg";
import SayferLogo from "../../assets/images/audit/sayfer.png";
import GingerLogo from "../../assets/images/audit/ginger_security.png";
import OmegaLogo from "../../assets/images/audit/team_omega.png";
import DcentralabLogo from "../../assets/images/audit/dcentralab.png";
import Footer from "../Footer/Footer";
import "./index.scss";

export default function AuditFirms() {
  const { t } = useTranslation();

  return (
    <div className="audit-firms">
      <div className="banner">
        <img src={AuditFirmsBanner} alt="audit firms" />
      </div>

      <div className="content">
        <div className="title">{t("AuditFirmsRoute.title")}</div>
        <div dangerouslySetInnerHTML={{ __html: t("AuditFirmsRoute.contentHtml") }} />

        <div className="firms">
          <a target="_blank" rel="noopener noreferrer" href="https://sayfer.io" className="firm">
            <img src={SayferLogo} alt="sayfer" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://gingersec.xyz/" className="firm">
            <img src={GingerLogo} alt="ginger security" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://teamomega.eth.limo/" className="firm">
            <img src={OmegaLogo} alt="team omega" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://dcentralab.com" className="firm">
            <img src={DcentralabLogo} alt="dcentralab" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
