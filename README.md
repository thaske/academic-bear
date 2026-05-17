# Academic Bear

Reusable Bear-style Astro blog components, layouts, CSS, and starter assets.

## Install

```sh
bun add github:thaske/academic-bear
```

For local development next to a consuming site:

```sh
bun add ../academic-bear
```

## Use in an Astro blog

Create your site config:

```ts
// src/site.config.ts
import type { SiteConfig } from "@thaske/academic-bear/types";

export const site = {
  lang: "en",
  title: "Your Name",
  description: "A personal blog about projects, notes, and ideas.",
  url: "https://example.com",
  author: "Your Name",
  email: "you@example.com",
  social: {
    github: "https://github.com/you",
  },
  nav: [{ href: "/blog/", label: "blog" }],
} satisfies SiteConfig;
```

Import layouts/components from the package:

```astro
---
import SiteLayout from "@thaske/academic-bear/layouts/SiteLayout.astro";
import { site } from "@/site.config";
---

<SiteLayout site={site} title={site.title}>
  <p>Hello.</p>
</SiteLayout>
```

For posts:

```astro
---
import BlogPost from "@thaske/academic-bear/layouts/BlogPost.astro";
import { site } from "@/site.config";
---

<BlogPost site={site} title="Post" description="Example" pubDate={new Date()}>
  <p>Post body.</p>
</BlogPost>
```

## Included exports

- `layouts/SiteLayout.astro`
- `layouts/BlogPost.astro`
- `components/Head.astro`
- `components/PostList.astro`
- `components/PublicationList.astro`
- `components/HeaderLink.astro`
- `components/UpvoteButton.astro`
- `styles/global.css`
- `types`

Copy `public/` into your site if you want the included favicon and placeholder images.
