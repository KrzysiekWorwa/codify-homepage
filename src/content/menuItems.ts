export interface MenuItem {
  label: string;
  href: string;
}

export const MENU: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "Usługi", href: "#services" },
  { label: "O nas", href: "#about" },
];

export const CTA: MenuItem = {
  label: "Kontakt",
  href: "#contact",
};
