// Florida Gulf Red Snapper Season - single source of truth.
// Update yearly. Dates are inclusive, local (Eastern) calendar dates.

export type SeasonWindow = { start: string; end: string; label?: string };

// Florida State Waters (Gulf) - 2026 schedule.
export const FL_STATE_WINDOWS: SeasonWindow[] = [
  { start: "2026-05-22", end: "2026-07-31", label: "Daily" },
  { start: "2026-09-01", end: "2026-10-04", label: "Daily" },
  { start: "2026-10-09", end: "2026-10-11", label: "Weekend" },
  { start: "2026-10-16", end: "2026-10-18", label: "Weekend" },
  { start: "2026-10-23", end: "2026-10-25", label: "Weekend" },
  { start: "2026-10-30", end: "2026-11-01", label: "Weekend" },
  { start: "2026-11-07", end: "2026-11-08", label: "Sat-Sun" },
  { start: "2026-11-14", end: "2026-11-15", label: "Sat-Sun" },
  { start: "2026-11-21", end: "2026-11-22", label: "Sat-Sun" },
  { start: "2026-11-26", end: "2026-11-29", label: "Thanksgiving" },
  { start: "2026-12-05", end: "2026-12-06", label: "Sat-Sun" },
  { start: "2026-12-12", end: "2026-12-13", label: "Sat-Sun" },
  { start: "2026-12-19", end: "2026-12-20", label: "Sat-Sun" },
  { start: "2026-12-25", end: "2026-12-27", label: "Christmas" },
  { start: "2027-01-01", end: "2027-01-04", label: "New Year" },
];

// Federal Gulf of America Waters - 2026. Federally permitted boats only.
export const FL_FEDERAL_WINDOW: SeasonWindow = {
  start: "2026-06-01",
  end: "2026-10-26",
  label: "Federal",
};

function toDate(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function inWindow(now: Date, w: SeasonWindow) {
  const start = toDate(w.start);
  const end = toDate(w.end);
  end.setHours(23, 59, 59, 999);
  return now >= start && now <= end;
}

export function isStateOpen(now = new Date()) {
  return FL_STATE_WINDOWS.some((w) => inWindow(now, w));
}

export function isFederalOpen(now = new Date()) {
  return inWindow(now, FL_FEDERAL_WINDOW);
}

export function isAnyOpen(now = new Date()) {
  return isStateOpen(now) || isFederalOpen(now);
}

// Return the next upcoming window across state + federal, or null if past all.
export function nextWindow(now = new Date()): SeasonWindow | null {
  const all = [...FL_STATE_WINDOWS, FL_FEDERAL_WINDOW]
    .filter((w) => toDate(w.start) > now)
    .sort((a, b) => toDate(a.start).getTime() - toDate(b.start).getTime());
  return all[0] ?? null;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function fmtRange(w: SeasonWindow) {
  const s = toDate(w.start);
  const e = toDate(w.end);
  const sameYear = s.getFullYear() === e.getFullYear();
  const sameMonth = sameYear && s.getMonth() === e.getMonth();
  if (sameMonth) return `${MONTHS[s.getMonth()]} ${s.getDate()}-${e.getDate()}`;
  if (sameYear) return `${MONTHS[s.getMonth()]} ${s.getDate()} - ${MONTHS[e.getMonth()]} ${e.getDate()}`;
  return `${MONTHS[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} - ${MONTHS[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
