export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  notionEmbedUrl: string;
}

export const posts: Post[] = [
  {
    slug: "ai-engineering-notes",
    title: "AI Engineering Notes",
    date: "2026-06-07",
    description:
      "Personal notes on RAG pipelines, LLM architecture, agentic systems, and applied AI in production.",
    notionEmbedUrl:
      "https://fast-pelican-64d.notion.site/ebd//379d70b722d380ca9474c5f9a6fdbf98",
  },
];
