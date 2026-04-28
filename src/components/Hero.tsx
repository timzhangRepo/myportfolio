import { profile, labels, summary } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang, toggle } = useLang();
  const l = labels[lang];

  return (
    <section id="hero">
      <div className="hero-top">
        <div>
          <h1>{profile.name}</h1>
          <p className="subtitle">{l.title}</p>
        </div>
        <button className="lang-toggle" onClick={toggle}>
          {lang === "en" ? "简" : "En"}
        </button>
      </div>
      <div className="contact-bar">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span>{profile.phone}</span>
        <span>{profile.location[lang]}</span>
        <span>{profile.note[lang]}</span>
      </div>
      <p className="summary">{summary[lang]}</p>
    </section>
  );
}
