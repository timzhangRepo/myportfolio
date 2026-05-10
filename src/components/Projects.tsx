import { projects, labels } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Projects() {
  const { lang } = useLang();
  const l = labels[lang];
  const list = projects[lang];

  return (
    <section id="projects">
      <h2>{l.projects}</h2>
      {list.map((project) => (
        <div key={project.name} className="project">
          <div className="project-header">
            <h3 className="project-name">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
          </div>
          <ul>
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <p className="project-stack">{project.stack}</p>
        </div>
      ))}
    </section>
  );
}
