import type { ImageMetadata } from "astro";
import img1 from "../assets/images/webrealization.webp";
import img2 from "../assets/images/portfolio/niedzica_4.webp";
import img3 from "../assets/images/background/3d-background.webp";

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

export const REALIZATION_WEB: RealizationData = {
    id: "process",
    header: "Realizacja",
    subHeader: "Jak przebiega realizacja",
    description:
        "Tworzenie strony internetowej to uporządkowany proces, od poznania Twoich potrzeb, przez projekt graficzny i kodowanie, aż po publikację. Dzięki temu masz pełną kontrolę nad efektem i pewność, że strona będzie szybka, dopracowana i gotowa do działania.",
    image: img1,
    items: [
        {
            title: "Konsultacja i analiza",
            description:
                "Zaczynamy od rozmowy o Twojej branży, ofercie i celach strony. Ustalamy strukturę, funkcje, styl oraz zakres prac. Na tym etapie zbieramy materiały i proponujemy najlepsze rozwiązania.",
            number: "01",
        },
        {
            title: "Projekt graficzny (UI/UX)",
            description:
                "Przygotowujemy indywidualny projekt wyglądu strony, układ sekcji, typografię, kolory i elementy wizualne. Dbamy o czytelność, spójność z marką oraz wygodę użytkownika na telefonie i komputerze.",
            number: "02",
        },
        {
            title: "Kodowanie i wdrożenie",
            description:
                "Na podstawie zaakceptowanego projektu przystępujemy do kodowania strony od zera, tworząc każdy element indywidualnie. Wdrażamy animacje i funkcje ustalone na starcie oraz dbamy o czysty kod, szybkość działania i poprawną strukturę pod SEO.",
            number: "03",
        },
        {
            title: "Testy i publikacja",
            description:
                "Sprawdzamy działanie strony na różnych urządzeniach i przeglądarkach, optymalizujemy wydajność oraz dopracowujemy szczegóły. Po finalnej konsultacji i akceptacji uruchamiamy stronę online.",
            number: "04",
        },
    ],
};

export const REALIZATION_TOUR: RealizationData = {
    id: "process",
    header: "Realizacja",
    subHeader: "Jak przebiega realizacja",
    description: "Wirtualny spacer to dziś coś więcej niż dodatek do oferty. To przemyślane narzędzie komunikacji, które odpowiada na oczekiwania współczesnych klientów. Sprawdź, co zyskujesz, wdrażając to rozwiązanie w swojej ofercie.",
    image: img2,
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

export const REALIZATION_GRAPHIC: RealizationData = {
    id: "process",
    header: "Realizacja",
    subHeader: "Jak przebiega realizacja",
    description:
        "Wizualizacje 3D powstają w oparciu o dokumentację i jasno określone cele prezentacji. Proces obejmuje przygotowanie sceny, fotorealistyczny rendering oraz poprawki, tak aby finalny efekt był spójny z projektem i gotowy do wykorzystania w marketingu.",
    image: img3,
    items: [
        {
            title: "Konsultacja i brief",
            description:
                "Zaczynamy od rozmowy o celu wizualizacji i odbiorcach. Ustalamy styl (realistyczny, premium, marketingowy), ujęcia, kadry oraz zakres prac.",
            number: "01",
        },
        {
            title: "Materiały i wytyczne",
            description:
                "Zbieramy rzuty, wymiary, modele 3D (jeśli są), moodboard oraz informacje o materiałach i kolorach. Na tej podstawie przygotowujemy koncepcję sceny i wyposażenia.",
            number: "02",
        },
        {
            title: "Modelowanie i rendering",
            description:
                "Tworzymy scenę, modelujemy obiekty 3D, ustawiamy materiały i oświetlenie oraz przygotowujemy fotorealistyczne rendery. Dbamy o proporcje, detale i klimat, aby efekt wyglądał jak fotografia.",
            number: "03",
        },
        {
            title: "Poprawki i przekazanie",
            description:
                "Wprowadzamy uzgodnione korekty, dopracowujemy detale i przygotowujemy finalne pliki w wysokiej jakości. Otrzymujesz gotowe wizualizacje do użycia na stronie, w reklamach i materiałach sprzedażowych.",
            number: "04",
        },
    ],
};