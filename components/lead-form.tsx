"use client";

import { useState } from "react";

export function LeadForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(formData: FormData) {
    setState("loading");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: "landing_pilot_form" })
    });
    setState(response.ok ? "success" : "error");
  }

  return <form action={submit} className="lead-form">
    <div><label>Name<input name="name" placeholder="Ihr Name" /></label><label>E-Mail<input name="email" type="email" placeholder="name@organisation.de" required /></label></div>
    <div><label>Organisation<input name="organization" placeholder="z. B. Caritas Essen" required /></label><label>Rolle<input name="role" placeholder="Leitung, IT, Sozialplanung…" /></label></div>
    <label>Was möchten Sie pilotieren?<textarea name="message" placeholder="3–5 Einrichtungen, Seniorenangebote, Quartiersarbeit…" /></label>
    <button className="landing-primary" disabled={state === "loading"}>{state === "loading" ? "Wird gesendet…" : "Pilot anfragen"}</button>
    {state === "success" && <p className="lead-success">Anfrage gespeichert. Der Lead-Endpunkt funktioniert.</p>}
    {state === "error" && <p className="lead-error">Anfrage konnte nicht gespeichert werden.</p>}
  </form>;
}
