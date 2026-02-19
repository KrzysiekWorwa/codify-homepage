import type { ImageMetadata } from "astro";

import img1 from "../assets/images/portfolio/djparadise.webp";
import img2 from "../assets/images/portfolio/apartament-I-013.webp";
import img3 from "../assets/images/portfolio/mill.webp";
import img4 from "../assets/images/portfolio/latarnia.webp";
import img5 from "../assets/images/portfolio/czorsztynianka_18.webp";
import img6 from "../assets/images/portfolio/Bar_2.webp";
import img7 from "../assets/images/portfolio/czorsztynianka.webp";
import img8 from "../assets/images/portfolio/apartament-II-022.webp";
import img9 from "../assets/images/portfolio/Tray.webp";
import img10 from "../assets/images/portfolio/worwa.webp";
import img11 from "../assets/images/portfolio/niedzica_4.webp";
import img12 from "../assets/images/portfolio/Peachtree_DJka.webp";

export type PortfolioItem = {
    category: string;
    title: string;
    description: string;
    href: string;
    image: ImageMetadata;
    label: string;
};

export interface PortfolioData {
    id: string;
    header: string;
    subHeader: string;
    description: string;
    items: PortfolioItem[];
}

export const PORTFOLIO_MAIN: PortfolioData = {
    id: "portfolio",
    header: "Portfolio",
    subHeader: "Tak wyróżniamy marki online",
    description:
        "Każdy projekt pokazuje to, co robimy najlepiej — zamieniamy ofertę w nowoczesne, wirtualne doświadczenie.",
    items: [
        {
            category: "WWW / Landing Page",
            title: "Dj Paradise - strona firmowa",
            description: "Nowoczesna wizytówka typu One Page, która przyciąga wzrok i skutecznie promuje ofertę muzyczną oraz portfolio",
            href: "https://djparadise.pl/",
            image: img1,
            label: "Odwiedź stronę",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Apartament Erica w Zakopanem",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Interaktywna podróż po wnętrzach, pozwalająca poczuć klimat górskiego wypoczynku",
            href: "https://tour.panoee.net/6904a27a8eb46a7072e7d4c5/6904a4578eb46a0ac6e7d4ea",
            image: img2,
            label: "Zobacz w 360°",
        },
        {
            category: "Wizualizacja 3D",
            title: "Wizualizacja konceptu marketingowego",
            description: "Fotorealistyczne przedstawienie produktu, idealne do materiałów promocyjnych i reklam",
            href: "https://www.artstation.com/artwork/qJmG2R",
            image: img3,
            label: "Odwiedź galerię",
        },
        {
            category: "WWW / Strona firmowa",
            title: "Latarnia Sukcesu - strona firmowa",
            description: "Biznesowy Landing Page, który w czytelny sposób przedstawia ofertę firmy",
            href: "https://krzysiekworwa.github.io/latarnia-sukcesu-homepage/",
            image: img4,
            label: "Odwiedź stronę",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Przystań gondoli Czorsztynianka w Czorsztynie",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Wirtualna przechadzka po malowniczej przystani, zachęcająca do odwiedzin nad zalewem",
            href: "https://tour.panoee.net/czorsztynianka-przystan-w-czorsztynie/68f69c7cd87e79ace11b41d4",
            image: img5,
            label: "Zobacz w 360°",
        },
        {
            category: "Wizualizacja 3D",
            title: "Wizualizacja układu baru na festiwal",
            description: "Przestrzenny projekt strefy eventowej ułatwiający planowanie logistyki i sprzedaży",
            href: "https://www.artstation.com/artwork/Jr1KEa",
            image: img6,
            label: "Odwiedź galerię",
        },
        {
            category: "WWW / Strona firmowa",
            title: "Czorsztynianka - strona firmowa",
            description: "Kompleksowa platforma prezentująca ofertę rejsów, noclegów i wypożyczalni sprzętu",
            href: "https://zalewczorsztynski.com/",
            image: img7,
            label: "Odwiedź stronę",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Apartament Erica Deluxe w Zakopanem",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Pozwala w pełni ukazać detale wykończenia i luksusowy charakter obiektu",
            href: "https://tour.panoee.net/69089476886027254905d2f9/6908bd6488602708a305d6a4",
            image: img8,
            label: "Zobacz w 360°",
        },
        {
            category: "Wizualizacja 3D",
            title: "Wizualizacja konceptu tacki na alkohol",
            description: "Realistyczne rendery do marketingu i przedsprzedaży",
            href: "https://www.artstation.com/artwork/P6RvOB",
            image: img9,
            label: "Odwiedź galerię",
        },
        {
            category: "WWW / Landing Page",
            title: "Wirtualne portfolio",
            description: "Wirtualna przestrzeń prezentująca przekrój umiejętności i zrealizowanych projektów",
            href: "https://krzysiekworwa.github.io/personal-homepage/",
            image: img10,
            label: "Odwiedź stronę",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Przystań gondoli Czorsztynianka w Niedzicy",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Panoramiczny widok na przystań, ułatwiający turystom orientację w terenie i poznanie infrastruktury przystani",
            href: "https://tour.panoee.net/czorsztynianka-przystan-w-niedzicy/68ff4af382d350983307778d",
            image: img11,
            label: "Zobacz w 360°",
        },
        {
            category: "Wizualizacja 3D",
            title: "Wizualizacja dj-ki na imprezę marketingową",
            description: "Koncepcyjne przedstawienie stanowiska muzycznego w nowoczesnym, eventowym stylu",
            href: "https://www.artstation.com/artwork/lGeW9O",
            image: img12,
            label: "Odwiedź galerię",
        },
    ],
};

