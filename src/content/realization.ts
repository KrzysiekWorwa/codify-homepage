import type { ImageMetadata } from "astro";
import img1 from "../assets/images/portfolio/niedzica_4.webp"

export interface RealizationItem {
    title: string;
    description: string;
    number: string;
}

export interface RealizationData {
    id: string;
    header: string;
    subHeader: string;
    description: string;
    image: ImageMetadata;
    items: RealizationItem[];
}

export const REALIZATION_TOUR: RealizationData = {
    id: "process",
    header: "Realizacja",
    subHeader: "Jak przebiega realizacja",
    description: "Wirtualny spacer to dziś coś więcej niż dodatek do oferty. To przemyślane narzędzie komunikacji, które odpowiada na oczekiwania współczesnych klientów. Sprawdź, co zyskujesz, wdrażając to rozwiązanie w swojej ofercie.",
    image: img1,
    items: [
        {
            title: "Konsultacja",
            description:
                "Rozpoczynamy od krótkiej rozmowy, podczas której poznajemy Twój obiekt, cele biznesowe oraz sposób wykorzystania wirtualnego spaceru. Doradzamy najlepsze rozwiązania i ustalamy zakres realizacji oraz termin sesji.",
            number: "01",
        },
        {
            title: "Sesja zdjęciowa",
            description:
                "W ustalonym dniu wykonujemy serię zdjęć panoramicznych 360° w Twoim obiekcie. Dbamy o odpowiednie kadry, światło i spójność ujęć, tak aby przestrzeń prezentowała się naturalnie i atrakcyjnie.",
            number: "02",
        },
        {
            title: "Postprodukcja",
            description:
                "Po sesji przystępujemy do precyzyjnej obróbki materiału. Łączymy panoramy, korygujemy kolory, retuszujemy niedoskonałości i budujemy płynny, intuicyjny spacer z elementami interaktywnymi.",
            number: "03",
        },
        {
            title: "Publikacja",
            description:
                "Gotowy spacer udostępniamy w formie linku lub integrujemy bezpośrednio z Twoją stroną internetową, wizytówką Google oraz mediami społecznościowymi. Otrzymujesz gotowe narzędzie do prezentacji swojej przestrzeni.",
            number: "04",
        },
    ],
};