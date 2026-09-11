import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, consent, company } = await request.json();

    if (company) return NextResponse.json({ ok: true });
    if (!name || !email || !message || !consent) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "tom.fauvel@fauvel-avocat.fr";
    const from = process.env.CONTACT_FROM_EMAIL || "site@fauvel-avocat.fr";

    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY manquante." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande depuis le site, ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone || "Non renseigné"}\nConsentement RGPD: oui\n\nMessage:\n${message}`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
