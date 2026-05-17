# Academic Bear full-site example

A complete Astro site using Academic Bear from the repository root.

## Run it

```sh
cd examples/full-site
npm install
npm run dev
```

## Check and build

```sh
npm run check
npm run build
```

## GitHub Pages

The repository includes `.github/workflows/deploy-example.yml`, which builds this example and deploys it to GitHub Pages on pushes to `master`.

In GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

This example includes:

- Site config in `src/site.config.ts`
- Content collection setup in `src/content.config.ts`
- Homepage with profile and publications
- Blog index with tag filtering
- Blog post pages
- RSS feed at `/rss.xml`
- Sitemap integration
- Local SVG assets in `public/`
