"use client";

import { AppShell } from "@/components/app-shell";
import { participants as initial } from "@/lib/demo-data";
import { Download, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function ParticipantsPage() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => initial.filter((p) => `${p.name} ${p.activity} ${p.location}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <AppShell title="Teilnehmende" subtitle="Alle Anmeldungen, Bedarfe und Wartelisten an einem Ort." action={<button className="primary-button"><Plus size={18}/> Person hinzufügen</button>}>
    <section className="toolbar"><div className="search-box wide"><Search size={18}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Name, Aktivität oder Standort…"/></div><button className="secondary-button"><Download size={17}/> Exportieren</button></section>
    <section className="panel table-panel"><div className="table-summary"><div><strong>{rows.length}</strong><span>angezeigte Personen</span></div><div><strong>{rows.filter((p)=>p.status==="Warteliste").length}</strong><span>auf Wartelisten</span></div><div><strong>3</strong><span>Standorte</span></div></div><div className="table-scroll"><table><thead><tr><th>Name</th><th>Aktivität</th><th>Standort</th><th>Unterstützungsbedarf</th><th>Status</th></tr></thead><tbody>{rows.map((p)=><tr key={p.id}><td><strong>{p.name}</strong></td><td>{p.activity}</td><td>{p.location}</td><td>{p.needs}</td><td><span className={p.status==="Bestätigt"?"status status-freigegeben":"status status-entwurf"}>{p.status}</span></td></tr>)}</tbody></table></div></section>
  </AppShell>;
}
