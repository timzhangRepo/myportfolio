import { labels } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Projects() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section id="projects">
      <h2>{l.projects}</h2>
      <div className="project-placeholder">
        <p>{l.projectPlaceholder}</p>
      </div>
    </section>
  );
}
