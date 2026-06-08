import { NavLink } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function Nav() {
  const { lang } = useLang();

  return (
    <nav className="site-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {lang === "en" ? "Home" : "主页"}
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        {lang === "en" ? "Blog" : "博客"}
      </NavLink>
    </nav>
  );
}
