import Mail from "../assets/icons/mail.svg";
import Call from "../assets/icons/call.svg";

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
        }
    ],
}