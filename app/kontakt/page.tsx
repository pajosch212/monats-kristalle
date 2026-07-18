import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Kontakt — Monats-Kristalle" };

export default function KontaktPage() {
  return (
    <LegalPage title="Kontakt">
      <p>Fragen zu deiner Mitgliedschaft, deinem Paket oder allem drumherum? Melde dich gerne.</p>

      <p>
        Paul Schiek
        <br />
        Praunheimer Landstraße 152
        <br />
        60488 Frankfurt am Main
      </p>

      <p>
        E-Mail: <a href="mailto:monatskristall@gmail.com">monatskristall@gmail.com</a>
        <br />
        Telefon: 015560111372
      </p>
    </LegalPage>
  );
}
