import { useTranslation } from "react-i18next";
import { PROJECTS_ON_BOARD } from "./projectsOnBoard";
import "./index.scss";

export default function Projects() {
  const { t } = useTranslation();

  const projectsElements = PROJECTS_ON_BOARD.map((project) => {
    return (
      <div key={project.name} className="project-element-wrapper" onClick={() => window.open(project.link, "_blank")}>
        <img src={project.icon.default} className="project-symbol" title={project.name} alt={project.name} />
        {/* <span>{project.name}</span> */}
      </div>
    );
  });

  return (
    <div className="section projects-section">
      <div className="section-content projects-wrapper">
        <div className="projects-title">{t("Landing.Projects.title")}</div>
        <div className="projects-elements-container">
          <div className="projects-elements-container__slider">
            {projectsElements}
            {projectsElements}
          </div>
        </div>
      </div>
    </div>
  );
}
