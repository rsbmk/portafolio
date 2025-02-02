import type { AstroInstance, MarkdownInstance } from "astro";

/**
 * Returns the sorted posts with their icons.
 * @param {Object} opts - options
 * @param {MarkdownInstance[]} opts.posts - posts to sort
 * @param {AstroInstance[]} opts.icons - icons to find the matching icon
 * @returns {MarkdownInstance[]} sorted posts with their icons
 */
export function getSortedPostsWithIcons({ posts, icons }: {
  posts: MarkdownInstance<Record<string, any>>[];
  icons: AstroInstance[];
}): MarkdownInstance<Record<string, any>>[] {
  return posts
    .sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf())
    .map((post) => {
      const icon = icons.find((icon) => icon.default.name === post.frontmatter.icon);
      return {
        ...post,
        frontmatter: {
          ...post.frontmatter,
          icon: icon?.default,
        },
      };
    });
}
