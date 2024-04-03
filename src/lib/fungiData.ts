type FungiData = {
  spore_id: number
  level: number
  cost: number | string
  xp: number
  time: number
  sells_for: number | string
  spore: string
  grows_id: number
  grows: string
  spores_npc: string
  spores_npc_id: number | string
  shroom_npc: string
  shroom_npc_id: number | string
  locations: FungiLocation[]
}

type FungiLocation = {
  l: string
  n: number
}


const fungiData: FungiData[] = [
  {
    "spore_id": 4239,
    "level": 1,
    "cost": 5,
    "xp": 5,
    "time": 3,
    "sells_for": "",
    "spore": "Hen of the Woods Mushroom Spores",
    "grows_id": 4215,
    "grows": "Hen of the Woods Mushroom",
    "spores_npc": "Dorpat Farmer",
    "spores_npc_id": 182,
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Reval",
        "n": 13
      }
    ]
  },
  {
    "spore_id": 4241,
    "level": 5,
    "cost": 35,
    "xp": 11,
    "time": 6,
    "sells_for": "",
    "spore": "Shaggy Mane Mushroom Spores",
    "grows_id": 4217,
    "grows": "Shaggy Mane Mushroom",
    "spores_npc": "Dorpat Farmer",
    "spores_npc_id": 182,
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Moche I",
        "n": 10
      }
    ]
  },
  {
    "spore_id": 4219,
    "level": 10,
    "cost": 75,
    "xp": 19,
    "time": 10,
    "sells_for": 75,
    "spore": "Russula Spores",
    "grows_id": 227,
    "grows": "Russula",
    "spores_npc": "Narwa Farmer",
    "spores_npc_id": 242,
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 33
      }
    ]
  },
  {
    "spore_id": 4220,
    "level": 15,
    "cost": 100,
    "xp": 24,
    "time": 12,
    "sells_for": 100,
    "spore": "Dark Mushroom Spores",
    "grows_id": 235,
    "grows": "Dark Mushroom",
    "spores_npc": "Narwa Farmer",
    "spores_npc_id": 242,
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 28
      }
    ]
  },
  {
    "spore_id": 4235,
    "level": 20,
    "cost": 140,
    "xp": 28,
    "time": 13,
    "sells_for": "",
    "spore": "Morel Mushroom Spores",
    "grows_id": 4211,
    "grows": "Morel Mushroom",
    "spores_npc": "Narwa Farmer",
    "spores_npc_id": 242,
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Dorpat",
        "n": 10
      }
    ]
  },
  {
    "spore_id": 4236,
    "level": 25,
    "cost": "",
    "xp": 30,
    "time": 13,
    "sells_for": "",
    "spore": "Porcini Mushroom Spores",
    "grows_id": 4212,
    "grows": "Porcini Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Rakblood",
        "n": 13
      }
    ]
  },
  {
    "spore_id": 4242,
    "level": 30,
    "cost": "",
    "xp": 33,
    "time": 13,
    "sells_for": "",
    "spore": "Amanita Mushroom Spores",
    "grows_id": 4218,
    "grows": "Amanita Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Moche II",
        "n": 16
      }
    ]
  },
  {
    "spore_id": 4221,
    "level": 35,
    "cost": "",
    "xp": 38,
    "time": 14,
    "sells_for": 275,
    "spore": "Boletus Spores",
    "grows_id": 237,
    "grows": "Boletus",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 33
      }
    ]
  },
  {
    "spore_id": 4222,
    "level": 40,
    "cost": "",
    "xp": 44,
    "time": 14,
    "sells_for": 350,
    "spore": "Blue Magic Mushroom Spores",
    "grows_id": 236,
    "grows": "Blue Magic Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 28
      }
    ]
  },
  {
    "spore_id": 4223,
    "level": 45,
    "cost": "",
    "xp": 50,
    "time": 15,
    "sells_for": 400,
    "spore": "Golden Mushroom Spores",
    "grows_id": 238,
    "grows": "Golden Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 3
      },
      {
        "l": "Lost Woods",
        "n": 41
      }
    ]
  },
  {
    "spore_id": 4224,
    "level": 50,
    "cost": "",
    "xp": 55,
    "time": 15,
    "sells_for": 450,
    "spore": "Orange Mushroom Spores",
    "grows_id": 242,
    "grows": "Orange Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Lost Woods",
        "n": 29
      }
    ]
  },
  {
    "spore_id": 4231,
    "level": 55,
    "cost": "",
    "xp": 60,
    "time": 16,
    "sells_for": "",
    "spore": "Bleeding Tooth Mushroom Spores",
    "grows_id": 4207,
    "grows": "Bleeding Tooth Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Rakblood",
        "n": 13
      }
    ]
  },
  {
    "spore_id": 4225,
    "level": 60,
    "cost": "",
    "xp": 70,
    "time": 18,
    "sells_for": 600,
    "spore": "Silver Mushroom Spores",
    "grows_id": 239,
    "grows": "Silver Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 18
      }
    ]
  },
  {
    "spore_id": 4226,
    "level": 65,
    "cost": "",
    "xp": 110,
    "time": 25,
    "sells_for": 650,
    "spore": "Moldy Mushroom Spores",
    "grows_id": 240,
    "grows": "Moldy Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 6
      },
      {
        "l": "Lost Woods",
        "n": 26
      }
    ]
  },
  {
    "spore_id": 4227,
    "level": 70,
    "cost": "",
    "xp": 125,
    "time": 28,
    "sells_for": 700,
    "spore": "Glowing Mushroom Spores",
    "grows_id": 241,
    "grows": "Glowing Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 21
      },
      {
        "l": "Lost Woods",
        "n": 27
      }
    ]
  },
  {
    "spore_id": 4228,
    "level": 75,
    "cost": "",
    "xp": 140,
    "time": 31,
    "sells_for": 750,
    "spore": "Poisoned Mushroom Spores",
    "grows_id": 243,
    "grows": "Poisoned Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 1
      },
      {
        "l": "Lost Woods",
        "n": 31
      }
    ]
  },
  {
    "spore_id": 4229,
    "level": 80,
    "cost": "",
    "xp": 155,
    "time": 33,
    "sells_for": 800,
    "spore": "Fire Mushroom Spores",
    "grows_id": 245,
    "grows": "Fire Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 2
      },
      {
        "l": "Hell",
        "n": 10
      }
    ]
  },
  {
    "spore_id": 4232,
    "level": 85,
    "cost": "",
    "xp": 165,
    "time": 35,
    "sells_for": "",
    "spore": "Destroying Angel Mushroom Spores",
    "grows_id": 4208,
    "grows": "Destroying Angel Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Fellin",
        "n": 11
      }
    ]
  },
  {
    "spore_id": 4230,
    "level": 90,
    "cost": "",
    "xp": 185,
    "time": 38,
    "sells_for": 1000,
    "spore": "Large Fire Mushroom Spores",
    "grows_id": 244,
    "grows": "Large Fire Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "Whiland Shopkeeper",
    "shroom_npc_id": 224,
    "locations": [
      {
        "l": "Whiland",
        "n": 3
      },
      {
        "l": "Hell",
        "n": 17
      }
    ]
  },
  {
    "spore_id": 4234,
    "level": 95,
    "cost": "",
    "xp": 200,
    "time": 41,
    "sells_for": "",
    "spore": "Green Amanita Mushroom Spores",
    "grows_id": 4210,
    "grows": "Green Amanita Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Dungeon II",
        "n": 22
      }
    ]
  },
  {
    "spore_id": 4233,
    "level": 100,
    "cost": "",
    "xp": 220,
    "time": 45,
    "sells_for": "",
    "spore": "King Trumpet Mushroom Spores",
    "grows_id": 4209,
    "grows": "King Trumpet Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Dungeon III",
        "n": 25
      }
    ]
  },
  {
    "spore_id": 4237,
    "level": 105,
    "cost": "",
    "xp": 250,
    "time": 50,
    "sells_for": "",
    "spore": "Parasol Mushroom Spores",
    "grows_id": 4213,
    "grows": "Parasol Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Star Of Knowledge",
        "n": 25
      }
    ]
  },
  {
    "spore_id": 4238,
    "level": 110,
    "cost": "",
    "xp": 280,
    "time": 55,
    "sells_for": "",
    "spore": "Black Trumpet Mushroom Spores",
    "grows_id": 4214,
    "grows": "Black Trumpet Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Void I",
        "n": 22
      }
    ]
  },
  {
    "spore_id": 4240,
    "level": 115,
    "cost": "",
    "xp": 320,
    "time": 55,
    "sells_for": "",
    "spore": "Electric Mushroom Spores",
    "grows_id": 4216,
    "grows": "Electric Mushroom",
    "spores_npc": "",
    "spores_npc_id": "",
    "shroom_npc": "",
    "shroom_npc_id": "",
    "locations": [
      {
        "l": "Atlantis",
        "n": 20
      }
    ]
  }
];

export default fungiData;