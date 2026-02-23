export interface DescriptionBullet {
    title: string;
    text: string;
}

export interface DescriptionData {
    id: string;
    header: string;
    subHeader: string;
    description: string;
    listHeader: string;
    bullets: DescriptionBullet[];
}

export const DESCRIPTION_WEB: DescriptionData = {
    id: "service",
    header: "O usłudze",
    subHeader: "Tworzenie stron internetowych",
    description:
        "Strona internetowa to fundament marketingu online, miejsce, do którego prowadzą reklamy, media społecznościowe i Google. Jest głównym źródłem informacji o Twojej firmie i miejscem, gdzie klient podejmuje decyzję o kontakcie lub współpracy. W internecie pierwsze wrażenie ma kluczowe znaczenie dlatego projektujemy i tworzymy nowoczesne strony internetowe, które łączą estetykę z funkcjonalnością i realnym wsparciem sprzedaży. Każdy projekt powstaje indywidualnie, bez gotowych szablonów, w oparciu o potrzeby marki, grupę docelową oraz cele biznesowe. Strony są w pełni responsywne, zoptymalizowane pod kątem szybkości działania i SEO, dzięki czemu nie tylko świetnie wyglądają, ale również są widoczne w wyszukiwarkach. Dbamy o przejrzystą strukturę, intuicyjną nawigację oraz przemyślany układ treści, aby użytkownik w naturalny sposób przechodził od pierwszego wejścia do kontaktu lub zakupu. To nowoczesne narzędzie, które buduje wizerunek, wzmacnia wiarygodność i pomaga rozwijać biznes online.",
    listHeader: "Jak to działa w praktyce?",
    bullets: [
        {
            title: "Indywidualny projekt",
            text: "Strona to wizytówka Twojej marki w internecie, dlatego każda realizacja powstaje od podstaw z uwzględnieniem identyfikacji wizualnej, branży i celów biznesowych. Dbamy o detale, estetykę i spójność, które budują zaufanie oraz profesjonalny wizerunek.",
        },
        {
            title: "Szybkość i optymalizacja",
            text: "Strona jest zoptymalizowana pod kątem wydajności oraz SEO, co wpływa na lepszą widoczność w Google i wyższą konwersję.",
        },
        {
            title: "Responsywność",
            text: "Projekt dopasowany do każdego urządzenia – smartfona, tabletu i komputera – z zachowaniem pełnej funkcjonalności.",
        },
        {
            title: "Kompleksowa realizacja",
            text: "Od analizy potrzeb, przez projekt graficzny, aż po wdrożenie i publikację – cały proces realizowany jest w sposób uporządkowany i transparentny.",
        }
    ],
};

export const DESCRIPTION_TOUR: DescriptionData = {
    id: "service",
    header: "O usłudze",
    subHeader: "Czym jest wirtualny spacer?",
    description:
        "To interaktywna prezentacja, która pozwala użytkownikowi eksplorować przestrzeń fizyczną tak, jakby był w niej obecny, ale z poziomu komputera, telefonu komórkowego lub VR. Opiera się na wysokiej jakości zdjęciach sferycznych 360°, które są ze sobą płynnie połączone, umożliwiając swobodne przechodzenie z pomieszczenia do pomieszczenia oraz rozglądanie się w dowolnym kierunku. Technologia ta znajduje zastosowanie m.in. w branży nieruchomości, hotelarstwie, turystyce czy marketingu, pozwalając w realistyczny sposób zaprezentować wnętrza i obiekty. Wirtualny spacer oferuje interaktywne punkty z dodatkowymi informacjami, zdjęciami lub materiałami wideo, tworząc angażującą i nowoczesną formę prezentacji. To skuteczny sposób, by pokazać więcej niż zwykłe zdjęcia, budować zaufanie i podkreślić profesjonalny charakter oferty.",
    listHeader: "Jak to działa w praktyce?",
    bullets: [
        {
            title: "Pełna swoboda",
            text: "Klient sam decyduje, gdzie chce pójść i na co patrzeć. To nie jest film, który narzuca tempo, to cyfrowe zwiedzanie bez ograniczeń.",
        },
        {
            title: "Dostępność 24/7",
            text: "Nieruchomość dostępna dla zwiedzających o każdej porze dnia i nocy.",
        },
        {
            title: "Realne odwzorowanie przestrzeni",
            text: "Klient widzi rzeczywisty układ pomieszczeń, proporcje i detale, co eliminuje nieporozumienia i buduje większe zaufanie."
        },
        {
            title: "Wieloplatformowość",
            text: "Spacer można uruchomić na smartfonie, tablecie, komputerze, a nawet w goglach VR.",
        },
    ],
};

export const DESCRIPTION_GRAPHIC: DescriptionData = {
    id: "service",
    header: "O usłudze",
    subHeader: "Wizualizacje 3D",
    description:
        "Wizualizacje 3D to fotorealistyczna prezentacja projektów architektonicznych, wnętrz oraz koncepcji produktowych jeszcze przed ich realizacją. To skuteczne narzędzie sprzedaży i marketingu, które pozwala zaprezentować inwestycję w atrakcyjnej, dopracowanej formie. Tworzymy realistyczne obrazy z dbałością o światło, materiały i detale, dzięki czemu odbiorca może zobaczyć projekt tak, jakby już istniał. Rozwiązanie to znajduje zastosowanie w branży deweloperskiej, architektonicznej oraz marketingowej, pomagając budować zainteresowanie i zaufanie jeszcze przed wprowadzeniem produktu na rynek.",
    listHeader: "Jak to działa w praktyce?",
    bullets: [
        {
            title: "Analiza projektu",
            text: "Na podstawie rzutów architektonicznych, wymiarów oraz wytycznych stylistycznych opracowujemy koncepcję wizualną dopasowaną do charakteru projektu.",
        },
        {
            title: "Modelowanie 3D",
            text: "Tworzymy trójwymiarowy model obiektu, przestrzeni lub budynku, odwzorowując proporcje, materiały i układ zgodnie z dokumentacją techniczną.",
        },
        {
            title: "Fotorealistyczne renderowanie",
            text: "Dbamy o realistyczne oświetlenie, tekstury i detale, aby wizualizacja wyglądała jak profesjonalna fotografia gotowego obiektu.",
        },
        {
            title: "Gotowe materiały marketingowe",
            text: "Otrzymujesz wysokiej jakości wizualizacje, które możesz wykorzystać na stronie internetowej, w materiałach sprzedażowych oraz kampaniach reklamowych.",
        }
    ],
};
