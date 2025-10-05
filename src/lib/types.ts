// place files you want to import through the `$lib` alias in this folder.
export type Categories = "sveltekit" | "svelte";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};