export type OrganizationType = "Regionalnetzwerk" | "Wohlfahrtsverband" | "Kommune" | "Privater Träger";

export type OrganizationLocation = {
  id: string;
  name: string;
  city: string;
  type: string;
};

export type Organization = {
  id: string;
  name: string;
  shortName: string;
  type: OrganizationType;
  region: string;
  initials: string;
  brandColor: string;
  locations: OrganizationLocation[];
  isNetwork?: boolean;
};

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
  organizationId: string;
  organizationName: string;
  host: string;
  poolScope?: "intern" | "regional";
  pooledWith?: string[];
};

export type Participant = {
  id: string;
  name: string;
  activity: string;
  location: string;
  organizationId: string;
  organization: string;
  status: "Bestätigt" | "Warteliste";
  needs: string;
};
