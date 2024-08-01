export type SiteConfig = typeof siteConfig;

export type NavItem = {
  label: string;
  href: "/app" | "/app/tickets" | "/app/favorites" | "/app/profile";
};

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/app",
    },
    {
      label: "Tickets",
      href: "/app/tickets",
    },
    {
      label: "Favorites",
      href: "/app/favorites",
    },
    {
      label: "My profile",
      href: "/app/profile",
    },
  ] as NavItem[],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
