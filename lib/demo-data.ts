import type { Activity, Organization, Participant } from "./types";

export const organizations: Organization[] = [
  {
    id: "network-essen",
    name: "Tripando Netzwerk Essen",
    shortName: "Netzwerk Essen",
    type: "Regionalnetzwerk",
    region: "Essen & Ruhrgebiet",
    initials: "TE",
    brandColor: "#e73556",
    isNetwork: true,
    locations: [
      { id: "net-1", name: "Begegnungszentrum Mitte", city: "Essen", type: "Begegnungsstätte" },
      { id: "net-2", name: "Seniorentreff Frohnhausen", city: "Essen", type: "Seniorentreff" },
      { id: "net-3", name: "Quartierstreff Rüttenscheid", city: "Essen", type: "Quartiersarbeit" },
      { id: "net-4", name: "Seniorenbüro Nord", city: "Essen", type: "Kommune" },
      { id: "net-5", name: "Tagespflege am Stadtgarten", city: "Essen", type: "Tagespflege" },
      { id: "net-6", name: "Mehrgenerationenhaus West", city: "Essen", type: "Mehrgenerationenhaus" }
    ]
  },
  {
    id: "sozialwerk-ruhr",
    name: "Sozialwerk Ruhr e. V.",
    shortName: "Sozialwerk Ruhr",
    type: "Wohlfahrtsverband",
    region: "Essen",
    initials: "SR",
    brandColor: "#215f4b",
    locations: [
      { id: "sr-1", name: "Begegnungszentrum Mitte", city: "Essen", type: "Begegnungsstätte" },
      { id: "sr-2", name: "Seniorentreff Frohnhausen", city: "Essen", type: "Seniorentreff" },
      { id: "sr-3", name: "Quartierstreff Rüttenscheid", city: "Essen", type: "Quartiersarbeit" }
    ]
  },
  {
    id: "caritas-essen",
    name: "Caritasverband Essen",
    shortName: "Caritas Essen",
    type: "Wohlfahrtsverband",
    region: "Essen",
    initials: "CE",
    brandColor: "#c8242f",
    locations: [
      { id: "ce-1", name: "Begegnungszentrum Nord", city: "Essen", type: "Begegnungsstätte" },
      { id: "ce-2", name: "Tagespflege am Stadtgarten", city: "Essen", type: "Tagespflege" }
    ]
  },
  {
    id: "drk-essen",
    name: "DRK Kreisverband Essen",
    shortName: "DRK Essen",
    type: "Wohlfahrtsverband",
    region: "Essen",
    initials: "DR",
    brandColor: "#d51f2b",
    locations: [
      { id: "drk-1", name: "Seniorentreff Süd", city: "Essen", type: "Seniorentreff" },
      { id: "drk-2", name: "Mehrgenerationenhaus West", city: "Essen", type: "Mehrgenerationenhaus" }
    ]
  },
  {
    id: "stadt-essen",
    name: "Stadt Essen – Seniorenbüro",
    shortName: "Seniorenbüro Essen",
    type: "Kommune",
    region: "Essen",
    initials: "SE",
    brandColor: "#315b8a",
    locations: [
      { id: "se-1", name: "Seniorenbüro Nord", city: "Essen", type: "Seniorenbüro" },
      { id: "se-2", name: "Quartierspunkt Altenessen", city: "Essen", type: "Quartiersarbeit" }
    ]
  },
  {
    id: "vitacare",
    name: "VitaCare Seniorenwohnen",
    shortName: "VitaCare",
    type: "Privater Träger",
    region: "Ruhrgebiet",
    initials: "VC",
    brandColor: "#7656a8",
    locations: [
      { id: "vc-1", name: "Residenz am Park", city: "Essen", type: "Seniorenwohnen" },
      { id: "vc-2", name: "Tagespflege Ruhrblick", city: "Mülheim", type: "Tagespflege" }
    ]
  }
];

