import { OrganizationProvider } from "@/components/organization-provider";
import type { Metadata } from "next";
import "./globals.css";
import "./tenant.css";
import "./premium.css";

export const metadata: Metadata = {
  title: "Tripando – Soziale Teilhabe organisieren",
  description: "Planungs-, Buchungs- und Wirkungsplattform für soziale Organisationen, Kommunen und Träger."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><OrganizationProvider>{children}</OrganizationProvider></body></html>;
}
