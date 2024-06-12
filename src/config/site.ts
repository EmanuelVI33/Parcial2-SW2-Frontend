export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Generador de contenido",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
    // {
    //   title: "Categorías",
    //   href: "/categories",
    // },
    {
      title: "Presentadores",
      href: "/presenters",
    },
    {
      title: "Proyectos",
      href: "/projects",
    },
    // {
    //   title: "Productos",
    //   href: "/products",
    // },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}