import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Widerrufsrecht — Monats-Kristalle" };

export default function WiderrufsrechtPage() {
  return (
    <LegalPage title="Widerrufsrecht">
      <h2>Gesetzliches Widerrufsrecht</h2>
      <p>
        Verbraucher haben ein Widerrufsrecht von 14 Tagen. Verbraucher ist jede natürliche Person, die
        ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
        selbständigen beruflichen Tätigkeit zugerechnet werden können.
      </p>

      <p>
        Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem du oder ein von dir benannter Dritter,
        der nicht der Beförderer ist, die Waren in Besitz genommen hast bzw. hat.
      </p>

      <p>
        Um dein Widerrufsrecht auszuüben, musst du uns (Paul Schiek, Praunheimer Landstraße 152, 60488
        Frankfurt am Main, E-Mail: monatskristall@gmail.com) mittels einer eindeutigen Erklärung (z. B.
        ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu
        widerrufen, informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung
        über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
      </p>

      <h2>Folgen des Widerrufs</h2>
      <p>
        Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten
        haben, unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die
        Mitteilung über deinen Widerruf bei uns eingegangen ist. Für diese Rückzahlung verwenden wir
        dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei
        denn, mit dir wurde ausdrücklich etwas anderes vereinbart.
      </p>

      <h2>Widerrufsrecht bei Verträgen über die Lieferung von Waren, die nicht in einem
      Fernabsatzvertrag erwähnt sind</h2>
      <p>
        Bei einer Kündigung deiner Mitgliedschaft erhältst du keine weiteren Pakete mehr. Bereits
        gelieferte Pakete sind hiervon nicht betroffen — ein Rückversand ist nur im Rahmen des
        gesetzlichen Widerrufs erforderlich.
      </p>

      <h2>Unsere freiwillige 4-Wochen-Bedenkzeit</h2>
      <p>
        Zusätzlich zum gesetzlichen Widerrufsrecht räumen wir dir freiwillig eine verlängerte
        Bedenkzeit von 4 Wochen ab Erhalt deines ersten Pakets ein: In diesem Zeitraum kannst du deine
        Mitgliedschaft ohne Angabe von Gründen kündigen. Der erste Monat ist kostenlos, du zahlst in
        dieser Zeit also nichts. Diese freiwillige Zusage erweitert deine Rechte, schränkt das
        gesetzliche Widerrufsrecht oben aber nicht ein.
      </p>
    </LegalPage>
  );
}