export const PORTFOLIO_WEB: PortfolioData = {
    id: "portfolio",
    header: "Portfolio",
    subHeader: "Tak wyróżniamy marki online",
    description:
        "Każdy projekt pokazuje to, co robimy najlepiej — zamieniamy ofertę w nowoczesne, wirtualne doświadczenie.",
    items: [
        {
            category: "WWW / Landing Page",
            title: "Dj Paradise - strona firmowa",
            description: "Nowoczesna wizytówka typu One Page, która przyciąga wzrok i skutecznie promuje ofertę muzyczną oraz portfolio",
            href: "https://djparadise.pl/",
            image: img1,
            label: "Odwiedź stronę",
        },
        {
            category: "WWW / Strona firmowa",
            title: "Latarnia Sukcesu - strona firmowa",
            description: "Biznesowy Landing Page, który w czytelny sposób przedstawia ofertę firmy",
            href: "https://krzysiekworwa.github.io/latarnia-sukcesu-homepage/",
            image: img4,
            label: "Odwiedź stronę",
        },
        {
            category: "WWW / Strona firmowa",
            title: "Czorsztynianka - strona firmowa",
            description: "Kompleksowa platforma prezentująca ofertę rejsów, noclegów i wypożyczalni sprzętu",
            href: "https://zalewczorsztynski.com/",
            image: img7,
            label: "Odwiedź stronę",
        },
        {
            category: "WWW / Landing Page",
            title: "Wirtualne portfolio",
            description: "Wirtualna przestrzeń prezentująca przekrój umiejętności i zrealizowanych projektów",
            href: "https://krzysiekworwa.github.io/personal-homepage/",
            image: img10,
            label: "Odwiedź stronę",
        },
    ],
};

export const PORTFOLIO_TOUR: PortfolioData = {
    id: "portfolio",
    header: "Portfolio",
    subHeader: "Wirtualne spacery 360° w praktyce",
    description:
        "Zobacz, jak wygląda cyfrowe zwiedzanie 360° i jak nowoczesna prezentacja wpływa na odbiór nieruchomości.",
    items: [
        {
            category: "Wirtualny spacer 360°",
            title: "Apartament Erica w Zakopanem",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Interaktywna podróż po wnętrzach, pozwalająca poczuć klimat górskiego wypoczynku",
            href: "https://tour.panoee.net/6904a27a8eb46a7072e7d4c5/6904a4578eb46a0ac6e7d4ea",
            image: img2,
            label: "Zobacz w 360°",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Przystań gondoli Czorsztynianka w Czorsztynie",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Wirtualna przechadzka po malowniczej przystani, zachęcająca do odwiedzin nad zalewem",
            href: "https://tour.panoee.net/czorsztynianka-przystan-w-czorsztynie/68f69c7cd87e79ace11b41d4",
            image: img5,
            label: "Zobacz w 360°",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Apartament Erica Deluxe w Zakopanem",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Pozwala w pełni ukazać detale wykończenia i luksusowy charakter obiektu",
            href: "https://tour.panoee.net/69089476886027254905d2f9/6908bd6488602708a305d6a4",
            image: img8,
            label: "Zobacz w 360°",
        },
        {
            category: "Wirtualny spacer 360°",
            title: "Przystań gondoli Czorsztynianka w Niedzicy",
            description: "Prezentacja obiektu w 360° z nawigacją i hotspotami. Panoramiczny widok na przystań, ułatwiający turystom orientację w terenie i poznanie infrastruktury przystani",
            href: "https://tour.panoee.net/czorsztynianka-przystan-w-niedzicy/68ff4af382d350983307778d",
            image: img11,
            label: "Zobacz w 360°",
        },
    ],
};