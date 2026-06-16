"use client";

import { useOrganization } from "@/components/organization-provider";
import { activities } from "@/lib/demo-data";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export function DashboardOperations() {
  const { currentOrganization, isNetworkView } = useOrganization();
  const visible = isNetworkView ? activities : activities.filter((item) => item.organizationId === currentOrganization.id);

  return <div className="workspace-grid">
    <section className="panel command-panel">
      <div className="panel-head"><div><span className="eyebrow">OPERATIVE STEUERUNG</span><h2>Anstehende Aktivitäten</h2></div><Link className="text-button" href="/aktivitaeten">Alle anzeigen <ArrowRight size={14}/></Link></div>
      <div className="enterprise-table-head"><span>Aktivität</span><span>Organisation</span><span>Auslastung</span><span>Status</span><span/></div>
      <div>{visible.slice(0,5).map((item) => { const fill = Math.round(item.registered / item.capacity * 100); return <div className="enterprise-row" key={item.id}><div className="enterprise-primary"><strong>{item.title}</strong><span>{item.date} · {item.venue}</span></div><span>{item.organizationName}</span><div className="utilization"><div className="utilization-track"><span style={{width:`${Math.min(fill,100)}%`}}/></div><b>{fill}%</b></div><span className={`status status-${item.status.toLowerCase()}`}>{item.status}</span><Link className="enterprise-link" href="/aktivitaeten"><ChevronRight size={16}/></Link></div>; })}</div>
      {!visible.length && <div className="empty-state">Für diese Organisation sind noch keine Aktivitäten hinterlegt.</div>}
    </section>
    <aside className="panel insight-panel"><span className="eyebrow">NETZWERKSTATUS</span><div className="network-score"><strong>{isNetworkView ? 84 : 76}</strong><span>/ 100<br/>Operations Score</span></div><div className="network-list"><div><div className="network-item-head"><span>Standortabdeckung</span><strong>{isNetworkView ? 92 : 78}%</strong></div><div className="network-track"><span style={{width:isNetworkView?"92%":"78%"}}/></div></div><div><div className="network-item-head"><span>Datengüte</span><strong>88%</strong></div><div className="network-track"><span style={{width:"88%"}}/></div></div><div><div className="network-item-head"><span>Gemeinsame Auslastung</span><strong>{isNetworkView ? 81 : 64}%</strong></div><div className="network-track"><span style={{width:isNetworkView?"81%":"64%"}}/></div></div></div></aside>
  </div>;
}
