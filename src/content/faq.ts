export interface FaqItem {
    q: string;
    a: string;
}
export interface FaqButton {
    href: string;
    label: string;
}
export interface FaqData {
    id: string;
    header: string;
    subHeader: string;
    description: string;
    ctaHeader: string;
    ctaDescription: string;
    button: FaqButton;
    items: FaqItem[];
}

export const FAQ_MAIN: FaqData = {
    id: "faq",
    header: "FAQ",
    subHeader: "Najczęstsze pytania",
    description: "Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przed startem współpracy.",
    ctaHeader: "Masz więcej pytań?",
    ctaDescription: "Nie znalazłeś odpowiedzi na swoje pytanie lub masz ich więcej? Napisz do nas, z przyjemnością odpowiemy na wszytskie z nich.",
    button: {
        href: "#contact",
        label: "Kontakt",
    },
    items: [
        {
            q: "Jak wyglądają kroki rozpoczęcia współpracy i proces projektowy?",
            a: "Zaczynamy od bezpłatnej konsultacji, podczas której poznajemy Twoje cele i potrzeby. Następnie ustalamy zakres prac, podpisujemy umowę i przechodzimy do realizacji. Na każdym etapie masz wgląd w postępy i możliwość zgłaszania uwag.",
        },
        {
            q: "Ile trwa realizacja strony internetowej?",
            a: "Zwykle proces zamyka się w 2–4 tygodniach. Czas zależy od skomplikowania projektu, liczby podstron oraz sprawności w dostarczeniu materiałów. Po etapie wywiadu i zebrania potrzeb, przedstawiamy Ci precyzyjny harmonogram prac.",
        },
        {
            q: "Czy pomagacie w zebraniu i przygotowaniu materiałów?",
            a: "Oczywiście. Jeśli nie posiadasz profesjonalnych zdjęć czy gotowych tekstów, przeprowadzimy Cię przez ten proces. Doradzamy, jakie treści najlepiej sprzedają w Twojej branży, a w przypadku wirtualnych spacerów i wizualizacji — precyzyjnie określamy, jakie dane techniczne będą nam potrzebne.",
        },
        {
            q: "Czy mogę zgłaszać poprawki w trakcie realizacji?",
            a: "Tak. Projekt realizujemy etapami, a każdy z nich konsultujemy z Tobą. W ramach ustalonego zakresu możesz zgłaszać uwagi i korekty."
        },
        {
            q: "Czy realizujecie zlecenia w całej Polsce?",
            a: "Strony WWW oraz wizualizacje 3D tworzymy zdalnie, współpracując z klientami z całego kraju i zagranicy. W przypadku wirtualnych spacerów 360°, dojeżdżamy bezpośrednio do Twojego obiektu po wcześniejszym ustaleniu dogodnego terminu sesji.",
        },
        {
            q: "Czym różni się wirtualny spacer 360° od galerii zdjęć?",
            a: "Zdjęcia to tylko wycinek rzeczywistości. Spacer 360° pozwala użytkownikowi na pełną interakcję, może on „chodzić” po obiekcie, rozglądać się i zaglądać w dowolny kąt. Takie doświadczenie buduje znacznie silniejsze zaufanie i realnie zwiększa liczbę rezerwacji lub zapytań ofertowych.",
        },
        {
            q: "Co jest potrzebne do stworzenia realistycznej wizualizacji 3D?",
            a: "Kluczowe są rzuty architektoniczne lub dokładne wymiary pomieszczeń/obiektu. Dodatkowo prosimy o tzw. moodboard (inspiracje materiałowe, kolory, tekstury). Jeśli projekt jest na wczesnym etapie koncepcji, pomagamy dobrać odpowiednie rozwiązania wizualne na podstawie Twoich wytycznych.",
        },
        {
            q: "Czy zajmujecie się SEO i optymalizacją szybkości strony?",
            a: "Tak, to dla nas priorytet. Każdą stronę projektujemy zgodnie z wytycznymi Core Web Vitals. Dbamy o techniczne SEO (struktura nagłówków, alt-tagi, optymalizacja obrazów), dzięki czemu Twoja witryna jest szybka i gotowa do pozycjonowania w Google od pierwszego dnia.",
        },
        {
            q: "Co jeśli potrzebuję kompleksowego rozwiązania (np. strona + spacer)?",
            a: "To nasze najczęstsze i najbardziej efektywne zlecenie. Tworzymy wtedy spójny ekosystem cyfrowy Twojej marki. Przy pakietach łączonych oferujemy dedykowane rabaty oraz gwarantujemy pełną spójność wizualną wszystkich materiałów marketingowych.",
        },
    ],
};

