import { AppShell } from "@/components/app-shell";
import { DashboardClient } from "@/components/dashboard-client";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return <AppShell title="Guten Morgen, Mo." subtitle="Hier sehen Sie, was Ihre Einrichtungen heute bewegt." action={<button className="primary-button"><Plus size={18}/> Aktivität anlegen</button>}><DashboardClient /></AppShell>;
}
