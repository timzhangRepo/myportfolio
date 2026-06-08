import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { posts } from "../data/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function BlogPost() {
  const { slug } = useParams();
  const isMobile = useIsMobile();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-page">
        <p>Post not found. <Link to="/blog">← Back</Link></p>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Link to="/blog" className="back-link">← Blog</Link>
      <div className="post-header">
        <div className="post-meta">{formatDate(post.date)}</div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-desc">{post.description}</p>
      </div>

      {isMobile ? (
        <a
          href={post.notionEmbedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="notion-open-card"
        >
          <span className="notion-open-icon">📝</span>
          <span className="notion-open-text">Open in Notion</span>
          <span className="notion-open-arrow">→</span>
        </a>
      ) : (
        <div className="iframe-wrapper">
          <iframe
            src={post.notionEmbedUrl}
            width="100%"
            height="900"
            frameBorder="0"
            allowFullScreen
            title={post.title}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
