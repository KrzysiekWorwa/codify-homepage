export interface MenuItem {
  label: string;
  href: string;
}

export interface NavData {
  homeHref?: string;
  menu: MenuItem[];
  cta?: MenuItem;
}

export const NAV_MAIN: NavData = {
  homeHref: "#home",
  menu: [
    { label: "Start", href: "#home" },
    { label: "Usługi", href: "#services" },
    { label: "O nas", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pytania", href: "#faq" },
  ],
  cta: { label: "Kontakt", href: "#contact" },
};

export const NAV_WEB: NavData = {
  homeHref: "",
  menu: [
    { label: "Strona główna", href: "" },
    { label: "Home", href: "#home" },
    { label: "Oferta", href: "#oferta" },
    { label: "Proces", href: "#proces" },
    { label: "Cennik", href: "#cennik" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Kontakt", href: "#contact" },
};

export const NAV_TOUR: NavData = {
  homeHref: "",
  menu: [
    { label: "Strona główna", href: "" },
    { label: "Start", href: "#home" },
    { label: "O usłudze", href: "#service" },
    { label: "Zalety", href: "#advantages" },
    { label: "Realizacja", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Kontakt", href: "#contact" },
};