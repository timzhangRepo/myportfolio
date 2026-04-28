import { useState } from "react";
import { profile, labels, summary } from "../data/resume";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang, toggle } = useLang();
  const l = labels[lang];
  const [expanded, setExpanded] = useState(false);

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
        <div className="contact-info">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.location[lang]}</span>
          <span>{profile.note[lang]}</span>
        </div>
        <button
          className="calendly-btn"
          onClick={() =>
            (window as any).Calendly?.initPopupWidget({
              url: "https://calendly.com/tim-zhang-f5o9/30min",
            })
          }
        >
          {lang === "en" ? "📅 Schedule a Meeting" : "📅 预约会议"}
        </button>
      </div>
      <p className="summary">
        {expanded ? summary[lang] : summary[lang].split(".")[0] + "."}
        {" "}
        <button className="read-more" onClick={() => setExpanded(!expanded)}>
          {expanded
            ? (lang === "en" ? "Show less" : "收起")
            : (lang === "en" ? "Read more" : "展开")}
        </button>
      </p>
    </section>
  );
}
