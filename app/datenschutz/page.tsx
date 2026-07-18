import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Datenschutz — Monats-Kristalle" };

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
      <p>
        Paul Schiek
        <br />
        Praunheimer Landstraße 152
        <br />
        60488 Frankfurt am Main
        <br />
        E-Mail: <a href="mailto:monatskristall@gmail.com">monatskristall@gmail.com</a>
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco,
        CA 94107, USA) gehostet. Beim Aufruf der Seite erhebt GitHub automatisch technische
        Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs), die zur Bereitstellung der
        Website erforderlich sind. Näheres findest du in der{" "}
        <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>

      <h2>3. Zahlungsabwicklung</h2>
      <p>
        Für die Zahlungsabwicklung nutzen wir den Dienstleister Stripe (Stripe Payments Europe, Ltd.,
        1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland). Bei einer Bestellung
        übermitteln wir die zur Zahlungsabwicklung erforderlichen Daten (z. B. Name, Adresse,
        Zahlungsinformationen) an Stripe. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO (Vertragserfüllung). Weitere Informationen findest du in der{" "}
        <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Stripe
        </a>
        .
      </p>

      <h2>4. Bestell- und Versanddaten</h2>
      <p>
        Zur Abwicklung deiner Mitgliedschaft und zum Versand deiner Pakete verarbeiten wir Name,
        Lieferadresse und E-Mail-Adresse. Diese Daten werden ausschließlich zur Vertragserfüllung
        genutzt und nicht an Dritte außerhalb der Versand- und Zahlungsabwicklung weitergegeben.
      </p>

      <h2>5. Newsletter</h2>
      <p>
        Auf unserer Website kannst du dich für unseren Newsletter anmelden. Aktuell ist diese Funktion
        noch nicht an einen Versanddienst angebunden — es findet keine automatisierte Speicherung
        oder Versendung von E-Mails über das Formular statt.
      </p>

      <h2>6. Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
        deiner personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung und ein
        Recht auf Datenübertragbarkeit. Wende dich hierfür an die oben genannte Kontaktadresse.
      </p>

      <h2>7. Beschwerderecht</h2>
      <p>
        Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung deiner
        personenbezogenen Daten durch uns zu beschweren.
      </p>
    </LegalPage>
  );
}
