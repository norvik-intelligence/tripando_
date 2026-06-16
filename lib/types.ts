export type ActivityStatus = "Entwurf" | "Freigegeben" | "Ausgebucht" | "Abgeschlossen";

export type Activity = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  capacity: number;
  registered: number;
  price: number;
  status: ActivityStatus;
  accessibility: string[];
  description: string;
  host: string;
  pooledWith?: string[];
};

export type Participant = {
  id: string;
  name: string;
  activity: string;
  location: string;
  status: "Bestätigt" | "Warteliste";
  needs: string;
};
