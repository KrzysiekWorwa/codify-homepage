export type PolicyItem =
    | { type: "text"; text: string }
    | { type: "list"; items: string[] };

export interface PolicySection {
    id?: string;
    title: string;
    items: PolicyItem[];
}

export interface PolicyDocument {
    id: string;
    title: string;
    sections: PolicySection[];
}

export const PRIVACY_POLICY_PL: PolicyDocument = {
    id: "policy",
    title: "Polityka prywatności",
    sections: [
        {
            title: "1. Informacje ogólne",
            items: [
                { type: "text", text: "1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem: www.codifystudio.pl" },
                { type: "text", text: "2. Operatorem serwisu oraz Administratorem danych osobowych jest: Codify Krzysztof Worwa" },
                { type: "text", text: "3. Adres kontaktowy poczty elektronicznej operatora: codify.kontakt@gmail.com" },
                { type: "text", text: "4. Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie." },
                {
                    type: "text",
                    text: "5. Serwis wykorzystuje dane osobowe w następujących celach:",
                },
                {
                    type: "list",
                    items: [
                        "Prowadzenie newslettera",
                        "Obsługa zapytań przez formularz",
                        "Realizacja zamówionych usług",
                        "Prezentacja oferty lub informacji",
                    ],
                },
                {
                    type: "text",
                    text: "6. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:",
                },
                {
                    type: "list",
                    items: [
                        "Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.",
                        "Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).",
                    ],
                },
            ],
        },

        {
            title: "2. Wybrane metody ochrony danych stosowane przez Operatora",
            items: [
                {
                    type: "text",
                    text: "1. Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.",
                },
                { type: "text", text: "2. Operator okresowo zmienia swoje hasła administracyjne." },
                { type: "text", text: "3. W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa." },
                {
                    type: "text",
                    text: "4. Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.",
                },
            ],
        },

        {
            title: "3. Hosting",
            items: [
                { type: "text", text: "1. Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: cyberFolks.pl" },
            ],
        },

        {
            title: "4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych",
            items: [
                {
                    type: "text",
                    text: "1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:",
                },
                {
                    type: "list",
                    items: [
                        "firma hostingowa na zasadzie powierzenia",
                        "upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony",
                    ],
                },
                {
                    type: "text",
                    text: "2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.",
                },
                {
                    type: "text",
                    text: "3. Przysługuje Ci prawo żądania od Administratora:",
                },
                {
                    type: "list",
                    items: [
                        "dostępu do danych osobowych Ciebie dotyczących",
                        "ich sprostowania",
                        "usunięcia",
                        "ograniczenia przetwarzania",
                        "oraz przenoszenia danych",
                    ],
                },
                {
                    type: "text",
                    text: "4. Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.",
                },
                {
                    type: "text",
                    text: "5. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.",
                },
                {
                    type: "text",
                    text: "6. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.",
                },
                {
                    type: "text",
                    text: "7. W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.",
                },
                {
                    type: "text",
                    text: "8. Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.",
                },
            ],
        },

        {
            title: "5. Informacje w formularzach",
            items: [
                { type: "text", text: "1. Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane." },
                { type: "text", text: "2. Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP)." },
                { type: "text", text: "3. Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz." },
                { type: "text", text: "4. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy." },
            ],
        },

        {
            title: "6. Logi Administratora",
            items: [
                { type: "text", text: "1. Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem." },
            ],
        },

        {
            title: "7. Istotne techniki marketingowe",
            items: [
                {
                    type: "text",
                    text: "1. Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/",
                },
                {
                    type: "text",
                    text: "2. Operator stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów reklamowych do zachowania użytkownika na stronie, co może dawać złudzenie, że dane osobowe użytkownika są wykorzystywane do jego śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych danych osobowych od Operatora do operatorom reklam. Technologicznym warunkiem takich działań jest włączona obsługa plików cookie.",
                },
                {
                    type: "text",
                    text: "3. Operator stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.",
                },
                {
                    type: "text",
                    text: "4. Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez tworzenie map ciepła oraz nagrywanie zachowania na stronie. Te informacje są anonimizowane zanim zostaną przesłane do operatora usługi tak, że nie wie on jakiej osoby fizycznej one dotyczą. W szczególności nagrywaniu nie podlegają wpisywane hasła oraz inne dane osobowe.",
                },
                {
                    type: "text",
                    text: "5. Operator stosuje rozwiązanie automatyzujące działanie Serwisu w odniesieniu do użytkowników, np. mogące przesłać maila do użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on zgodę na otrzymywanie korespondencji handlowej od Operatora.",
                },
            ],
        },

        {
            title: "8. Informacja o plikach cookies",
            items: [
                { type: "text", text: "1. Serwis korzysta z plików cookies." },
                {
                    type: "text",
                    text: "2. Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.",
                },
                { type: "text", text: "3. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu." },
                { type: "text", text: "4. Pliki cookies wykorzystywane są w następujących celach:" },
                {
                    type: "list",
                    items: [
                        "utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;",
                        "realizacji celów określonych powyżej w części “Istotne techniki marketingowe”;",
                    ],
                },
                {
                    type: "text",
                    text: "5. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.",
                },
                {
                    type: "text",
                    text: "6. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.",
                },
                { type: "text", text: "7. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu." },
                {
                    type: "text",
                    text: "8. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).",
                },
            ],
        },
    ],
};