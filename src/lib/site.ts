const CDN = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1600/u_https://assets.cdn.filesafe.space/jSMwtj2fAo3doztQ8dgc/media";
const GCS = "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1600/u_https://storage.googleapis.com/msgsndr/jSMwtj2fAo3doztQ8dgc/media";

export const SITE = {
  name: "Catch 22 Fishing Charters",
  shortName: "Catch 22",
  tagline: "Destin, Florida",
  phone: "(850) 660-3753",
  phoneHref: "tel:+18506603753",
  email: "info@catch22fishingcharters.com",
  marina: "Two Georges Marina",
  address: "100 Old Ferry Rd, Shalimar, FL 32579",
  heroVideo: "https://storage.googleapis.com/msgsndr/jSMwtj2fAo3doztQ8dgc/media/67b0f5622aa0e9642fecbcdf.mp4",
  logo: `${CDN}/67b0dd0e11feb9c0f8d107c3.png`,
  social: {
    facebook: "https://www.facebook.com/p/Catch-22-Charters-100083439394689/",
    instagram: "https://www.instagram.com/catch22charters_",
    tiktok: "https://www.tiktok.com/@catch22.charters",
  },
};

export const PHOTOS = {
  privateCharters: `${CDN}/67b0ebf211feb91200d1194a.png`,
  trolling: `${CDN}/67b0ec05237ce259f4fa3a43.png`,
  kids: `${CDN}/67b0ec2e237ce2da57fa3a6f.png`,
  family1: `${CDN}/67b0b3e12aa0e9731eec72cc.jpeg`,
  family2: `${CDN}/67b0b3e12ba94e3290a39940.jpeg`,
  family3: `${CDN}/67b0b3e111feb93255d0dca4.jpeg`,
  seaFoxIcon: `${GCS}/6977fc5cc1fa0cd3bfe12d45.png`,
  gradyIcon: `${GCS}/6977fe2ba87beb662222d6c0.png`,
  testimonial1: `${CDN}/67b0f32711feb9e510d12501.png`,
  testimonial2: `${CDN}/67b0f342237ce2ab10fa477a.png`,
  testimonial3: `${CDN}/67b0f34e11feb9a6bdd12529.png`,
  avatar: `${CDN}/6cc930c9-2eeb-414e-8f5f-b1c8dd599341.png`,
};

export const SPONSORS = [
  { name: "Mustad Fishing", img: `${CDN}/67b670e7f94eae7802456de5.png`, href: "https://mustad-fishing.com/us" },
  { name: "Okuma", img: `${CDN}/67b66fbc11cf9d506f234b80.png`, href: "https://okumafishingusa.com/" },
  { name: "AFTCO", img: `${CDN}/67b66fbc300630517075f996.png`, href: "https://www.aftco.com/" },
];

export const GALLERY = [
  PHOTOS.family1,
  PHOTOS.family2,
  PHOTOS.family3,
  `${GCS.replace("r_1600", "r_1600")}/67b0b3e1237ce2134dfa0198.jpeg`,
  `${GCS}/67b0b3e1237ce2e513fa0197.jpeg`,
  PHOTOS.privateCharters,
  PHOTOS.trolling,
  PHOTOS.kids,
];

export type Trip = {
  name: string;
  boat: "seafox" | "grady";
  duration: string;
  price: number;
  desc: string;
};

