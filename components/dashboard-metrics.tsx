"use client";

import { useOrganization } from "@/components/organization-provider";
import { activities } from "@/lib/demo-data";
import { CalendarDays, CircleGauge, Share2, Users } from "lucide-react";

export function DashboardMetrics() {
  const { currentOrganization, isNetworkView } = useOrganization();
  const visible = isNetworkView ? activities : activities.filter((item) => item.organizationId === currentOrganization.id);
  const registrations = visible.reduce((sum, item) => sum + item.registered, 0);
  const capacity = visible.reduce((sum, item) => sum + item.capacity, 0);
  const utilization = capacity ? Math.round((registrations / capacity) * 100) : 0;
  const values = [
    ["Aktive Angebote", String(visible.length), "+2 seit Monatsbeginn", CalendarDays],
    ["Anmeldungen", String(registrations), `${currentOrganization.locations.length} Standorte`, Users],
    ["Auslastung", `${utilization} %`, "Aktueller Zielwert", CircleGauge],
    ["Pool Bookings", String(visible.filter((item) => item.pooledWith?.length).length), "Trägerübergreifend", Share2]
  ] as const;

  return <section className="executive-kpis">{values.map(([label, value, meta, Icon]) => <article className="metric-tile" key={label}><div className="metric-tile-top"><span className="metric-tile-label">{label}</span><span className="metric-tile-icon"><Icon size={16}/></span></div><strong className="metric-tile-value">{value}</strong><span className="metric-tile-meta">{meta}</span></article>)}</section>;
}
