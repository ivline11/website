// src/routes/Archive/[slug]/+page.server.ts
import { error } from "@sveltejs/kit";
import fs from "fs";
import matter from "gray-matter";

export const prerender = true;

export async function load({ params }: { params: { slug: string } }) {
  try {
    const file = fs.readFileSync(`src/posts/${params.slug}.md`, "utf-8");
    const { data: meta, content } = matter(file);
    return { meta, content };
  } catch {
    throw error(404, `Could not find ${params.slug}`);
  }
}
