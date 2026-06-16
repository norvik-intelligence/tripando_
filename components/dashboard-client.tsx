"use client";

import Link from "next/link";
import { ArrowRight, Bus, CalendarDays, CheckCircle2, Clock3, MapPin, Plus, Sparkles, TrendingUp, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { activities as initialActivities } from "@/lib/demo-data";
import type { Activity } from "@/lib/types";

function Stat({ icon, label, value, note }: { icon: React.ReactNode; label: string; value: string; note: string }) {
  return <div className="stat-card"><div className="stat-icon">{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{note}</small></div></div>;
}

export function DashboardClient() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState("");
  const totalParticipants = useMemo(() => activities.reduce((sum, item) => sum + item.registered, 0), [activities]);
  const totalCapacity = useMemo(() => activities.reduce((sum, item) => sum + item.capacity, 0), [activities]);

  function addActivity(formData: FormData) {
    const title = String(formData.get("title") || "Neue Aktivität");
    const item: Activity = {
      id: crypto.randomUUID(), slug: title.toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/^-|-$/g, ""), title,
      category: String(formData.get("category") || "Gemeinschaft"), date: String(formData.get("date") || "15.07.2026").split("-").reverse().join("."),
      time: String(formData.get("time") || "14:00") + " Uhr", location: String(formData.get("location") || "Essen"), venue: String(formData.get("venue") || "AWO Begegnungsstätte"),
      capacity: Number(formData.get("capacity") || 20), registered: 0, price: Number(formData.get("price") || 0), status: "Entwurf",
      accessibility: ["Angaben werden geprüft"], description: "Neue Aktivität im Entwurfsstatus.", host: "AWO Essen-Mitte"
    };
    setActivities((prev) => [item, ...prev]); setModal(false); setToast("Aktivität wurde als Entwurf angelegt."); setTimeout(() => setToast(""), 3200);
  }

  return <>
    <section className="stats-grid">
      <Stat icon={<CalendarDays size={21} />} label="Aktive Angebote" value={String(activities.filter((a) => a.status !== "Abgeschlossen").length)} note="+2 in diesem Monat" />
      <Stat icon={<Users size={21} />} label="Teilnahmen" value={String(totalParticipants)} note="über 3 Standorte" />
      <Stat icon={<TrendingUp size={21} />} label="Auslastung" value={`${Math.round((totalParticipants / totalCapacity) * 100)} %`} note="8 Punkte über Ziel" />
      <Stat icon={<Clock3 size={21} />} label="Zeitersparnis" value="11,4 h" note="geschätzt im Juni" />
    </section>
    <section className="feature-banner"><div className="feature-icon"><Sparkles size={22} /></div><div><span className="eyebrow">TRIPANDO POOL BOOKING</span><h2>Ein gemeinsamer Bus statt drei halbleerer Fahrten</h2><p>Die Moselfahrt bündelt 34 Teilnehmende aus drei AWO-Standorten. Dadurch sinken die Fahrtkosten um voraussichtlich 31 %.</p></div><Link href="/aktivitaeten" className="secondary-button">Bündelung ansehen <ArrowRight size={17} /></Link></section>
    <div className="dashboard-grid"><section className="panel"><div className="panel-head"><div><span className="eyebrow">NÄCHSTE 30 TAGE</span><h2>Anstehende Aktivitäten</h2></div><button className="text-button" onClick={() => setModal(true)}><Plus size={17} /> Neu anlegen</button></div><div className="activity-list">{activities.slice(0,4).map((activity) => { const fill = Math.min(100, Math.round((activity.registered/activity.capacity)*100)); return <article className="activity-row" key={activity.id}><div className="date-tile"><strong>{activity.date.slice(0,2)}</strong><span>{activity.date.slice(3,5)==="06"?"JUN":"JUL"}</span></div><div className="activity-main"><div className="activity-title-line"><h3>{activity.title}</h3><span className={`status status-${activity.status.toLowerCase()}`}>{activity.status}</span></div><p><MapPin size={15}/>{activity.venue}, {activity.location}</p><div className="capacity-line"><div className="mini-progress"><span style={{width:`${fill}%`}}/></div><small>{activity.registered} von {activity.capacity} Plätzen</small></div></div><Link href={`/buchen/${activity.slug}`} className="icon-link"><ArrowRight size={19}/></Link></article>; })}</div><Link className="panel-footer-link" href="/aktivitaeten">Alle Aktivitäten verwalten <ArrowRight size={17}/></Link></section>
      <aside className="panel impact-card"><span className="eyebrow">WIRKUNG IM JUNI</span><h2>Mehr Teilhabe, weniger Leerlauf</h2><div className="impact-score"><strong>78</strong><span>/ 100<br/>Wirkungsindex</span></div><div className="impact-bars"><div><span><Users size={16}/> Erreichte Personen</span><strong>86 %</strong></div><div className="bar"><span style={{width:"86%"}}/></div><div><span><CheckCircle2 size={16}/> Durchführungsquote</span><strong>92 %</strong></div><div className="bar"><span style={{width:"92%"}}/></div><div><span><Bus size={16}/> Gemeinsame Buchungen</span><strong>61 %</strong></div><div className="bar"><span style={{width:"61%"}}/></div></div><Link href="/auswertung" className="secondary-button full">Wirkungsbericht öffnen <ArrowRight size={17}/></Link></aside>
    </div>
    {modal && <div className="modal-layer" role="dialog" aria-modal="true"><button className="modal-backdrop" onClick={()=>setModal(false)} aria-label="Schließen"/><form action={addActivity} className="modal-card"><div className="modal-head"><div><span className="eyebrow">NEUE AKTIVITÄT</span><h2>Veranstaltung anlegen</h2></div><button type="button" className="icon-button" onClick={()=>setModal(false)}>×</button></div><div className="form-grid"><label className="span-2">Titel<input name="title" required placeholder="z. B. Tagesfahrt nach Xanten"/></label><label>Kategorie<select name="category"><option>Tagesausflug</option><option>Kultur</option><option>Gesundheit</option><option>Bildung</option><option>Gemeinschaft</option></select></label><label>Datum<input name="date" type="date" required defaultValue="2026-07-15"/></label><label>Uhrzeit<input name="time" type="time" defaultValue="14:00"/></label><label>Kapazität<input name="capacity" type="number" min="1" defaultValue="20"/></label><label>Ort<input name="location" defaultValue="Essen"/></label><label>Veranstaltungsort<input name="venue" placeholder="Begegnungsstätte"/></label><label>Preis pro Person<input name="price" type="number" min="0" defaultValue="0"/></label></div><div className="modal-actions"><button type="button" className="ghost-button" onClick={()=>setModal(false)}>Abbrechen</button><button className="primary-button">Entwurf anlegen</button></div></form></div>}
    {toast && <div className="toast"><CheckCircle2 size={18}/>{toast}</div>}
  </>;
}
