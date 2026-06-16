import { AppShell } from "@/components/app-shell";
import { DashboardClient } from "@/components/dashboard-client";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return <AppShell title="Steuerungszentrale" subtitle="Leistung, Auslastung und Zusammenarbeit aller Einrichtungen in einer konsolidierten Ansicht." action={<button className="primary-button"><Plus size={16}/> Neue Aktivität</button>}><DashboardClient/></AppShell>;
}
