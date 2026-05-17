import type { Publication } from "@thaske/academic-bear/types";

export const publications: Publication[] = [
  {
    title: "Notes on Analytical Engines and Symbolic Computation",
    href: "https://example.com/papers/analytical-engines",
    authors: ["A. Lovelace", "C. Babbage"],
    venue: "Journal of Imaginary Machines",
    year: 1843,
    description:
      "A short example publication entry showing how Academic Bear renders papers, metadata, images, and supplemental links.",
    image: {
      src: "/static/publication.svg",
      alt: "Abstract diagram of gears and computation",
    },
    links: [
      { label: "paper", href: "https://example.com/paper.pdf" },
      { label: "code", href: "https://github.com/example/analytical-engine" },
    ],
  },
];
