import { OrganizationSummary } from "@/components/organization-summary";

export function DashboardClient() {
  return <section className="panel"><div className="panel-head"><div><span className="eyebrow">TRIPANDO NETZWERK</span><h2>Organisationsübergreifende Plattform</h2></div></div><OrganizationSummary/></section>;
}