export const FAQ_WEB: FaqData = {
    id: "faq",
    header: "FAQ",
    subHeader: "Najczęstsze pytania",
    description: "Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przed startem współpracy.",
    ctaHeader: "Masz więcej pytań?",
    ctaDescription: "Nie znalazłeś odpowiedzi na swoje pytanie lub masz ich więcej? Napisz do nas, z przyjemnością odpowiemy na wszystkie z nich.",
    button: {
        href: "#contact",
        label: "Kontakt",
    },
    items: [
        {
            q: "Ile trwa stworzenie strony internetowej?",
            a: "Standardowy czas realizacji wynosi od 2 do 4 tygodni. Wszystko zależy od zakresu projektu, liczby podstron oraz sprawności w dostarczeniu materiałów. Po konsultacji przedstawiamy dokładny harmonogram prac.",
        },
        {
            q: "Czy strona będzie dostosowana do telefonów i tabletów?",
            a: "Tak. Każda realizacja jest w pełni responsywna, co oznacza poprawne działanie i wygląd na smartfonach, tabletach oraz komputerach.",
        },
        {
            q: "Czy zajmujecie się SEO i optymalizacją szybkości strony?",
            a: "Tak, to dla nas priorytet. Każdą stronę projektujemy zgodnie z wytycznymi Core Web Vitals. Dbamy o techniczne SEO (struktura nagłówków, alt-tagi, optymalizacja obrazów), dzięki czemu Twoja witryna jest szybka i gotowa do pozycjonowania w Google od pierwszego dnia.",
        },
        {
            q: "Czy mogę samodzielnie edytować treści na stronie?",
            a: "W zależności od projektu wdrażamy rozwiązania umożliwiające łatwą edycję treści. Jeśli zależy Ci na samodzielnym zarządzaniu stroną, dopasujemy system do Twoich potrzeb.",
        },
        {
            q: "Czy pomagacie w wyborze domeny i hostingu?",
            a: "Tak. Doradzamy w wyborze odpowiedniego hostingu, pomagamy przy konfiguracji domeny, certyfikatu SSL oraz publikacji strony.",
        },
        {
            q: "Czy strona należy w pełni do mnie po zakończeniu projektu?",
            a: "Tak. Po zakończeniu realizacji otrzymujesz pełne prawa do strony i jej kodu. Nie jesteś uzależniony od zewnętrznych platform ani abonamentów.",
        },
        {
            q: "Czy po uruchomieniu strony zapewniacie wsparcie?",
            a: "Tak. Oferujemy wsparcie techniczne, możliwość dalszej rozbudowy oraz pomoc przy aktualizacjach i optymalizacji.",
        },
    ],
};