export const TRIPS: Trip[] = [
  { name: "Private 4 Hour Fishing Charter", boat: "seafox", duration: "4 hrs", price: 800, desc: "A friendly four-hour trip in Destin, perfect for first-timers or anyone short on time. Our crew helps every angler land something to be proud of." },
  { name: "Private 5 Hour Fishing Charter", boat: "seafox", duration: "5 hrs", price: 1000, desc: "A great mix of offshore excitement and time efficiency. Bottom fishing or trolling for snapper, grouper, king mackerel and more." },
  { name: "Private 6 Hour Fishing Charter", boat: "seafox", duration: "6 hrs", price: 1200, desc: "The sweet spot. Enough time to run offshore and target a variety of species without committing to a full day." },
  { name: "Private 8 Hour Charter Trip", boat: "seafox", duration: "8 hrs", price: 1600, desc: "Ample time to venture into deeper water and target a diverse range of species. Stress-free, action-packed, all day on the water." },
  { name: "Private 8 Hour Pelagic Trolling", boat: "seafox", duration: "8 hrs", price: 1600, desc: "Eight hours trolling the open water chasing king mackerel, tuna, mahi-mahi and wahoo. Big strikes, unforgettable moments." },
  { name: "Private 10 Hour Charter Trip", boat: "seafox", duration: "10 hrs", price: 2000, desc: "More water, more time, more shots at trophy snapper, grouper, amberjack and pelagic species. Built for serious anglers." },
  { name: "Private 12 Hour Trolling Charter", boat: "seafox", duration: "12 hrs", price: 2400, desc: "The ultimate Destin deep-sea adventure. Full day of bottom fishing, trolling, and chasing the biggest fish in the Gulf." },
  { name: "Kids Trip (Catch & Release)", boat: "seafox", duration: "3 hrs", price: 600, desc: "A kid-friendly day on the water with a patient crew, easy-to-catch species, and hands-on learning in a safe, relaxed setting." },
  { name: "Grady - Private 6 Hour Fishing Charter", boat: "grady", duration: "6 hrs", price: 1500, desc: "Run offshore on the federally-permitted Grady-White. Bottom fishing and trolling for the full Gulf species spread." },
  { name: "Grady - Private 8 Hour Fishing Charter", boat: "grady", duration: "8 hrs", price: 2000, desc: "Eight hours offshore on the Grady — bottom fishing and trolling for snapper, grouper, king mackerel and mahi-mahi." },
  { name: "Grady - Private 10 Hour Fishing Charter", boat: "grady", duration: "10 hrs", price: 2500, desc: "Go the distance. Productive bottom fishing and trolling for hard-fighting species across a full day." },
  { name: "Grady - Private 12 Hour Fishing Charter", boat: "grady", duration: "12 hrs", price: 3000, desc: "Twelve hours of range and flexibility. Chase the bite wherever it develops across multiple deep-water spots." },
  { name: "Grady - Private 14 Hour Fishing Charter", boat: "grady", duration: "14 hrs", price: 3500, desc: "Deep offshore grounds, multiple techniques, and the time to chase the bite. A true deep-sea adventure." },
  { name: "Grady - Private 16 Hour Fishing Charter", boat: "grady", duration: "16 hrs", price: 4000, desc: "Our longest run. Maximum range, maximum opportunity, maximum fish stories." },
];

export const TESTIMONIALS = [
  {
    name: "Jennifer W.",
    title: "Definitely know where the fishing spots are and how to catch them",
    text: "We had an absolute amazing time being on Catch 22 boat with Captain John! He and deck hand George were great at showing us how to reel in the fish. Caught Scamp, trigger, black fin tuna, mingo, amber jack, red snapper, mangrove, mackerel, Bonita, shark and even an eel! As a bonus we got to weigh in at the Destin Rodeo and get on the board! Hands down recommend Catch 22 Charters!",
  },
  {
    name: "Christopher",
    title: "We got a nice one as the 1st fish!",
    text: "Before the charter I told John I had some bucket list fish — one being an Amberjack. We got a nice one as the 1st fish! With wind, waves and the threat of severe weather, John made calls to keep us on fish and safe at the same time. I will absolutely book Catch 22 again and encourage anyone to do the same!",
  },
  {
    name: "Frank",
    title: "Father's Day trip — great memories",
    text: "It was a Father's Day trip and my son and I made great memories. On a day where the water was rough and the bite was slow, Captain John maximized the fishing when the bite happened. We caught multiple species — trout, reds and even a nice catfish. Thanks Captain John — until next time!",
  },
];

export const FAQS = [
  { q: "Where do we meet?", a: "Catch 22 docks at Two Georges Marina in Shalimar, FL. Free parking and restrooms for charter guests. Arrive 10–15 minutes before your scheduled trip for timely boarding and orientation." },
  { q: "How big is the boat?", a: "Both boats accommodate up to 6 guests. The Sea Fox 248 Commander runs state waters; the Grady-White is federally permitted for offshore runs." },
  { q: "What's included?", a: "All tackle, bait, fuel, ice, Florida fishing license for everyone on board, on-board cooler, dry box, trash can, fish cleaning and bagging, and free parking and restrooms at the dock." },
  { q: "What should I bring?", a: "Lotion sunscreen (no spray), hat, UV clothing, deck shoes or non-marking flip-flops, Dramamine, layers in cooler months, food and drinks, lots of water. Tag us @Catch22Charters!" },
  { q: "What should I NOT bring?", a: "No spray sunscreen, no hard coolers, no large bags, no liquor (beer is OK), no pets, no illegal substances, and — old fisherman's superstition — no bananas." },
  { q: "Deposit and cancellation?", a: "A 20% deposit confirms your trip. The remaining 80% is paid in person at the dock to the Captain. Cancellations more than 1 day prior are refunded in full. Cancellations less than 1 day prior may forfeit the deposit at the discretion of Catch 22." },
];