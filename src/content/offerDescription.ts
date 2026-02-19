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

export const DESCRIPTION_TOUR: DescriptionData = {
    id: "service",
    header: "O usłudze",
    subHeader: "Czym dokładnie jest wirtualny spacer?",
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
