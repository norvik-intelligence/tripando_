import { Activity, Building2, Plus } from "lucide-react";
import Link from "next/link";

export function DashboardActions() {
  return <section className="panel"><div className="panel-head"><div><span className="eyebrow">SCHNELLZUGRIFF</span><h2>Häufige Arbeitsabläufe</h2></div></div><div className="quick-actions"><button className="quick-action"><span className="quick-action-icon"><Plus size={16}/></span><span><strong>Aktivität anlegen</strong><span>Neues Angebot mit Kapazität und Termin erstellen</span></span></button><Link className="quick-action" href="/organisationen"><span className="quick-action-icon"><Building2 size={16}/></span><span><strong>Organisation verwalten</strong><span>Standorte, Rollen und Netzwerkpartner öffnen</span></span></Link><Link className="quick-action" href="/auswertung"><span className="quick-action-icon"><Activity size={16}/></span><span><strong>Wirkung analysieren</strong><span>Auslastung, Reichweite und Effizienz prüfen</span></span></Link></div></section>;
}
