import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams();
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
      <iframe
        src={post.notionEmbedUrl}
        width="100%"
        height="900"
        frameBorder="0"
        allowFullScreen
        title={post.title}
      />
    </div>
  );
}
