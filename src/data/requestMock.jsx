// requestMock.js
// 3 dummy requests created with the same payload shape your form builds.

export const REQUESTS_MOCK = [
  {
    id: "req-1001",
    to: { base: "Mumbai Naval Dock", agency: "NAVY" },
    from: { base: "Port Blair Base", agency: "NAVY", location: "Andaman Sector" },
    reason: "Enemy boats spotted near A-zone. Immediate support required.",
    weapons: { Torpedo: 3, Missile: 1 },
    vehicles: { "Fast Attack Craft": 2, "INS Sindhughosh": 1 },
    timestamp: "2025-09-16T08:20:00.000Z",
  },
  {
    id: "req-1002",
    to: { base: "Visakhapatnam Dockyard", agency: "NAVY" },
    from: { base: "Chennai Port Base", agency: "NAVY", location: "Chennai Port" },
    reason: "Recon reported hostile vessels — request missiles and medikits.",
    weapons: { Missile: 2 },
    vehicles: { "Patrol Boat": 1 },
    timestamp: "2025-09-16T13:45:00.000Z",
  },
  {
    id: "req-1003",
    to: { base: "Karwar Base", agency: "NAVY" },
    from: { base: "Cochin Shipyard", agency: "NAVY", location: "Kochi Dock" },
    reason: "Supply transfer — routine reinforcement.",
    weapons: { NavalGun: 2 },
    vehicles: { Frigate: 1, PatrolBoat: 2 },
    timestamp: "2025-09-17T06:10:00.000Z",
  },
];

// helper to lookup by id
export function getRequestById(id) {
  return REQUESTS_MOCK.find((r) => r.id === id) || null;
}