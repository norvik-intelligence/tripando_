import { DashboardActions } from "@/components/dashboard-actions";
import { DashboardMetrics } from "@/components/dashboard-metrics";
import { DashboardOperations } from "@/components/dashboard-operations";

export function DashboardClient() {
  return <><DashboardMetrics/><DashboardOperations/><DashboardActions/></>;
}
