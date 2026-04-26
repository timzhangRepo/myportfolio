import { experience, labels } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Experience() {
  const { lang } = useLang();
  const jobs = experience[lang];
  const l = labels[lang];

  return (
    <section id="experience">
      <h2>{l.experience}</h2>
      {jobs.map((job) => (
        <div key={job.company} className="job">
          <div className="job-header">
            <span className="company">{job.company}</span>
            <span className="period">{job.period}</span>
          </div>
          <div className="job-title">{job.title} — {job.location}</div>
          {job.teams.map((team) => (
            <div key={team.name} className="team">
              <h4>{team.name}</h4>
              <ul>
                {team.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
