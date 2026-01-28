import WebIcon from "../assets/icons/web-design.svg";
import VirtualIcon from "../assets/icons/360.svg";
import GraphicIcon from "../assets/icons/graphic-icon.svg";
import WebImage from "../assets/images/background/web-background.jpg";
import VirtualImage from "../assets/images/background/360-background.jpg";
import GraphicImage from "../assets/images/background/3d-background.jpg";

export const SERVICES = [
    {
        title: "Tworzenie stron internetowych",
        description:
            "Tworzymy nowoczesne, responsywne strony WWW, kodowane od zera, bez szablonów. Gwarancja czystego kodu, najwyższej wydajności i pełnej personalizacji dla Twojego biznesu. Pomagamy wyróżnić się w sieci, zwiększyć widoczność w Google i przyciągnąć klientów.",
        icon: WebIcon,
        bgImage: WebImage,
        href: "#web",
    },
    {
        title: "Wirtualne spacery 360°",
        description:
            "Pokaż się z zupełnie nowej perspektywy. Pozwól klientom „wejść” do Twojego obiektu jeszcze przed wizytą. To najlepszy sposób prezentacji lokalu i wyróżnienia się na tle konkurencji. Przekształć statyczną ofertę w angażujące doświadczenie. Idealne dla hoteli, domków, restauracji i biur nieruchomości.",
        icon: VirtualIcon,
        bgImage: VirtualImage,
        href: "#tour",
    },
    {
        title: "Tworzenie wizualizacji 3D",
        description:
            "Realistyczne wizualizacje wnętrz, budynków i koncepcji projektowych. Świetne narzędzie dla deweloperów, architektów i firm marketingowych. Pomagamy markom zaprezentować ich ofertę w atrakcyjnej, dopracowanej formie, zanim produkt fizycznie trafi na rynek.",
        icon: GraphicIcon,
        bgImage: GraphicImage,
        href: "#graphic",
    },
];