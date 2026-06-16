"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarDays, ChevronDown, HeartHandshake, LayoutDashboard, Menu, Search, Users, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/", label: "Übersicht", icon: LayoutDashboard },
  { href: "/aktivitaeten", label: "Aktivitäten", icon: CalendarDays },
  { href: "/teilnehmende", label: "Teilnehmende", icon: Users },
  { href: "/auswertung", label: "Wirkung", icon: BarChart3 }
];

export function AppShell({ children, title, subtitle, action }: { children: React.ReactNode; title: string; subtitle: string; action?: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-frame">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-row">
          <div className="brand-mark"><HeartHandshake size={22} /></div>
          <div><strong>Tripando</strong><span>Soziale Teilhabe</span></div>
          <button className="icon-button mobile-only" onClick={() => setMobileOpen(false)} aria-label="Navigation schließen"><X size={20} /></button>
        </div>
        <button className="tenant-switcher"><span className="tenant-avatar">A</span><span><strong>AWO Essen</strong><small>Modellregion</small></span><ChevronDown size={16} /></button>
        <nav className="nav-list" aria-label="Hauptnavigation">
          <p className="nav-label">ARBEITSBEREICH</p>
          {nav.map((item) => { const active = pathname === item.href; const Icon = item.icon; return <Link key={item.href} href={item.href} className={active ? "nav-item active" : "nav-item"}><Icon size={19} /><span>{item.label}</span></Link>; })}
        </nav>
        <div className="sidebar-insight"><div className="eyebrow">MODELLREGION</div><strong>3 Standorte verbunden</strong><p>34 freie Plätze wurden standortübergreifend geteilt.</p><div className="progress"><span style={{ width: "72%" }} /></div></div>
        <div className="profile-row"><div className="avatar">MJ</div><div><strong>Mo Jamai</strong><span>Regionsadministrator</span></div><button className="icon-button"><ChevronDown size={16} /></button></div>
      </aside>
      <div className="main-area">
        <header className="topbar"><button className="icon-button mobile-only" onClick={() => setMobileOpen(true)} aria-label="Navigation öffnen"><Menu size={21} /></button><div className="search-box"><Search size={18} /><input aria-label="Suche" placeholder="Aktivität, Standort oder Person suchen…" /></div><div className="pilot-badge"><span /> Pilot aktiv</div></header>
        <main className="page-wrap"><div className="page-heading"><div><p className="eyebrow">AWO MODELLREGION ESSEN</p><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>{children}</main>
      </div>
      {mobileOpen && <button className="backdrop" aria-label="Navigation schließen" onClick={() => setMobileOpen(false)} />}
    </div>
  );
}
