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
    header: "Zalety",
    subHeader: "Dlaczego warto?",
    description: "Wirtualny spacer to dziś coś więcej niż dodatek do oferty. To przemyślane narzędzie komunikacji, które odpowiada na oczekiwania współczesnych klientów. Sprawdź, co zyskujesz, wdrażając to rozwiązanie w swojej ofercie.",
    image: img1,
    items: [
        {
            title: "Wyróżniasz się spośród konkurencji",
            description:
                "Większość ofert nadal ogranicza się do zwykłych zdjęć, więc Twoja prezentacja od razu przyciągnie uwagę klientów.",
            number: "01",
        },
        {
            title: "Budujesz zaufanie i profesjonalny wizerunek",
            description:
                "Pokazując nieruchomość w pełni, dasz klientowi pewność co do jakości i wyglądu miejsca.",
            number: "02",
        },
        {
            title: "Klienci „wchodzą” do Twojej przestrzeni",
            description:
                "Dzięki pełnemu doświadczeniu 360°, można swobodnie zwiedzić obiekt z dowolnego miejsca i o dowolnej porze.",
            number: "03",
        },
        {
            title: "Pomagasz klientowi „poczuć” klimat miejsca",
            description:
                "Wirtualny spacer pozwala lepiej wyobrazić sobie układ, wielkość i charakter apartamentu, co zwiększa szansę na rezerwację.",
            number: "04",
        },
    ],
};