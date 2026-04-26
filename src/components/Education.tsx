import { education, labels } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Education() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section id="education">
      <h2>{l.education}</h2>
      {education[lang].map((edu) => (
        <div key={edu.school} className="edu-item">
          <div className="edu-header">
            <span className="school">{edu.school}</span>
            <span className="period">{edu.period}</span>
          </div>
          <div className="edu-degree">{edu.degree}</div>
          <div className="edu-gpa">GPA: {edu.gpa} — {edu.location}</div>
        </div>
      ))}
    </section>
  );
}
