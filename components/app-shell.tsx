"use client";

import { useOrganization } from "@/components/organization-provider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Building2, CalendarDays, Check, ChevronDown, HeartHandshake, LayoutDashboard, Menu, Network, Search, Users, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/", label: "Übersicht", icon: LayoutDashboard },
  { href: "/aktivitaeten", label: "Aktivitäten", icon: CalendarDays },
  { href: "/teilnehmende", label: "Teilnehmende", icon: Users },
  { href: "/organisationen", label: "Organisationen", icon: Building2 },
  { href: "/auswertung", label: "Wirkung", icon: BarChart3 }
];

export function AppShell({ children, title, subtitle, action }: { children: React.ReactNode; title: string; subtitle: string; action?: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tenantOpen, setTenantOpen] = useState(false);
  const { organizations, currentOrganization, setOrganizationId, isNetworkView } = useOrganization();

  return <div className="app-frame">
    <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
      <div className="brand-row">
        <div className="brand-mark"><HeartHandshake size={22} /></div>
        <div><strong>Tripando</strong><span>Plattform für soziale Teilhabe</span></div>
        <button className="icon-button mobile-only" onClick={() => setMobileOpen(false)} aria-label="Navigation schließen"><X size={20} /></button>
      </div>
      <div className="tenant-wrap">
        <button className="tenant-switcher" onClick={() => setTenantOpen((open) => !open)} aria-expanded={tenantOpen}>
          <span className="tenant-avatar" style={{ color: currentOrganization.brandColor }}>{currentOrganization.initials}</span>
          <span><strong>{currentOrganization.shortName}</strong><small>{currentOrganization.type}</small></span>
          <ChevronDown size={16} />
        </button>
        {tenantOpen && <div className="tenant-menu">
          <div className="tenant-menu-head"><span>Ansicht wechseln</span><small>Demo-Mandanten</small></div>
          {organizations.map((organization) => <button key={organization.id} onClick={() => { setOrganizationId(organization.id); setTenantOpen(false); }}>
            <span className="tenant-option-avatar" style={{ background: organization.brandColor }}>{organization.initials}</span>
            <span><strong>{organization.shortName}</strong><small>{organization.type} · {organization.locations.length} Standorte</small></span>
            {organization.id === currentOrganization.id && <Check size={16} />}
          </button>)}
        </div>}
      </div>
      <nav className="nav-list" aria-label="Hauptnavigation">
        <p className="nav-label">ARBEITSBEREICH</p>
        {nav.map((item) => { const active = pathname === item.href; const Icon = item.icon; return <Link key={item.href} href={item.href} className={active ? "nav-item active" : "nav-item"} onClick={() => setMobileOpen(false)}><Icon size={19} /><span>{item.label}</span></Link>; })}
      </nav>
      <div className="sidebar-insight"><div className="eyebrow">{isNetworkView ? "REGIONALES NETZWERK" : currentOrganization.type.toUpperCase()}</div><strong>{currentOrganization.locations.length} Standorte verbunden</strong><p>{isNetworkView ? "Freie Plätze können sicher zwischen verschiedenen Trägern geteilt werden." : "Standorte, Aktivitäten und Wirkungsdaten bleiben im eigenen Mandanten getrennt."}</p><div className="progress"><span style={{ width: isNetworkView ? "76%" : "64%" }} /></div></div>
      <div className="profile-row"><div className="avatar">MJ</div><div><strong>Mo</strong><span>{isNetworkView ? "Plattformadministrator" : "Organisationsadministrator"}</span></div><button className="icon-button"><ChevronDown size={16} /></button></div>
    </aside>
    <div className="main-area">
      <header className="topbar"><button className="icon-button mobile-only" onClick={() => setMobileOpen(true)} aria-label="Navigation öffnen"><Menu size={21} /></button><div className="search-box"><Search size={18} /><input aria-label="Suche" placeholder="Aktivität, Standort, Organisation oder Person…" /></div><div className="pilot-badge"><Network size={14} /> Demo-Netzwerk</div></header>
      <main className="page-wrap"><div className="page-heading"><div><p className="eyebrow">{currentOrganization.name.toUpperCase()} · {currentOrganization.region.toUpperCase()}</p><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>{children}</main>
    </div>
    {mobileOpen && <button className="backdrop" aria-label="Navigation schließen" onClick={() => setMobileOpen(false)} />}
  </div>;
}
