export type FishingSpot = {
  location: string
  coords: string
  optimal: number
  notes?: string
}

export type FishingSpots = {
  [key: string]: {
    [key: string]: FishingSpot[]
  }
}

const fishingSpots: FishingSpots = {
  "Fishing Rod": {
    "1-20": [
      {
        "location": "Cesis in Town",
        "coords": "51,64",
        "optimal": 1
      },
      {
        "location": "Dorpat Docks",
        "coords": "6,13",
        "optimal": 1,
        "notes": "easier for low level, but Cesis spot is closer to chest."
      },
      {
        "location": "Dorpat Docks",
        "coords": "16,8",
        "optimal": 0
      },
      {
        "location": "Dorpat Docks",
        "coords": "91,33",
        "optimal": 0
      },
      {
        "location": "Dorpat Docks",
        "coords": "5,71",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "43,38",
        "optimal": 0
      },
      {
        "location": "Reval",
        "coords": "74,28",
        "optimal": 0
      },
      {
        "location": "Whiland",
        "coords": "44,62",
        "optimal": 0
      },
      {
        "location": "Rakblood",
        "coords": "46,79",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "87,31",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "14,19",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "13,13",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "17,14",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "20,16",
        "optimal": 0
      }
    ],
    "30-47": [
      {
        "location": "Cesis in town",
        "coords": "51,65",
        "optimal": 1
      },
      {
        "location": "Whiland Short Bridge",
        "coords": "40,54",
        "optimal": 0
      },
      {
        "location": "Whiland Long Bridge",
        "coords": "46,51",
        "optimal": 0
      },
      {
        "location": "Whiland Short Bridge",
        "coords": "41,53",
        "optimal": 0
      },
      {
        "location": "Rakblood",
        "coords": "38,89",
        "optimal": 0
      },
      {
        "location": "Rakblood",
        "coords": "40,91",
        "optimal": 0
      },
      {
        "location": "Rakblood",
        "coords": "42,89",
        "optimal": 0
      }
    ]
  },
  "Fishing Net": {
    "5": [
      {
        "location": "Dorpat",
        "coords": "35,7",
        "optimal": 1
      },
      {
        "location": "Dorpat",
        "coords": "32,5",
        "optimal": 0
      },
      {
        "location": "Dorpat",
        "coords": "61,6",
        "optimal": 0
      },
      {
        "location": "Dorpat",
        "coords": "47,93",
        "optimal": 0
      },
      {
        "location": "Dorpat",
        "coords": "13,95",
        "optimal": 0
      },
      {
        "location": "Dorpat",
        "coords": "4,53",
        "optimal": 0
      },
      {
        "location": "Dorpat",
        "coords": "44,53",
        "optimal": 0
      },
      {
        "location": "Reval",
        "coords": "70,19",
        "optimal": 0
      },
      {
        "location": "Reval",
        "coords": "70,26",
        "optimal": 0
      },
      {
        "location": "Reval",
        "coords": "81,22",
        "optimal": 0
      },
      {
        "location": "Cesis",
        "coords": "19,29",
        "optimal": 0
      },
      {
        "location": "Cesis",
        "coords": "23,27",
        "optimal": 0
      },
      {
        "location": "Cesis",
        "coords": "20,28",
        "optimal": 0
      },
      {
        "location": "Cesis",
        "coords": "23,28",
        "optimal": 0
      },
      {
        "location": "Ancient Dungeon",
        "coords": "21,83",
        "optimal": 0
      },
      {
        "location": "Rakblood",
        "coords": "21,83",
        "optimal": 0
      },
      {
        "location": "Lost Woods",
        "coords": "21,83",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "88,36",
        "optimal": 0
      },
      {
        "location": "Broceliande Forest",
        "coords": "42,88",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "8,30",
        "optimal": 0
      }
    ],
    "23-25": [
      {
        "location": "Whiland near Small Bridge",
        "coords": "33,52 ",
        "optimal": 1,
        "notes": "The spot in the Fishing Guild is closer to a chest, but you need 80 fishing to get into the guild."
      },
      {
        "location": "Fellin Island in Fishing Guild",
        "coords": "33,51",
        "optimal": 0
      }
    ],
    "40-43": [
      {
        "location": "Cesis",
        "coords": "67,46",
        "optimal": 1
      },
      {
        "location": "Lost Woods",
        "coords": "79,43",
        "optimal": 0
      }
    ],
    "70-85": [
      {
        "location": "Ancient Dungeon near Town",
        "coords": "35,83",
        "optimal": 1
      },
      {
        "location": "Broceliande Forest",
        "coords": "42,89",
        "optimal": 0
      }
    ]
  },
  "Cage": {
    "35-43": [
      {
        "location": "Dungeon I under Dorpat",
        "coords": "17,24",
        "optimal": 1
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "21,9",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat near Hydras",
        "coords": "38,7",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat near Hydras",
        "coords": "44,7",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "19,25",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "25,9",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "17,24",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "18,26",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "21,14",
        "optimal": 0
      },
      {
        "location": "Dungeon I under Dorpat",
        "coords": "25,9",
        "optimal": 0
      },
      {
        "location": "Dungeon I",
        "coords": "21,16",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "85,32",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "13,52",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "15,52",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "12,27",
        "optimal": 0
      }
    ],
    "48-65": [
      {
        "location": "Lost Woods",
        "coords": "83,43",
        "optimal": 1
      }
    ]
  },
  "Wooden Harpoon": {
    "50-55": [
      {
        "location": "Ancient Dungeon near Town",
        "coords": "36,88",
        "optimal": 1
      },
      {
        "location": "Narwa",
        "coords": "61,53",
        "optimal": 0
      }
    ],
    "58-60": [
      {
        "location": "Fellin Island in Fishing Guild",
        "coords": "88,27",
        "optimal": 1
      },
      {
        "location": "Dorpat",
        "coords": "28,72",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "78,14",
        "optimal": 0
      },
      {
        "location": "Pernau",
        "coords": "90,10",
        "optimal": 0
      },
      {
        "location": "Pernau",
        "coords": "94,12",
        "optimal": 0
      },
      {
        "location": "Cesis",
        "coords": "46,70",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "9,24",
        "optimal": 0
      }
    ]
  },
  "Steel Harpoon": {
    "63-73": [
      {
        "location": "Dorpat",
        "coords": "81,90",
        "optimal": 1,
        "notes": "bank @ Dorpat Outpost"
      },
      {
        "location": "Fellin Island",
        "coords": "13,71",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "87,81",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "14,69",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "14,72",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "16,72",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "85,84",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "86,82",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "87,82",
        "optimal": 0
      },
      {
        "location": "Broceliande Forest",
        "coords": "40,93",
        "optimal": 0
      },
      {
        "location": "Broceliande Forest",
        "coords": "41,92",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "6,23",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "7,33",
        "optimal": 0
      },
      {
        "location": "Witches I",
        "coords": "15,56",
        "optimal": 0
      },
      {
        "location": "Witches I",
        "coords": "82,42",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "91,13",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "92,13",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "92,15",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "95,11",
        "optimal": 0
      },
      {
        "location": "Narwa",
        "coords": "95,15",
        "optimal": 0
      }
    ],
    "75-95": [
      {
        "location": "Fellin Island",
        "coords": "15,69",
        "optimal": 1,
        "notes": "Will need to navigate around Level 62 Nagas"
      },
      {
        "location": "Fellin Island",
        "coords": "12,71",
        "optimal": 0
      },
      {
        "location": "Fellin Island",
        "coords": "13,69",
        "optimal": 0
      }
    ]
  },
  "Iron Fishing Rod": {
    "65-80": [
      {
        "location": "Fellin Island in Fishing Guild",
        "coords": "89,31",
        "optimal": 1
      },
      {
        "location": "Whiland Long Bridge",
        "coords": "46,54",
        "optimal": 0
      },
      {
        "location": "Whiland Long Bridge",
        "coords": "49,52",
        "optimal": 0
      }
    ]
  },
  "Poseidon's Trident": {
    "95-103": [
      {
        "location": "Ancient Dungeon",
        "coords": "34,87",
        "optimal": 1
      },
      {
        "location": "Witches I",
        "coords": "9,83",
        "optimal": 0
      },
      {
        "location": "Witches I",
        "coords": "65,40",
        "optimal": 0
      },
      {
        "location": "Witches I",
        "coords": "67,37",
        "optimal": 0
      }
    ],
    "106-120": [
      {
        "location": "Lost Woods",
        "coords": "70,45",
        "optimal": 1,
        "notes": "Will have to kill one level 45 Bear, and navigate around others. Bank in Whiland."
      },
      {
        "location": "Rakblood",
        "coords": "77,73",
        "optimal": 1,
        "notes": "Not very close to chest, and will have to navigate around mobs as high as lvl 108."
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "13,39",
        "optimal": 0
      },
      {
        "location": "Poseidon's Illusion Guild",
        "coords": "17,39",
        "optimal": 0
      }
    ]
  }
}

export default fishingSpots;