import { useLang } from "../context/LanguageContext";

export default function Blog() {
  const { lang } = useLang();

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h2>{lang === "en" ? "Blog" : "博客"}</h2>
        <p className="blog-desc">
          {lang === "en"
            ? "Notes and insights on software engineering, AI, and system design."
            : "关于软件工程、AI 与系统设计的思考与笔记。"}
        </p>
      </div>
      <iframe
        src="https://fast-pelican-64d.notion.site/ebd//379d70b722d380ca9474c5f9a6fdbf98"
        width="100%"
        height="800"
        frameBorder="0"
        allowFullScreen
        title="Blog"
      />
    </div>
  );
}
