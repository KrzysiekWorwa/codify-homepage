import Mail from "../assets/icons/mail.svg";
import Call from "../assets/icons/call.svg";
import Info from "../assets/icons/chat_info.svg";

export const CONTACT = {
    id: "contact",
    header: "Kontakt",
    subHeader: "Skontaktuj się z nami",
    description: "Jesteśmy gotowi, by przekuć Twoją wizję w rzeczywistość. Napisz do nas i sprawdź, co możemy razem zbudować.",
    contactData: [
        {
            icon: Mail,
            type: "email",
            head: "Email",
            text: "Napisz do nas",
            contact: "codify.kontakt@gmail.com",
        },
        {
            icon: Call,
            type: "phone",
            head: "Telefon",
            text: "Zadzwoń do nas",
            contact: "+48 504 413 824",
        },
    ],
}

export const COMPANY_DATA = [
    {
        icon: Info,
        head: "Dane kontaktowe",
        name: "Codify - tworzenie stron internetowych i wirtualnych spacerów 360°",
        street: "ul. gen. Władysława Sikorskiego 1/39",
        city: "34-400 Nowy Targ",
        nip: " NIP: 7352932829",
    }
];