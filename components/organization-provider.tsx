"use client";

import { organizations } from "@/lib/demo-data";
import type { Organization } from "@/lib/types";
import { createContext, useContext, useMemo, useState } from "react";

type OrganizationContextValue = {
  organizations: Organization[];
  currentOrganization: Organization;
  setOrganizationId: (organizationId: string) => void;
  isNetworkView: boolean;
};

const OrganizationContext = createContext<OrganizationContextValue | null>(null);

export function OrganizationProvider({ children }: { children: React.ReactNode }) {
  const [organizationId, setOrganizationId] = useState(organizations[0].id);
  const currentOrganization = useMemo(
    () => organizations.find((organization) => organization.id === organizationId) ?? organizations[0],
    [organizationId]
  );

  const value = useMemo(
    () => ({
      organizations,
      currentOrganization,
      setOrganizationId,
      isNetworkView: Boolean(currentOrganization.isNetwork)
    }),
    [currentOrganization]
  );

  return <OrganizationContext.Provider value={value}>{children}</OrganizationContext.Provider>;
}

export function useOrganization() {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error("useOrganization must be used inside OrganizationProvider");
  }
  return context;
}
