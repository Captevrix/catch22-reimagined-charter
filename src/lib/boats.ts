export type BoatId = "seafox" | "grady";

export type Boat = {
  id: BoatId;
  name: string;
  tagline: string;
  badge: string;
  embedUrl: string;
};

const VRIXPLAY_SEAFOX =
  "https://app.vrixplay.com/book/9bc43e8f-4e23-49c2-bd46-ec504e2f7e78/8de956ba-5406-4e8b-bf69-61ce7012f0d8?embed=true";

const VRIXPLAY_GRADY =
  "https://app.vrixplay.com/book/9bc43e8f-4e23-49c2-bd46-ec504e2f7e78/0d019bc7-20b4-43c2-8d2b-04e57043f7b2?embed=true";

export const BOATS: Record<BoatId, Boat> = {
  seafox: {
    id: "seafox",
    name: "Sea Fox 248 Commander",
    tagline: "Inshore + State Waters - up to 6 anglers",
    badge: "State Waters",
    embedUrl: VRIXPLAY_SEAFOX,
  },
  grady: {
    id: "grady",
    name: "Grady-White Offshore",
    tagline: "Federally Permitted - long-range offshore",
    badge: "Federal Permit",
    embedUrl: VRIXPLAY_GRADY,
  },
};

export const BOAT_LIST: Boat[] = [BOATS.seafox, BOATS.grady];