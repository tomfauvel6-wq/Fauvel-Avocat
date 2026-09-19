import { NextResponse } from "next/server";
import { Resend } from "resend";

type Msg = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  try {
    const { messages, email, phone, update } = await request.json();
    const list: Msg[] = Array.isArray(messages) ? messages : [];
    if (list.length === 0) return NextResponse.json({ error: "Conversation vide." }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Envoi non configuré." }, { status: 500 });

    const to = process.env.CONTACT_TO_EMAIL || "tom.fauvel@fauvel-avocat.fr";
    const from = process.env.CONTACT_FROM_EMAIL || "site@fauvel-avocat.fr";
    const transcript = list
      .map((m) => (m.role === "user" ? "VISITEUR : " : "JARVIS : ") + String(m.content).slice(0, 2000))
      .join("\n\n");
    const stamp = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: typeof email === "string" && email.includes("@") ? email : undefined,
      subject: `${update ? "[Mise à jour] " : ""}Conversation Jarvis, ${email || "e-mail non communiqué"}`,
      text: `Conversation avec l'assistant du site, ${stamp}\n\nE-mail : ${email || "non communiqué"}\nTéléphone : ${phone || "non communiqué"}\n\n${transcript}`
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur d’envoi." }, { status: 500 });
  }
}
