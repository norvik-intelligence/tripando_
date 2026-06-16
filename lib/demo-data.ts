import { Activity, Participant } from "./types";

export const activities: Activity[] = [
  {
    id: "act-1", slug: "mosel-tagesausflug", title: "Tagesausflug an die Mosel", category: "Tagesausflug", date: "20.06.2026", time: "08:30–18:00", location: "Cochem", venue: "Moselpromenade", capacity: 42, registered: 34, price: 49, status: "Freigegeben",
    accessibility: ["Rollatorgeeignet", "Busnaher Einstieg", "Barrierefreies WC"], description: "Gemeinsame Busfahrt mit Schifffahrt, Mittagessen und Zeit zur freien Verfügung.", host: "AWO Essen-Mitte", pooledWith: ["AWO Frohnhausen", "AWO Rüttenscheid"]
  },
  {
    id: "act-2", slug: "museum-folkwang", title: "Museum Folkwang – Führung", category: "Kultur", date: "25.06.2026", time: "14:00–16:30", location: "Essen", venue: "Museum Folkwang", capacity: 20, registered: 18, price: 12, status: "Freigegeben",
    accessibility: ["Rollstuhlgerecht", "Aufzug", "Sitzmöglichkeiten"], description: "Ruhige Führung durch die Sammlung mit anschließender Kaffeepause.", host: "AWO Essen-Mitte"
  },
  {
    id: "act-3", slug: "bewegung-im-park", title: "Bewegung im Park", category: "Gesundheit", date: "28.06.2026", time: "10:00–11:15", location: "Essen", venue: "Grugapark", capacity: 25, registered: 25, price: 0, status: "Ausgebucht",
    accessibility: ["Kurze Wege", "Sitzpausen", "Rollatorgeeignet"], description: "Leichte Mobilitätsübungen mit qualifizierter Kursleitung.", host: "AWO Rüttenscheid"
  },
  {
    id: "act-4", slug: "smartphone-cafe", title: "Smartphone-Café", category: "Bildung", date: "03.07.2026", time: "15:00–17:00", location: "Essen", venue: "Begegnungsstätte Frohnhausen", capacity: 16, registered: 9, price: 5, status: "Freigegeben",
    accessibility: ["Ebenerdig", "Barrierefreies WC"], description: "Individuelle Hilfe bei WhatsApp, Fotos, Apps und Online-Terminen.", host: "AWO Frohnhausen"
  }
];

export const participants: Participant[] = [
  { id: "p-1", name: "Ingrid Becker", activity: "Tagesausflug an die Mosel", location: "Essen-Mitte", status: "Bestätigt", needs: "Rollator" },
  { id: "p-2", name: "Heinz Wagner", activity: "Museum Folkwang – Führung", location: "Rüttenscheid", status: "Bestätigt", needs: "Keine" },
  { id: "p-3", name: "Fatima El Mansouri", activity: "Tagesausflug an die Mosel", location: "Frohnhausen", status: "Bestätigt", needs: "Halal-Menü" },
  { id: "p-4", name: "Renate Schmidt", activity: "Bewegung im Park", location: "Rüttenscheid", status: "Warteliste", needs: "Sitzpause" },
  { id: "p-5", name: "Klaus Müller", activity: "Smartphone-Café", location: "Essen-Mitte", status: "Bestätigt", needs: "Hörgerät" }
];
