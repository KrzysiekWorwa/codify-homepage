import StarIcon from "../assets/icons/tour/star.svg";
import ShieldIcon from "../assets/icons/tour/shield_with_heart.svg";
import DoorIcon from "../assets/icons/tour/door_open.svg";
import HeartIcon from "../assets/icons/tour/heart_plus.svg";
import ChartIcon from "../assets/icons/tour/chart_data.svg";
import ClockIcon from "../assets/icons/tour/clock_arrow_up.svg";
import SearchIcon from "../assets/icons/tour/person_search.svg";
import RocketIcon from "../assets/icons/tour/rocket_launch.svg";
import IndividualIcon from "../assets/icons/web/cards_star.svg";
import CodeIcon from "../assets/icons/web/code_off.svg";
import BoltIcon from "../assets/icons/web/bolt.svg";
import SlidersIcon from "../assets/icons/web/display_settings.svg";
import PersonIcon from "../assets/icons/web/shield_person.svg";
import ResponsiveIcon from "../assets/icons/web/mobile_code.svg";
import ComplexIcon from "../assets/icons/web/list_alt_check.svg";
import DiamondIcon from "../assets/icons/3d/diamond.svg";
import ShakeIcon from "../assets/icons/3d/handshake.svg";
import WarehouseIcon from "../assets/icons/3d/warehouse.svg";
import SupportIcon from "../assets/icons/3d/add_chart.svg";
import StarsIcon from "../assets/icons/3d/stars_2.svg";

type IconComponent = typeof StarIcon;

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

export const ADVANTAGES_WEB: AdvantagesData = {
    id: "advantages",
    header: "Zalety",
    subHeader: "Dlaczego warto?",
    description: "Nowoczesna strona internetowa to fundament obecności w sieci. To nie tylko estetyka, ale przede wszystkim wydajność, widoczność i realne wsparcie rozwoju biznesu. Sprawdź, co zyskujesz, wybierając indywidualnie tworzoną stronę WWW.",
    items: [
        {
            title: "Unikalny projekt bez szablonów",
            description:
                "Większość firm korzysta z gotowych szablonów, indywidualny projekt pozwala wyróżnić Twoją markę na tle konkurencji i podkreśla profesjonalizm.",
            icon: IndividualIcon,
        },
        {
            title: "Brak zbędnego kodu i wtyczek",
            description:
                "Brak zbędnych wtyczek i ciężkich motywów oznacza lepszą wydajność, stabilność oraz łatwiejszą rozbudowę w przyszłości.",
            icon: CodeIcon,
        },
        {
            title: "Maksymalna wydajność",
            description:
                "Szybsze ładowanie strony oznacza lepsze doświadczenie użytkownika i wyższe wyniki w Google PageSpeed oraz Core Web Vitals.",
            icon: BoltIcon,
        },
        {
            title: "Pełna kontrola nad projektem",
            description:
                "Każdy element od układu po animacje jest tworzony indywidualnie, bez ograniczeń narzucanych przez gotowe szablony.",
            icon: SlidersIcon,
        },
        {
            title: "Lepsza widoczność w Google",
            description:
                "Optymalizacja SEO od podstaw zwiększa szanse na wysoką pozycję w wynikach wyszukiwania i pozyskiwanie nowych klientów.",
            icon: SearchIcon,
        },
        {
            title: "Profesjonalny wizerunek online",
            description:
                "Nowoczesny design i dopracowane detale budują zaufanie oraz wiarygodność Twojej firmy w oczach klientów.",
            icon: PersonIcon,
        },
        {
            title: "Pełna responsywność",
            description:
                "Projekt dopasowany do smartfonów, tabletów i komputerów zapewnia spójne działanie na każdym urządzeniu.",
            icon: ResponsiveIcon,
        },
        {
            title: "Kompleksowa realizacja",
            description:
                "Prowadzimy projekt od pierwszej koncepcji i grafiki, przez kodowanie, aż po uruchomienie strony. Dbamy o detale, wydajność i optymalizację na każdym etapie.",
            icon: ComplexIcon,
        },
    ],
};

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
            icon: StarIcon,
        },
        {
            title: "Budujesz zaufanie i profesjonalny wizerunek",
            description:
                "Pokazując nieruchomość w pełni, dasz klientowi pewność co do jakości i wyglądu miejsca.",
            icon: ShieldIcon,
        },
        {
            title: "Klienci „wchodzą” do Twojej przestrzeni",
            description:
                "Dzięki pełnemu doświadczeniu 360°, można swobodnie zwiedzić obiekt z dowolnego miejsca i o dowolnej porze.",
            icon: DoorIcon,
        },
        {
            title: "Pomagasz klientowi „poczuć” klimat miejsca",
            description:
                "Wirtualny spacer pozwala lepiej wyobrazić sobie układ, wielkość i charakter apartamentu, co zwiększa szansę na rezerwację.",
            icon: HeartIcon,
        },
        {
            title: "Więcej zapytań i rezerwacji",
            description:
                "Badania pokazują, że ogłoszenia z wirtualnym spacerem generują większe zaangażowanie i dłuższy czas oglądania oferty.",
            icon: ChartIcon,
        },
        {
            title: "Oszczędzasz czas",
            description:
                "Wielu klientów po obejrzeniu spaceru dokładnie wie, czego się spodziewać, więc rezerwacje są bardziej świadome i pewne.",
            icon: ClockIcon,
        },
        {
            title: "Lepsza widoczność online",
            description:
                "Google promuje ogłoszenia z elementami 360°, co może zwiększyć pozycję Twojej strony lub oferty w wynikach wyszukiwania.",
            icon: SearchIcon,
        },
        {
            title: "Idealne narzędzie promocyjne",
            description:
                "Możesz wykorzystać spacer na stronie, w mediach społecznościowych lub Google Street View.",
            icon: RocketIcon,
        },
    ],
};

