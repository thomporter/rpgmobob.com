export type HomeLink = {
  cat: string
  title: string
  link: string
  badge?: string
  notes?: string
  notes_link?: string
}

const homeLinks: HomeLink[] = [
  {
    "cat": "Bob's Creations",
    "title": "Combat Level Calculator",
    "link": "/cl",
  },
  {
    "cat": "Bob's Creations",
    "title": "Fungiculture App",
    "link": "/fungiculture",
    "badge": "New!",
  },
  {
    "cat": "Bob's Creations",
    "title": "Mining Maps",
    "link": "/mining-maps",
    "notes": "maps built by someone else",
    "notes_link": "https://www.zybuluo.com/sulphate/note/1241013"
  },
  {
    "cat": "Bob's Creations",
    "title": "Interactive World Map",
    "link": "/world-map",
  },
  {
    "cat": "Bob's Creations",
    "title": "Fishing Spots",
    "link": "/fishing-spots",
  },
  {
    "cat": "Bob's Creations",
    "title": "Spell DPS & XPS",
    "link": "http://modb.rpgmobob.com/#/spells",
  },
  {
    "cat": "Bob's Creations",
    "title": "Farming App",
    "link": "/farming",
  },
  {
    "cat": "Bob's Creations",
    "title": "2018 Pet Update",
    "link": "/pet-update",
  },
  {
    "cat": "Bob's Creations",
    "title": "Feather Data",
    "link": "/feathers",
  },
  {
    "cat": "Calculators",
    "title": "Tsukino's Combat Level Calculator",
    "link": "https://www.tsukino.com/cl/",
  },
  {
    "cat": "Calculators",
    "title": "Another Combat Level Calculator",
    "link": "http://kingtesting123.x10host.com/combatcalculator.html",
    "notes": "Credit: g o d & tsukino.",
  },
  {
    "cat": "Calculators",
    "title": "Skill Calculator <zac>",
    "link": "https://docs.google.com/spreadsheets/d/1LuCHslHbPeHmJRL2sQw13nD3CZ0jDqrEGTERNHE05dU/edit",
    "badge": "Hot!",
    "notes": "updates/change log",
    "notes_link": "https://forums.mo.ee/viewtopic.php?f=10&t=8298"
  },
  {
    "cat": "Calculators",
    "title": "PVP Combat Simulator <uooyd>",
    "link": "https://docs.google.com/spreadsheets/d/1rbpix124q97dFihh6J_pvyPRiN4BqVXoiWuKyP_wd5s/edit?usp=sharin",
  },
  {
    "cat": "Calculators",
    "title": "RPG MO Combat XP/HR Guide ",
    "link": "https://docs.google.com/spreadsheets/d/1rSilyQePIhGLQRzzOFS2MGW2VnMehCQhAJq7X0_8I8A/edit",
    "notes": "work in progress",
  },
  {
    "cat": "Calculators",
    "title": "Breeding Calculator <zac>",
    "link": "https://docs.google.com/spreadsheets/d/14pah5qxdgnf9M8fPz2TlhqoTqr3JKTBan--WPL1u2JQ/edit#gid=0",
  },
  {
    "cat": "Loot",
    "title": "Boss Retaliation Rewards",
    "link": "http://mokk.rpgmobob.com/#/RetaliationChest",
    "notes": "MO@tw - not updated in a bit.",
  },
  {
    "cat": "Loot",
    "title": "Death's Deal Contents",
    "link": "http://mokk.rpgmobob.com/#/DeathsDeal",
    "notes": "MO@tw - not updated in a bit.",
  },
  {
    "cat": "Loot",
    "title": "Easter Egg Contents",
    "link": "http://mokk.rpgmobob.com/#/EasterEggs",
    "notes": "MO@tw - not updated in a bit.",
  },
  {
    "cat": "Loot",
    "title": "Present Contents",
    "link": "http://mokk.rpgmobob.com/#/Presents",
    "notes": "MO@tw - not updated in a bit.",
  },
  {
    "cat": "Loot",
    "title": "Sunken Treasure Contents",
    "link": "http://mokk.rpgmobob.com/#/SunkenTreasure",
    "notes": "MO@tw - not updated in a bit.",
  },
  {
    "cat": "Maps",
    "title": "Interactive Lost Woods Map",
    "link": "https://www.tsukino.com/lw/",
    "badge": "New!",
    "notes": "(by <tsukino>)",
  },
  {
    "cat": "Maps",
    "title": "Is it Safe?",
    "link": "https://www.paintchips.pk/safe/",
    "badge": "New!",
    "notes": "Paintchip's NML Danger Level Map",
  },
  {
    "cat": "Maps",
    "title": "Whiland Shroom Farming Guide",
    "link": "https://imgur.com/a/8339wkg",
    "badge": "New!",
    "notes": "by majestic",
  },
  {
    "cat": "Maps",
    "title": "Purgatory Map",
    "link": "https://drive.google.com/file/d/10t2tIDnJSXvEKUuchjMprVXVvYijFOi7/view",
    "notes": "1 mob between the gates and combat-free path to chest",
  },
  {
    "cat": "Maps",
    "title": "Lost Woods Map",
    "link": "https://i.imgur.com/F8elEKQ.jpg",
    "notes": "Updated for the new Lost Woods",
  },
  {
    "cat": "Maps",
    "title": "Lost Woods Paths",
    "link": "https://imgur.com/a/q1PKrXm",
    "badge": "New!",
    "notes": "Shows paths to various resources & bosses in Lost woods.",
  },
  {
    "cat": "Maps",
    "title": "Lost Relic Map",
    "link": "https://drive.google.com/file/d/1U3rWmTXIk3gIbAX7yVwv20fZ98RrW3Ve/view",
    "notes": "Shows paths to Kombu, Pyropia & Palmaria plants for farming",
  },
  {
    "cat": "Maps",
    "title": "Tsukino's Interactive Devil's Triangle Map",
    "link": "https://www.tsukino.com/devil",
  },
  {
    "cat": "Other",
    "title": "Dungeon Themes",
    "link": "https://rpg-mo.fandom.com/wiki/Dungeon_Themes",
    "badge": "New!",
    "notes": "Dungeon Themes on the Wikia site by Ethelle",
  },
  {
    "cat": "Other",
    "title": "Fishing Locations for Poseidon's Blessing",
    "link": "http://modb.rpgmobob.com/#/items/3833/craft",
    "notes": "Fishing Spots you can get Poseidon's Blessing from.",
  },
  {
    "cat": "Other",
    "title": "How Strength Affect Hit Chance <death312>",
    "link": "https://drive.google.com/file/d/1GXOuze3TeEtNxpsr-6jNhYTHR2v9bmEp/view",
  },
  {
    "cat": "Other",
    "title": "Roaming Pets on Island",
    "link": "https://imgur.com/a/GvsEv",
    "notes": "Open Breeding Pens",
  },
  {
    "cat": "Other",
    "title": "Ship Matts",
    "link": "https://forums.mo.ee/viewtopic.php?f=10&t=4535&p=10127",
    "notes": "Materials required for building the ship on your island",
  },
  {
    "cat": "Other",
    "title": "Island Themes",
    "link": "http://rpg-mo.wikia.com/wiki/Island_Themes",
    "notes": "Wikia",
  },
  {
    "cat": "Quests",
    "title": "Skill Quest List",
    "link": "https://mo.at.tw/#/SkillQuest",
    "badge": "Updated!",
    "notes": "MO@tw",
  },
  {
    "cat": "Quests",
    "title": "Kill Quets",
    "link": "http://rpg-mo.wikia.com/wiki/Quests",
    "notes": "Wikia",
  },
  {
    "cat": "Videos",
    "title": "Disco Funkslinger's Tutorial Island",
    "link": "http://www.discofunkslinger.xyz/",
    "badge": "New!",
    "notes": "A series of instructional videos for RPG MO",
  },
  {
    "cat": "Videos",
    "title": "How to Breed <rhythm>",
    "link": "https://www.youtube.com/watch?v=IZFVD4iRx-Q&list=PLrEIdlYSb_SEcy5OdQcQVlwMd-KablBWT",
    "notes": "Has good starter info on breeding as well as other aspects of the game.",
  },
  {
    "cat": "Videos",
    "title": "How to Mage Easily & Effectively <rhythm>",
    "link": "https://www.youtube.com/watch?v=cE56tbHDoHE&list=PLrEIdlYSb_SHPldlnTL-JCY9-a0wHhvkM",
    "notes": "Has good starter info on magic as well as other aspects of the game.",
  },
  {
    "cat": "Screenshots",
    "title": "1000 hrs 2x",
    "link": "https://imgur.com/gallery/T17BQRf",
    "badge": "New!",
    "notes": "Over 1000 hrs of 2x on January 17th, 2022 celebrating <xor> and <rapota>'s birthdays!",
  },
  {
    "cat": "Screenshots",
    "title": "Decayed Mummy Boss",
    "link": "https://imgur.com/gallery/1itkrQv",
    "badge": "New!",
  },
  {
    "cat": "Screenshots",
    "title": "Santa's 2021 Christmas Maze",
    "link": "https://imgur.com/gallery/T47I9kp",
    "badge": "New!",
  },
  {
    "cat": "Screenshots",
    "title": "130 Strength.  Finally.",
    "link": "https://imgur.com/gallery/dsEpL5p",
  },
  {
    "cat": "Screenshots",
    "title": "1 Billion Coin",
    "link": "https://imgur.com/gallery/G67sVbh",
    "badge": "New!",
  },
  {
    "cat": "Screenshots",
    "title": "Bob & Blu Arching Together in Purgatory",
    "link": "https://imgur.com/gallery/Iei1sx5",
    "badge": "New!",
    "notes": "Me and the wife teaming up on Abandoned Blood Eagle Egg",
  },
  {
    "cat": "Screenshots",
    "title": "500 Hours of 2X",
    "link": "https://imgur.com/b5XViL6",
    "notes": "Christmas 2017",
  },
  {
    "cat": "Screenshots",
    "title": "600 Hours of 2X",
    "link": "https://imgur.com/gallery/M6jHYcd",
    "notes": "In loving memory of Halo, Maru's cat!",
  },
  {
    "cat": "Screenshots",
    "title": "Bob and his Elder Jormungandr",
    "link": "https://imgur.com/gallery/bI4DqUK",
  },
  {
    "cat": "Screenshots",
    "title": "Boss Island",
    "link": "https://imgur.com/DEhmWCw",
    "notes": "zoomed in",
    "notes_link": "https://imgur.com/AEzxcTq"
  },
  {
    "cat": "Screenshots",
    "title": "Cuddle Bear",
    "link": "https://imgur.com/6N3XhmX",
  }
];

export default homeLinks;