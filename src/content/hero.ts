export interface HeroButton {
  href: string;
  label: string;
}

export interface HeroData {
  id: string;
  h1: string;
  h2: string[];
  button?: HeroButton;
  button2?: HeroButton;
}

export const HERO_MAIN: HeroData = {
  id: "home",
  h1: "Zamień swoją ofertę w wirtualne doświadczenie",
  h2: [
    "Nowoczesne strony internetowe",
    "Wirtualne spacery 360°",
    "Wizualizacje 3D",
  ],
  button: { href: "#contact", label: "Darmowa wycena" },
  button2: { href: "#services", label: "Usługi" },
};

export const HERO_WEB: HeroData = {
  id: "home",
  h1: "Tworzenie stron internetowych",
  h2: ["Szybkość", "SEO", "Nowoczesny design"],
  button: { href: "#contact", label: "Darmowa wycena" },
  button2: { href: "#service", label: "Zobacz ofertę" },
};

export const HERO_TOUR: HeroData = {
  id: "home",
  h1: "Interaktywny wirtualny spacer 360°",
  h2: ["Wyróżnij swoją ofertę", "Zamień oglądanie w doświadczenie", "Nowy wymiar prezentacji"],
  button: { href: "#contact", label: "Darmowa wycena" },
  button2: { href: "#service", label: "Szczegóły" },
};