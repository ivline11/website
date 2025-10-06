import type { Post } from "../../lib/types.ts";

export async function load(
  { fetch }: {
    fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  },
) {
  const response = await fetch("/api/posts");
  const posts: Post[] = await response.json();
  return { posts };
}