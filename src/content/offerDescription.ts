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
        "To interaktywna prezentacja nieruchomości złożona z serii wysokiej jakości zdjęć sferycznych. Zdjęcia te są ze sobą połączone w taki sposób, aby użytkownik mógł płynnie przechodzić z pokoju do pokoju, rozglądać się w górę, w dół i wokół własnej osi. To nowoczesny sposób, by pokazać więcej niż zwykłe zdjęcia, zbudować zaufanie i profesjonalny wizerunek Twojej oferty.",
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
