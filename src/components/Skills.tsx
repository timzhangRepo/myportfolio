import { skills, labels } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Skills() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section id="skills">
      <h2>{l.skills}</h2>
      {Object.entries(skills[lang]).map(([category, items]) => (
        <div key={category} className="skill-group">
          <h4>{category}</h4>
          <div className="skill-tags">
            {items.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
