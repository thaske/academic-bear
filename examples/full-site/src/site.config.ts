import type { SiteConfig } from "@thaske/academic-bear/types";

export const site = {
  lang: "en",
  title: "Ada Research",
  description: "A small academic homepage and blog built with Academic Bear.",
  url: "https://thaske.github.io/academic-bear",
  author: "Ada Lovelace",
  email: "ada@example.com",
  social: {
    github: "https://github.com/example",
    scholar: "https://scholar.google.com/",
  },
  nav: [
    { href: "/", label: "home" },
    { href: "/blog/", label: "blog" },
  ],
  defaultImage: "/static/og-image.svg",
} satisfies SiteConfig;
