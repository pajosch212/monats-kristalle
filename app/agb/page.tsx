import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "AGB — Monats-Kristalle" };

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen">
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen und Mitgliedschaften, die
        über monats-kristalle.de zwischen Paul Schiek (nachfolgend „Anbieter") und dir (nachfolgend
        „Mitglied") zustande kommen.
      </p>

      <h2>§ 2 Vertragsgegenstand</h2>
      <p>
        Gegenstand der Mitgliedschaft ist die regelmäßige, wiederkehrende Lieferung eines Pakets mit
        handverlesenen Kristallen und begleitenden Extras im Abstand von jeweils 28 Tagen.
      </p>

      <h2>§ 3 Vertragsschluss und Preise</h2>
      <p>
        Der erste Monat ist kostenlos (0€). Ab der zweiten Lieferung gilt der reguläre Preis von
        28,70€ inkl. Versand pro Zyklus. Mit Abschluss der Bestellung über unseren
        Zahlungsdienstleister kommt der Mitgliedschaftsvertrag zustande.
      </p>

      <h2>§ 4 Laufzeit und Kündigung</h2>
      <p>
        Die Mitgliedschaft verlängert sich automatisch um jeweils einen weiteren Zyklus (28 Tage), bis
        sie gekündigt wird. Eine Kündigung ist jederzeit zum Ende des laufenden Zyklus möglich, ohne
        Angabe von Gründen und ohne Mindestlaufzeit. Für die Kündigungsmöglichkeiten in den ersten 4
        Wochen gilt zusätzlich unsere freiwillige Bedenkzeit-Regelung, siehe{" "}
        <a href="/monats-kristalle/widerrufsrecht/">Widerrufsrecht</a>.
      </p>

      <h2>§ 5 Lieferung</h2>
      <p>
        Die Lieferung erfolgt per Post in deinen Briefkasten. Eine persönliche Anwesenheit bei
        Zustellung ist nicht erforderlich. Der Inhalt der Pakete kann von Monat zu Monat variieren.
      </p>

      <h2>§ 6 Gewinnspiel-Teilnahme</h2>
      <p>
        Aktive Mitglieder nehmen automatisch und kostenlos an einer monatlichen Verlosung um
        Einkaufsguthaben und Bonuskristalle teil. Ein Anspruch auf Teilnahme oder Gewinn besteht nicht,
        sofern die Mitgliedschaft nicht aktiv ist. Der Rechtsweg ist ausgeschlossen.
      </p>

      <h2>§ 7 Widerrufsrecht</h2>
      <p>
        Es gilt das gesetzliche Widerrufsrecht für Verbraucher. Details findest du in unserer separaten{" "}
        <a href="/monats-kristalle/widerrufsrecht/">Widerrufsbelehrung</a>.
      </p>

      <h2>§ 8 Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den
        Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet der Anbieter nur
        bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße
        Durchführung des Vertrags überhaupt erst ermöglicht.
      </p>

      <h2>§ 9 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sollte
        eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
        unberührt.
      </p>
    </LegalPage>
  );
}
