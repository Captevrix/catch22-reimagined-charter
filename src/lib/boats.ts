export type BoatId = "seafox" | "grady";

export type Boat = {
  id: BoatId;
  name: string;
  tagline: string;
  badge: string;
  embedUrl: string;
};

// NOTE: Only one Vrixplay embed URL was provided. Both boats currently route
// through the same booking flow — swap in the Grady-specific embed when available.
const VRIXPLAY_DEFAULT =
  "https://app.vrixplay.com/book/9bc43e8f-4e23-49c2-bd46-ec504e2f7e78/8de956ba-5406-4e8b-bf69-61ce7012f0d8?embed=true";

export const BOATS: Record<BoatId, Boat> = {
  seafox: {
    id: "seafox",
    name: "Sea Fox 248 Commander",
    tagline: "Inshore + State Waters — up to 6 anglers",
    badge: "State Waters",
    embedUrl: VRIXPLAY_DEFAULT,
  },
  grady: {
    id: "grady",
    name: "Grady-White Offshore",
    tagline: "Federally Permitted — long-range offshore",
    badge: "Federal Permit",
    embedUrl: VRIXPLAY_DEFAULT,
  },
};

export const BOAT_LIST: Boat[] = [BOATS.seafox, BOATS.grady];