"use client";

import { AppShell } from "@/components/app-shell";
import { activities } from "@/lib/demo-data";
import { ArrowRight, Filter, MapPin, Plus, Search, Users } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function ActivitiesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");
  const filtered = useMemo(() => activities.filter((item) => (category === "Alle" || item.category === category) && `${item.title} ${item.location} ${item.venue}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <AppShell title="Aktivitäten" subtitle="Planen, teilen und bündeln Sie Angebote über alle Standorte hinweg." action={<button className="primary-button"><Plus size={18}/> Neu anlegen</button>}>
    <section className="toolbar"><div className="search-box wide"><Search size={18}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Aktivitäten durchsuchen…"/></div><div className="filter-control"><Filter size={17}/><select value={category} onChange={(e)=>setCategory(e.target.value)}><option>Alle</option><option>Tagesausflug</option><option>Kultur</option><option>Gesundheit</option><option>Bildung</option></select></div></section>
    <section className="card-grid">{filtered.map((activity)=><article className="activity-card" key={activity.id}><div className="card-accent"><span>{activity.category}</span><strong>{activity.date}</strong></div><div className="card-body"><div className="activity-title-line"><h2>{activity.title}</h2><span className={`status status-${activity.status.toLowerCase()}`}>{activity.status}</span></div><p className="muted-line"><MapPin size={16}/>{activity.venue}, {activity.location}</p><p>{activity.description}</p><div className="chip-row">{activity.accessibility.map((item)=><span className="chip" key={item}>{item}</span>)}</div><div className="card-metrics"><div><Users size={17}/><span><strong>{activity.registered}/{activity.capacity}</strong> Plätze</span></div><div><strong>{activity.price===0?"Kostenfrei":`${activity.price} €`}</strong><span>pro Person</span></div></div>{activity.pooledWith&&<div className="pool-note"><span>Pool Booking</span>Verbunden mit {activity.pooledWith.length} weiteren Standorten</div>}<Link href={`/buchen/${activity.slug}`} className="secondary-button full">Details & Anmeldung <ArrowRight size={17}/></Link></div></article>)}</section>
  </AppShell>;
}
