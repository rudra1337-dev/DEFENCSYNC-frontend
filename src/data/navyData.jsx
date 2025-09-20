// src/data/navyData.js
export const NAVY = {
  id: "navy",
  name: "NAVY",
  slogan: "Securing Seas — Always Vigilant",
  backgroundUrl:
    "https://images.unsplash.com/photo-1507120366492-5f61f4f54d6f?q=80&w=1600&auto=format&fit=crop",
  flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  bases: [
    {
      id: "navy-b1",
      name: "Mumbai Naval Dock",
      location: "Mumbai, Maharashtra",
      photo:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      availSoldiers: 500,
      availMedikits: 140,
      weapons: {
        Torpedo: {
          name: "Torpedo",
          available: 50,
          photo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Torpedo_US_Navy.jpg",
        },
        Missile: {
          name: "BrahMos Missile",
          available: 20,
          photo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/BrahMos_missile.jpg",
        },
        NavalGun: {
          name: "76mm Naval Gun",
          available: 15,
          photo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Oto_Melara_76_mm.jpg",
        },
      },
      vehicles: {
        Submarine: {
          name: "INS Arihant Submarine",
          available: 2,
          photo: "https://upload.wikimedia.org/wikipedia/commons/2/27/INS_Arihant.jpg",
        },
        Warship: {
          name: "INS Vikrant",
          available: 1,
          photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/INS_Vikrant_%28IAC-1%29.jpg",
        },
      },
    },
    {
      id: "navy-b2",
      name: "Karwar Base",
      location: "Karwar, Karnataka",
      photo:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
      availSoldiers: 400,
      availMedikits: 120,
      weapons: {
        Torpedo: { name: "Torpedo", available: 30, photo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Torpedo_US_Navy.jpg" },
        SAM: { name: "Surface-to-Air Missile", available: 12, photo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Barak-8_missile.jpg" },
      },
      vehicles: {
        Warship: { name: "INS Vikramaditya", available: 1, photo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/INS_Vikramaditya.jpg" },
        PatrolBoat: { name: "Patrol Boat", available: 4, photo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Indian_Coast_Guard_boat.jpg" },
      },
    },
    {
      id: "navy-b3",
      name: "Visakhapatnam Dockyard",
      location: "Visakhapatnam, Andhra Pradesh",
      photo:
        "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=800&auto=format&fit=crop",
      availSoldiers: 450,
      availMedikits: 160,
      weapons: {
        Missile: { name: "Club Missile", available: 18, photo: "https://upload.wikimedia.org/wikipedia/commons/6/62/3M-54E1_Club-S_missile.jpg" },
        Torpedo: { name: "Torpedo", available: 40, photo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Torpedo_US_Navy.jpg" },
      },
      vehicles: {
        Submarine: { name: "INS Sindhughosh", available: 1, photo: "https://upload.wikimedia.org/wikipedia/commons/4/41/INS_Sindhughosh.jpg" },
        Destroyer: { name: "INS Kolkata Destroyer", available: 2, photo: "https://upload.wikimedia.org/wikipedia/commons/2/27/INS_Kolkata_%28D63%29.jpg" },
      },
    },
    {
      id: "navy-b4",
      name: "Cochin Shipyard",
      location: "Kochi, Kerala",
      photo:
        "https://images.unsplash.com/photo-1508599589926-54d6c24bdfd6?q=80&w=800&auto=format&fit=crop",
      availSoldiers: 300,
      availMedikits: 100,
      weapons: {
        NavalGun: { name: "Naval Gun", available: 10, photo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Oto_Melara_76_mm.jpg" },
      },
      vehicles: {
        Frigate: { name: "Shivalik-class Frigate", available: 1, photo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/INS_Shivalik.jpg" },
      },
    },
    {
      id: "navy-b5",
      name: "Chennai Port Base",
      location: "Chennai, Tamil Nadu",
      photo:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      availSoldiers: 350,
      availMedikits: 90,
      weapons: {
        SAM: { name: "Barak-8 SAM", available: 25, photo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Barak-8_missile.jpg" },
      },
      vehicles: {
        Corvette: { name: "Kamorta-class Corvette", available: 2, photo: "https://upload.wikimedia.org/wikipedia/commons/0/08/INS_Kamorta.jpg" },
      },
    },
    {
      id: "navy-b6",
      name: "Port Blair Base",
      location: "Andaman & Nicobar Islands",
      photo:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
      availSoldiers: 280,
      availMedikits: 70,
      weapons: {
        Missile: { name: "Anti-Ship Missile", available: 15, photo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Harpoon_missile.jpg" },
        Torpedo: { name: "Torpedo", available: 20, photo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Torpedo_US_Navy.jpg" },
      },
      vehicles: {
        PatrolBoat: { name: "Fast Attack Craft", available: 5, photo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/INS_Tihayu.jpg" },
        Submarine: { name: "Kilo-class Submarine", available: 1, photo: "https://upload.wikimedia.org/wikipedia/commons/8/87/INS_Sindhurakshak.jpg" },
      },
    },
  ],
};