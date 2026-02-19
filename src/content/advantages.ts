import WebIcon from "../assets/icons/web-design.svg";
import VirtualIcon from "../assets/icons/360.svg";
import GraphicIcon from "../assets/icons/graphic-icon.svg";

type IconComponent = typeof WebIcon;

export interface AdvantageItem {
    title: string;
    description: string;
    icon: IconComponent;
}

export interface AdvantagesData {
    id: string;
    header: string;
    subHeader: string;
    description: string;
    items: AdvantageItem[];
}

export const ADVANTAGES_TOUR: AdvantagesData = {
    id: "advantages",
    header: "Zalety",
    subHeader: "Dlaczego warto?",
    description: "Wirtualny spacer to dziś coś więcej niż dodatek do oferty. To przemyślane narzędzie komunikacji, które odpowiada na oczekiwania współczesnych klientów. Sprawdź, co zyskujesz, wdrażając to rozwiązanie w swojej ofercie.",
    items: [
        {
            title: "Wyróżniasz się spośród konkurencji",
            description:
                "Większość ofert nadal ogranicza się do zwykłych zdjęć, więc Twoja prezentacja od razu przyciągnie uwagę klientów.",
            icon: WebIcon,
        },
        {
            title: "Budujesz zaufanie i profesjonalny wizerunek",
            description:
                "Pokazując nieruchomość w pełni, dasz klientowi pewność co do jakości i wyglądu miejsca.",
            icon: VirtualIcon,
        },
        {
            title: "Klienci „wchodzą” do Twojej przestrzeni",
            description:
                "Dzięki pełnemu doświadczeniu 360°, można swobodnie zwiedzić obiekt z dowolnego miejsca i o dowolnej porze.",
            icon: GraphicIcon,
        },
        {
            title: "Pomagasz klientowi „poczuć” klimat miejsca",
            description:
                "Wirtualny spacer pozwala lepiej wyobrazić sobie układ, wielkość i charakter apartamentu, co zwiększa szansę na rezerwację.",
            icon: GraphicIcon,
        },
        {
            title: "Więcej zapytań i rezerwacji",
            description:
                "Badania pokazują, że ogłoszenia z wirtualnym spacerem generują większe zaangażowanie i dłuższy czas oglądania oferty.",
            icon: WebIcon,
        },
        {
            title: "Oszczędzasz czas",
            description:
                "Wielu klientów po obejrzeniu spaceru dokładnie wie, czego się spodziewać, więc rezerwacje są bardziej świadome i pewne.",
            icon: VirtualIcon,
        },
        {
            title: "Lepsza widoczność online",
            description:
                "Google promuje ogłoszenia z elementami 360°, co może zwiększyć pozycję Twojej strony lub oferty w wynikach wyszukiwania.",
            icon: GraphicIcon,
        },
        {
            title: "Idealne narzędzie promocyjne",
            description:
                "Możesz wykorzystać spacer na stronie, w mediach społecznościowych lub Google Street View.",
            icon: GraphicIcon,
        },
    ],
};