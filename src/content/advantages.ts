import StarIcon from "../assets/icons/tour/star.svg";
import ShieldIcon from "../assets/icons/tour/shield_with_heart.svg";
import DoorIcon from "../assets/icons/tour/door_open.svg";
import HeartIcon from "../assets/icons/tour/heart_plus.svg";
import ChartIcon from "../assets/icons/tour/chart_data.svg";
import ClockIcon from "../assets/icons/tour/clock_arrow_up.svg";
import SearchIcon from "../assets/icons/tour/person_search.svg";
import RocketIcon from "../assets/icons/tour/rocket_launch.svg";

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