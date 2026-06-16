import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tripando – Soziale Teilhabe organisieren",
  description: "Planungs-, Buchungs- und Wirkungsplattform für Wohlfahrtsverbände."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
