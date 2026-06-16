"use client";

import { useOrganization } from "@/components/organization-provider";
import { activities } from "@/lib/demo-data";

export function OrganizationSummary() {
  const { currentOrganization, isNetworkView } = useOrganization();
  const visible = isNetworkView ? activities : activities.filter((item) => item.organizationId === currentOrganization.id);
  const total = visible.reduce((sum, item) => sum + item.registered, 0);
  return <div className="table-summary"><div><strong>{visible.length}</strong><span>Aktivitäten</span></div><div><strong>{currentOrganization.locations.length}</strong><span>Standorte</span></div><div><strong>{total}</strong><span>Anmeldungen</span></div></div>;
}