export const ADVANTAGES_GRAPHIC: AdvantagesData = {
    id: "advantages",
    header: "Zalety",
    subHeader: "Dlaczego warto?",
    description:
        "Wizualizacje 3D umożliwiają realistyczne odwzorowanie projektu jeszcze przed jego realizacją. Pozwalają ocenić proporcje, materiały i detale bez konieczności budowy fizycznego prototypu. To efektywne narzędzie wspierające proces sprzedaży i prezentacji inwestycji.",
    items: [
        {
            title: "Sprzedaż przed realizacją",
            description:
                "Możesz prezentować i promować inwestycję zanim fizycznie powstanie. To ogromna przewaga w branży deweloperskiej i marketingowej.",
            icon: ChartIcon,
        },
        {
            title: "Fotorealistyczna jakość",
            description:
                "Realistyczne światło, materiały i detale sprawiają, że wizualizacje wyglądają jak profesjonalne fotografie gotowego obiektu.",
            icon: DiamondIcon,
        },
        {
            title: "Silniejsze pierwsze wrażenie",
            description:
                "Dopracowana prezentacja projektu buduje profesjonalny wizerunek i zwiększa zaufanie klientów oraz inwestorów.",
            icon: ShakeIcon,
        },
        {
            title: "Lepsze zrozumienie projektu",
            description:
                "Klient może dokładnie zobaczyć układ przestrzeni, proporcje oraz charakter inwestycji, co ułatwia podjęcie decyzji.",
            icon: WarehouseIcon,
        },
        {
            title: "Skuteczne narzędzie marketingowe",
            description:
                "Wizualizacje możesz wykorzystać na stronie internetowej, w materiałach sprzedażowych, social mediach oraz kampaniach reklamowych.",
            icon: RocketIcon,
        },
        {
            title: "Wsparcie dla marketingu i sprzedaży",
            description:
                "Wizualizacje 3D stanowią silne wsparcie kampanii marketingowych, pomagając atrakcyjnie zaprezentować ofertę klientom, inwestorom oraz partnerom biznesowym.",
            icon: SupportIcon,
        },
        {
            title: "Oszczędność czasu i kosztów",
            description:
                "Możliwość wprowadzania zmian na etapie projektu eliminuje kosztowne poprawki na etapie realizacji inwestycji.",
            icon: ClockIcon,
        },
        {
            title: "Przewaga konkurencyjna",
            description:
                "Nowoczesna, realistyczna prezentacja inwestycji wyróżnia Twoją ofertę na tle konkurencji.",
            icon: StarsIcon,
        },
    ],
};