// src/routes/Archive/[slug]/+page.server.ts
import { error } from "@sveltejs/kit";
import matter from "gray-matter";

export async function load({ params }: { params: { slug: string } }) {
  // Use Vite's import.meta.glob to load markdown as raw text in a server context.
  const modules = import.meta.glob("/src/posts/*.md", { eager: true, query: "?raw", import: "default" });
  const key = `/src/posts/${params.slug}.md`;

  const file = modules[key] as string | undefined;
  if (!file) {
    throw error(404, `Could not find ${params.slug}`);
  }

  const { data: meta, content } = matter(file);
  return { meta, content };
}
