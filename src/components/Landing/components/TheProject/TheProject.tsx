
import { useTranslation } from "react-i18next";
import './index.scss';

export default function TheProject() {
  const { t } = useTranslation();

  return (
    <div className="section the-project-wrapper">
      <div className="section-content">
        <div className="section-text-wrapper">
          <div className="section-text-header-wrapper">
            <img src={require("../../../../assets/icons/landing/the-project.svg").default} className="section-header-icon" alt="the project" />
            <div className="section-header-title">{t("Landing.Project.section-title")}</div>
          </div>
          <div className="section-title">{t("Landing.Project.title")}</div>
          <div className="section-description">{t("Landing.Project.description")}</div>
          <span className="the-project-subtitle">{t("Landing.Project.sub-title-1")}</span>
          <span>{t("Landing.Project.text-1")}</span>
          <span className="the-project-subtitle">{t("Landing.Project.sub-title-2")}</span>
          <span>{t("Landing.Project.text-2")}</span>
          <span className="the-project-subtitle">{t("Landing.Project.sub-title-3")}</span>
          <span>{t("Landing.Project.text-3")}</span>
        </div>
        <img src={require("../../../../assets/images/landing/the-project.svg").default} className="section-image" alt="the project" />
      </div>
    </div>
  )
}
