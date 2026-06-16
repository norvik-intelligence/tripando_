"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function LandingLeadForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return <div className="landing-form-success"><CheckCircle2 size={28}/><div><strong>Anfrage wurde vorgemerkt.</strong><p>Im Live-System wird die Nachricht direkt an das Tripando-Team übertragen.</p></div></div>;
  }

  return <form className="landing-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
    <div className="landing-form-grid">
      <label>Organisation<input required name="organization" placeholder="Name Ihrer Organisation"/></label>
      <label>Ansprechpartner<input required name="name" placeholder="Vor- und Nachname"/></label>
      <label>E-Mail<input required name="email" type="email" placeholder="name@organisation.de"/></label>
      <label>Organisationstyp<select name="type" defaultValue="Wohlfahrtsverband"><option>Wohlfahrtsverband</option><option>Kommune</option><option>Pflege- oder Sozialträger</option><option>Begegnungsstätte</option><option>Regionalnetzwerk</option><option>Sonstige Organisation</option></select></label>
      <label className="landing-form-wide">Anzahl Standorte<select name="locations" defaultValue="6–20"><option>1 Standort</option><option>2–5 Standorte</option><option>6–20 Standorte</option><option>21–100 Standorte</option><option>Mehr als 100 Standorte</option></select></label>
    </div>
    <label className="landing-consent"><input required type="checkbox"/><span>Ich stimme zu, dass meine Angaben zur Bearbeitung der Pilotanfrage verwendet werden.</span></label>
    <button className="landing-primary landing-submit">Pilotgespräch anfragen</button>
    <small>Unverbindlich · keine Zahlungsdaten · individuelle Einführung</small>
  </form>;
}
