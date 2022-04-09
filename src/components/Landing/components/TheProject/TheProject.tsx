
import { useTranslation } from "react-i18next";
import './index.scss';


export default function TheProject() {
  const { t } = useTranslation();


  return (
    <div className="section the-project-wrapper">
      <div className="section-content">
        <div className="section-text-wrapper">

          <div className="section-title">{t("Landing.Project.title")}</div>
          <div className="section-description">{t("Landing.Project.description")}</div>
        </div>
        <img src={require("../../../../assets/images/landing/the-project.svg").default} className="section-image" alt="the project" />
      </div>
    </div>
  )
}
