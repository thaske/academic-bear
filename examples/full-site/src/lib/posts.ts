import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

type GetSortedPostsOptions = {
  draft?: boolean;
};

export async function getSortedPosts({
  draft = import.meta.env.DEV,
}: GetSortedPostsOptions = {}): Promise<BlogPost[]> {
  return (
    await getCollection("blog", (post) =>
      draft && import.meta.env.DEV ? true : !post.data.draft,
    )
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getAllTags(posts: BlogPost[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort();
}