export const activities: Activity[] = [
  {
    id: "act-1", slug: "mosel-tagesausflug", title: "Tagesausflug an die Mosel", category: "Tagesausflug", date: "20.06.2026", time: "08:30–18:00", location: "Cochem", venue: "Moselpromenade", capacity: 42, registered: 34, price: 49, status: "Freigegeben",
    accessibility: ["Rollatorgeeignet", "Busnaher Einstieg", "Barrierefreies WC"], description: "Gemeinsame Busfahrt mit Schifffahrt, Mittagessen und Zeit zur freien Verfügung.", organizationId: "sozialwerk-ruhr", organizationName: "Sozialwerk Ruhr e. V.", host: "Begegnungszentrum Mitte", poolScope: "regional", pooledWith: ["Caritas Begegnungszentrum Nord", "DRK Seniorentreff Süd"]
  },
  {
    id: "act-2", slug: "museum-folkwang", title: "Museum Folkwang – Führung", category: "Kultur", date: "25.06.2026", time: "14:00–16:30", location: "Essen", venue: "Museum Folkwang", capacity: 20, registered: 18, price: 12, status: "Freigegeben",
    accessibility: ["Rollstuhlgerecht", "Aufzug", "Sitzmöglichkeiten"], description: "Ruhige Führung durch die Sammlung mit anschließender Kaffeepause.", organizationId: "caritas-essen", organizationName: "Caritasverband Essen", host: "Begegnungszentrum Nord", poolScope: "intern"
  },
  {
    id: "act-3", slug: "bewegung-im-park", title: "Bewegung im Park", category: "Gesundheit", date: "28.06.2026", time: "10:00–11:15", location: "Essen", venue: "Grugapark", capacity: 25, registered: 25, price: 0, status: "Ausgebucht",
    accessibility: ["Kurze Wege", "Sitzpausen", "Rollatorgeeignet"], description: "Leichte Mobilitätsübungen mit qualifizierter Kursleitung.", organizationId: "drk-essen", organizationName: "DRK Kreisverband Essen", host: "Seniorentreff Süd"
  },
  {
    id: "act-4", slug: "smartphone-cafe", title: "Smartphone-Café", category: "Bildung", date: "03.07.2026", time: "15:00–17:00", location: "Essen", venue: "Seniorenbüro Nord", capacity: 16, registered: 9, price: 5, status: "Freigegeben",
    accessibility: ["Ebenerdig", "Barrierefreies WC"], description: "Individuelle Hilfe bei WhatsApp, Fotos, Apps und Online-Terminen.", organizationId: "stadt-essen", organizationName: "Stadt Essen – Seniorenbüro", host: "Seniorenbüro Nord"
  },
  {
    id: "act-5", slug: "gartenfruehstueck", title: "Gemeinsames Gartenfrühstück", category: "Gemeinschaft", date: "06.07.2026", time: "10:00–12:00", location: "Essen", venue: "Residenz am Park", capacity: 30, registered: 17, price: 8, status: "Freigegeben",
    accessibility: ["Rollstuhlgerecht", "Ruhebereich", "Pflegebegleitung möglich"], description: "Offenes Frühstück für Bewohnerinnen, Nachbarschaft und Gäste aus Partnerorganisationen.", organizationId: "vitacare", organizationName: "VitaCare Seniorenwohnen", host: "Residenz am Park", poolScope: "regional", pooledWith: ["Seniorenbüro Essen"]
  }
];

export const participants: Participant[] = [
  { id: "p-1", name: "Ingrid Becker", activity: "Tagesausflug an die Mosel", location: "Begegnungszentrum Mitte", organizationId: "sozialwerk-ruhr", organization: "Sozialwerk Ruhr", status: "Bestätigt", needs: "Rollator" },
  { id: "p-2", name: "Heinz Wagner", activity: "Museum Folkwang – Führung", location: "Begegnungszentrum Nord", organizationId: "caritas-essen", organization: "Caritas Essen", status: "Bestätigt", needs: "Keine" },
  { id: "p-3", name: "Fatima El Mansouri", activity: "Tagesausflug an die Mosel", location: "Seniorentreff Süd", organizationId: "drk-essen", organization: "DRK Essen", status: "Bestätigt", needs: "Halal-Menü" },
  { id: "p-4", name: "Renate Schmidt", activity: "Bewegung im Park", location: "Seniorentreff Süd", organizationId: "drk-essen", organization: "DRK Essen", status: "Warteliste", needs: "Sitzpause" },
  { id: "p-5", name: "Klaus Müller", activity: "Smartphone-Café", location: "Seniorenbüro Nord", organizationId: "stadt-essen", organization: "Seniorenbüro Essen", status: "Bestätigt", needs: "Hörgerät" },
  { id: "p-6", name: "Marta Nowak", activity: "Gemeinsames Gartenfrühstück", location: "Residenz am Park", organizationId: "vitacare", organization: "VitaCare", status: "Bestätigt", needs: "Begleitperson" }
];
