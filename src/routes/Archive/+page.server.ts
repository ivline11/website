import type { Post } from "../../lib/types.ts";
import matter from "gray-matter";

export const prerender = true;

export async function load() {
  const posts: Post[] = [];

  const paths = import.meta.glob("/src/posts/*.md", { eager: true, query: "?raw", import: "default" });

  for (const path in paths) {
    const file = paths[path] as string;
    const { data: metadata } = matter(file);

    if (metadata.published) {
      const slug = path.split("/").pop()?.replace(".md", "");
      posts.push({
        title: metadata.title,
        description: metadata.description,
        date: metadata.date,
        categories: metadata.categories || [],
        slug: slug || "",
        published: true,
      });
    }
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}