export const FAQ_TOUR: FaqData = {
    id: "faq",
    header: "FAQ",
    subHeader: "Najczęstsze pytania",
    description: "Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przed startem współpracy.",
    ctaHeader: "Masz więcej pytań?",
    ctaDescription: "Nie znalazłeś odpowiedzi na swoje pytanie lub masz ich więcej? Napisz do nas, z przyjemnością odpowiemy na wszystkie z nich.",
    button: {
        href: "#contact",
        label: "Kontakt",
    },
    items: [
        {
            q: "Czym różni się wirtualny spacer od zwykłej galerii zdjęć?",
            a: "Spacer 360° to interaktywne doświadczenie. Użytkownik sam decyduje, gdzie patrzy i dokąd idzie. To buduje ogromne zaufanie ponieważ pokazujesz realną przestrzeń, której nie da się ukryć za kadrem zwykłego zdjęcia."
        },
        {
            q: "Jak długo trwa sesja zdjęciowa w moim obiekcie?",
            a: "W zależności od metrażu i liczby pomieszczeń, sesja trwa zazwyczaj od 1 do 3 godzin. Dbamy o to, by proces był jak najmniej uciążliwy dla bieżącego funkcjonowania Twojego biznesu."
        },
        {
            q: "Czy obiekt trzeba specjalnie przygotować do sesji?",
            a: "Tak, zalecamy uporządkowanie przestrzeni i zadbanie o detale, ponieważ kamera 360° rejestruje całe otoczenie.",
        },
        {
            q: "Ile trwa czas realizacji zlecenia na wirtualny spacer?",
            a: "Standardowo proces zajmuje od 1 do 2 tygodni, w zależności od liczby pomieszczeń i stopnia rozbudowania projektu. Po sesji zdjęciowej potrzebujemy czasu na precyzyjną postprodukcję: retusz, korekcję kolorystyczną, łączenie panoram oraz integrację interaktywnych funkcji, aby finalny spacer był płynny i dopracowany w każdym detalu.",
        },
        {
            q: "Gdzie mogę wykorzystać gotowy spacer 360°?",
            a: "Na własnej stronie www, w wizytówce Google Maps, na portalach ogłoszeniowych oraz w mediach społecznościowych."
        },
        {
            q: "Czy realizujecie zlecenia w całej Polsce?",
            a: "W przypadku wirtualnych spacerów 360°, dojeżdżamy bezpośrednio do Twojego obiektu po wcześniejszym ustaleniu szczegółów i dogodnego terminu sesji.",
        },
    ],
};

export const FAQ_GRAPHIC: FaqData = {
    id: "faq",
    header: "FAQ",
    subHeader: "Najczęstsze pytania",
    description: "Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przed startem współpracy.",
    ctaHeader: "Masz więcej pytań?",
    ctaDescription: "Nie znalazłeś odpowiedzi na swoje pytanie lub masz ich więcej? Napisz do nas, z przyjemnością odpowiemy na wszystkie z nich.",
    button: {
        href: "#contact",
        label: "Kontakt",
    },
    items: [
        {
            q: "Co jest potrzebne do wykonania wizualizacji 3D?",
            a: "Najczęściej potrzebujemy rzutów (2D), wymiarów, informacji o materiałach i kolorach oraz inspiracji (moodboard). Jeśli posiadasz model 3D, możemy go wykorzystać i przyspieszyć realizację.",
        },
        {
            q: "Ile trwa wykonanie wizualizacji 3D?",
            a: "Zwykle od kilku dni do 2 tygodni, w zależności od liczby ujęć, stopnia skomplikowania projektu i szybkości akceptacji. Po briefie przedstawiamy konkretny harmonogram.",
        },
        {
            q: "Czy mogę zgłosić poprawki do wizualizacji?",
            a: "Tak. Na każdym etapie konsultujemy postępy i wprowadzamy ustalone korekty, aby finalny efekt był zgodny z koncepcją i oczekiwaniami.",
        },
        {
            q: "Jakie rodzaje wizualizacji wykonujecie?",
            a: "Tworzymy wizualizacje wnętrz, budynków (elewacje), ujęcia inwestycji oraz koncepcje produktowe. Dobieramy styl i kadry pod cel marketingowy projektu.",
        },
        {
            q: "W jakiej jakości otrzymam finalne pliki?",
            a: "Przekazujemy gotowe rendery w wysokiej rozdzielczości, przygotowane do wykorzystania na stronie internetowej, w social mediach oraz materiałach sprzedażowych.",
        },
        {
            q: "Czy wizualizacje nadają się do kampanii reklamowych i sprzedaży?",
            a: "Tak. Wizualizacje 3D świetnie sprawdzają się w marketingu, pozwalają pokazać finalny efekt przed realizacją i przyciągają uwagę w reklamach oraz ofertach sprzedażowych.",
        },
    ],
};