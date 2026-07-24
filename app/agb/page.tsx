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
        29,95€ inkl. Versand pro Zyklus. Mit Abschluss der Bestellung über unseren
        Zahlungsdienstleister kommt der Mitgliedschaftsvertrag zustande.
      </p>
      <p>
        Die kostenlose erste Lieferung ist auf eine Bestellung pro Person und Haushalt begrenzt.
        Bei begründetem Verdacht auf Mehrfachnutzung (z. B. wiederholte Bestellungen mit
        abweichenden Kontaktdaten an dieselbe Lieferadresse) behält sich der Anbieter vor, weitere
        Bestellungen abzulehnen oder bereits bestätigte Bestellungen zu stornieren.
      </p>

      <h2>§ 4 Laufzeit und Kündigung</h2>
      <p>
        Die Mitgliedschaft verlängert sich automatisch um jeweils einen weiteren Zyklus (28 Tage), bis
        sie gekündigt wird. Eine Kündigung ist jederzeit zum Ende des laufenden Zyklus möglich, ohne
        Angabe von Gründen und ohne Mindestlaufzeit. Für die Kündigungsmöglichkeiten in den ersten 2
        Wochen gilt zusätzlich unsere Bedenkzeit-Regelung, siehe{" "}
        <a href="/widerrufsrecht/">Widerrufsrecht</a>.
      </p>

      <h2>§ 5 Lieferung</h2>
      <p>
        Die Lieferung erfolgt per Post in deinen Briefkasten. Eine persönliche Anwesenheit bei
        Zustellung ist nicht erforderlich. Der Inhalt der Pakete kann von Monat zu Monat variieren.
        Maßgeblich für den Versand ist der Status der Mitgliedschaft zum Zeitpunkt der
        Versandvorbereitung: Wird die Mitgliedschaft vor dem tatsächlichen Versand eines Pakets
        gekündigt, entfällt der Versand dieses Pakets, da zu diesem Zeitpunkt keine aktive
        Mitgliedschaft mehr besteht. Das gesetzliche Widerrufsrecht (siehe § 9) bleibt hiervon
        unberührt.
      </p>
      <p>
        Für die korrekte und aktuelle Angabe der Lieferadresse ist das Mitglied verantwortlich.
        Kann eine Lieferung aufgrund fehlerhafter oder veralteter Adressangaben nicht zugestellt
        werden, trägt das Mitglied die Kosten eines erneuten Versands.
      </p>

      <h2>§ 6 Zahlungsausfall und Rücklastschrift</h2>
      <p>
        Schlägt eine Zahlung fehl oder wird eine bereits erfolgte Zahlung vom Mitglied ohne
        vorherigen Widerruf oder eine andere berechtigte Einwendung zurückgebucht (z. B.
        Kartenrückbuchung, Rücklastschrift), ist der Anbieter berechtigt, die Mitgliedschaft bis zum
        Ausgleich des offenen Betrags zu pausieren oder zu kündigen. Der Anbieter kann in diesem
        Fall die ihm tatsächlich entstandenen Bankgebühren sowie eine angemessene Bearbeitungspauschale
        in Rechnung stellen. Dem Mitglied bleibt der Nachweis vorbehalten, dass ein Schaden nicht
        oder in wesentlich geringerer Höhe entstanden ist.
      </p>

      <h2>§ 7 Gutscheine und Rabattcodes</h2>
      <p>
        Sofern Gutschein- oder Rabattcodes ausgegeben werden, gelten diese nur für den jeweils
        angegebenen Zeitraum und Zweck, sind nicht auf andere Personen übertragbar und grundsätzlich
        nicht mit anderen Aktionen kombinierbar, sofern nicht ausdrücklich anders angegeben. Bei
        missbräuchlicher Nutzung behält sich der Anbieter vor, die betroffene Bestellung zu
        stornieren.
      </p>

      <h2>§ 8 Gewinnspiel-Teilnahme</h2>
      <p>
        Aktive Mitglieder nehmen automatisch und kostenlos an einer monatlichen Verlosung um
        Einkaufsguthaben und Bonuskristalle teil. Ein Anspruch auf Teilnahme oder Gewinn besteht nicht,
        sofern die Mitgliedschaft nicht aktiv ist. Der Rechtsweg ist ausgeschlossen.
      </p>

      <h2>§ 9 Widerrufsrecht</h2>
      <p>
        Es gilt das gesetzliche Widerrufsrecht für Verbraucher. Details findest du in unserer separaten{" "}
        <a href="/widerrufsrecht/">Widerrufsbelehrung</a>.
      </p>

      <h2>§ 10 Haftung</h2>
      <p>
        Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den
        Vorschriften des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet der Anbieter nur
        bei Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße
        Durchführung des Vertrags überhaupt erst ermöglicht.
      </p>

      <h2>§ 11 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sollte
        eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
        unberührt.
      </p>
    </LegalPage>
  );
}
