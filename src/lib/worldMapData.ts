export type WorldMapData = {
  name: string
  img?: string
  full?: string // do not actually set this, it's dynamically set in the code.
  coords: string
  href?: string
}
const worldMapData: WorldMapData[] = [
  {
    "name": "Dorpat",
    "img": "dorpat-sm.gif",
    "coords": "626,276,392,394,626,514,862,394"
  },
  {
    "name": "Whiland",
    "img": "whiland-sm.gif",
    "coords": "865,521,751,580,635,518,748,461"
  },
  {
    "name": "Lost Woods",
    "img": "lost-woods-sm.gif",
    "coords": "504,461,481,473,384,473,386,502,428,504,395,521,510,580,620,523"
  },
  {
    "name": "Rakblood",
    "img": "rakblood-sm.gif",
    "coords": "748,584,633,646,512,588,626,523"
  },
  {
    "name": "Walco",
    "img": "walco-sm.gif",
    "coords": "770,463,844,422,919,460,838,499"
  },
  {
    "name": "Void I",
    "img": "void-sm.gif",
    "coords": "963,564,1082,507,961,449,849,503"
  },
  {
    "name": "Narwa",
    "img": "narwa-sm.gif",
    "coords": "751,585,816,616,838,614,836,626,869,645,748,707,633,648"
  },
  {
    "name": "Fellin Island",
    "img": "fellin-island-sm.gif",
    "coords": "869,647,991,708,872,771,751,710,818,674"
  },
  {
    "name": "Hell",
    "img": "hell-sm.gif",
    "coords": "1377,602,1259,659,1149,600,1260,540"
  },
  {
    "name": "Blood River",
    "img": "blood-river-sm.gif",
    "coords": "960,570,1082,631,967,693,844,629,893,596,838,595,841,574"
  },
  {
    "name": "Cathedral",
    "img": "cathedral-sm.gif",
    "coords": "1309,560,1377,592,1410,576,1407,550,1328,509,1309,520"
  },
  {
    "name": "Dragon's Lair",
    "img": "dragons-lair-sm.gif",
    "coords": "692,683,808,746,701,808,671,799,572,799,569,776,641,777,584,743"
  },
  {
    "name": "Fire Tower",
    "img": "fire-tower-sm.gif",
    "coords": "1070,494,1095,488,1087,436,1074,427,1054,439,1052,484"
  },
  {
    "name": "Ice Tower",
    "img": "ice-tower-sm.gif",
    "coords": "1030,465,1048,459,1052,428,1049,406,1032,390,1017,406,1017,458"
  },
  {
    "name": "Nature Tower",
    "img": "nature-tower.png",
    "coords": "986,453,1005,447,1002,395,986,381,970,392,964,440"
  },
  {
    "name": "Wittensten",
    "img": "wittensten-sm.gif",
    "coords": "1462,592,1562,542,1651,593,1625,605,1650,612,1647,624,1575,634,1559,641"
  },
  {
    "name": "Broceliande Forest",
    "img": "broceliande-forest-sm.gif",
    "coords": "1471,459,1361,523,1477,579,1590,519,1549,492,1632,494,1616,447,1481,450"
  },
  {
    "name": "Devil's Triangle",
    "href": "https://www.tsukino.com/devil/",
    "coords": "1350,270,1112,397,1353,519,1590,396,1429,310,1547,310,1550,281,1369,281"
  },
  {
    "name": "Heaven",
    "img": "heaven-sm.gif",
    "coords": "988,328,1027,312,1027,290,1074,290,1115,270,1229,330,1109,390"
  },
  {
    "name": "Clouds",
    "img": "clouds-sm.gif",
    "coords": "875,266,753,330,874,392,986,332,922,295,956,289,954,266"
  },
  {
    "name": "Pernau",
    "img": "pernau-sm.gif",
    "coords": "721,228,635,269,726,311,790,270"
  },
  {
    "name": "Cesis",
    "img": "cesis-sm.gif",
    "coords": "732,77,753,87,811,84,814,109,786,110,850,140,729,204,603,141"
  },
  {
    "name": "Ancient Dungeon",
    "img": "ancient-dungeon-sm.gif",
    "coords": "431,14,655,9,663,45,708,74,595,134,485,75,547,46,427,46"
  },
  {
    "name": "Reval",
    "img": "reval-sm.gif",
    "coords": "595,140,573,145,499,137,497,167,556,170,477,211,601,276,723,213"
  },
  {
    "name": "Moche I",
    "img": "moche-i-sm.gif",
    "coords": "512,241,595,285,515,330,428,282"
  },
  {
    "name": "Moche II",
    "img": "moche-ii-sm.gif",
    "coords": "459,213,462,181,368,181,362,217,329,235,412,280,499,235"
  },
  {
    "name": "Tutorial Island",
    "img": "tutorial-island-sm.gif",
    "coords": "250,331,332,293,250,250,178,293"
  },
  {
    "name": "Every Man's Land",
    "img": "every-mans-land-sm.gif",
    "coords": "507,333,414,281,264,279,272,300,379,303,330,329,415,377"
  },
  {
    "name": "Dungeon I",
    "img": "dungeon-i-sm.gif",
    "coords": "185,257,8,349,65,392,30,389,33,417,140,420,185,447,367,360"
  },
  {
    "name": "Dungeon II",
    "img": "dungeon-ii-sm.gif",
    "coords": "187,452,28,531,100,565,43,563,40,594,149,594,185,614,346,540"
  },
  {
    "name": "Dungeon III",
    "img": "dungeon-iii-sm.gif",
    "coords": "188,622,96,661,11,660,12,682,80,691,43,701,187,781,332,699"
  },
  {
    "name": "Dungeon IV",
    "img": "dungeon-iv-sm.gif",
    "coords": "188,787,43,865,187,942,330,859"
  },
  {
    "name": "No Man's Land",
    "img": "no-mans-land-sm.gif",
    "coords": "689,684,516,773,345,681,406,643,307,641,302,615,466,612,519,593"
  },
  {
    "name": "Witches I",
    "img": "witches-i-sm.gif",
    "coords": "1477,601,1312,691,1478,775,1533,754,1609,753,1607,728,1578,726,1647,688"
  },
  {
    "name": "Witches II",
    "img": "witches-ii-sm.gif",
    "coords": "1477,778,1644,862,1476,949,1440,934,1373,934,1361,906,1394,908,1310,864"
  },
  {
    "name": "Core of Knowledge",
    "img": "core-of-knowledge-sm.gif",
    "coords": "1301,861,1225,909,1268,919,1268,946,1168,935,1143,952,1117,940,1043,937,1039,911,1071,915,975,861,1142,782"
  },
  {
    "name": "Star of Knowledge",
    "img": "star-of-knowledge-sm.gif",
    "coords": "1304,687,1238,729,1285,735,1284,760,1187,752,1150,774,1102,752,1076,751,1065,735,978,688,1140,608"
  },
  {
    "name": "Purgatory",
    "img": "purgatory-sm.gif",
    "coords": "1084,508,1206,445,1320,507,1205,571"
  },
  {
    "name": "Lost Relic",
    "img": "lost-relic-sm.gif",
    "coords": "992,712,1108,773,991,830,878,770"
  },
  {
    "name": "Atlantis",
    "img": "atlantis-sm.gif",
    "coords": "868,778,983,835,871,896,762,835"
  },
  {
    "name": "No Man's Dungeon",
    "img": "no-mans-dungeon-sm.gif",
    "coords": "513,777,689,859,632,893,759,896,761,921,576,921,532,953,343,867"
  }
]

export default worldMapData;