import { useTranslation } from "react-i18next";
import { PROJECTS_ON_BOARD } from "./projectsOnBoard";
import './index.scss';

export default function Projects() {
  const { t } = useTranslation();

  const projactsElements = PROJECTS_ON_BOARD.map(project => {
    return (
      <div key={project.name} className="project-element-wrapper">
        <img src={require(`../../../../assets/icons/projects/${project.icon}.svg`).default} className="project-symbol" alt={project.name} />
        <span onClick={() => window.open(project.link, '_blank')} className="project-name">{project.name}</span>
      </div>
    )
  })

  return (
    <div className="section">
      <div className="section-content projects-wrapper">
        <div className="projects-title">{t("Landing.Projects.title")}</div>
        <div className="projects-elements-container">
          {projactsElements}
        </div>
      </div>
    </div>
  )
}
