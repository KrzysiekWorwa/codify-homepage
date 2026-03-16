export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
  mobileOnly?: boolean;
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
    {
      label: "Usługi",
      href: "#services",
      children: [
        { label: "Tworzenie stron internetowych", href: "tworzenie-stron-internetowych/" },
        { label: "Wirtualne spacery 360°", href: "wirtualny-spacer-360/" },
        { label: "Wizualizacje 3D", href: "wizualizacje-3d/" },
      ],
    },
    { label: "O nas", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pytania", href: "#faq" },
  ],
  cta: { label: "Kontakt", href: "#contact" },
};

export const NAV_SERVICE: NavData = {
  homeHref: "",
  menu: [
    { label: "Strona główna", href: "" },
    {
      label: "Usługi",
      href: "#services",
      children: [
        { label: "Tworzenie stron internetowych", href: "tworzenie-stron-internetowych/" },
        { label: "Wirtualne spacery 360°", href: "wirtualny-spacer-360/" },
        { label: "Wizualizacje 3D", href: "wizualizacje-3d/" },
      ],
    },
    { label: "Opis", href: "#service" },
    { label: "Zalety", href: "#advantages" },
    { label: "Realizacja", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pytania", href: "#faq" },
  ],
  cta: { label: "Kontakt", href: "#contact" },
};

export const NAV_POLICY: NavData = {
  homeHref: "",
  menu: [
    { label: "Strona główna", href: "" },
    { label: "Start", href: "#policy" },
  ],
};