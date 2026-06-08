import { Link } from "react-router-dom";
import { posts } from "../data/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h2>Blog</h2>
        <p className="blog-desc">
          Notes on software engineering, AI, and system design.
        </p>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="post-card">
            <div className="post-card-meta">{formatDate(post.date)}</div>
            <h3 className="post-card-title">{post.title}</h3>
            <p className="post-card-desc">{post.description}</p>
            <span className="post-card-read">Read →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
