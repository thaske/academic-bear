export type NavItem = {
  href: string;
  label: string;
};

export type SocialLinks = Record<string, string>;

export type SiteConfig = {
  lang?: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email?: string;
  social?: SocialLinks;
  nav?: NavItem[];
  defaultImage?: string;
};

export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  href: string;
  authors: string[];
  venue: string;
  year: number;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  links?: PublicationLink[];
};
