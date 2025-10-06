import { json } from "@sveltejs/kit";
import matter from "gray-matter";
import type { Post } from "$lib/types";

function getPosts() {
  const posts: Post[] = [];
  const paths = import.meta.glob("/src/posts/*.md", { query: "?raw", import: "default", eager: true });

  console.log("Paths:", paths);

  for (const path in paths) {
    const file = paths[path] as string;
    const { data: metadata, content } = matter(file);

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

  posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return posts;
}

export const prerender = true;

export async function GET() {
  const posts = getPosts();
  return json(posts);
}
