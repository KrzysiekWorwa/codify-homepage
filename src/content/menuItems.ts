export interface MenuItem {
  label: string;
  href: string;
}

export const MENU: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "Oferta", href: "#offer" },
];

export const CTA: MenuItem = {
  label: "Kontakt",
  href: "#contact",
};
