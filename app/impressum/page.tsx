import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Impressum — Monats-Kristalle" };

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <p>Angaben gemäß § 5 TMG</p>

      <p>
        Paul Schiek
        <br />
        Praunheimer Landstraße 152
        <br />
        60488 Frankfurt am Main
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 015560111372
        <br />
        E-Mail: <a href="mailto:monatskristall@gmail.com">monatskristall@gmail.com</a>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Paul Schiek
        <br />
        Praunheimer Landstraße 152
        <br />
        60488 Frankfurt am Main
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
