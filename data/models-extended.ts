import type { CompatibilityGroup } from "./compatibility-types";

/**
 * Extended retailer catalog — Huawei/Honor, Transsion brands, global OEMs.
 * Pairings reflect common tempered-glass bins; always verify cutouts physically.
 */
export const extendedCompatibilityGroups: CompatibilityGroup[] = [
  // —— Huawei ——
  {
    id: 200,
    brand: "Huawei",
    models: [
      "Huawei P30",
      "Huawei P30 Pro",
      "Huawei P30 Lite",
      "Huawei Nova 4e",
    ],
    glassSize:
      '6.1" / 6.47" / 6.15" · dewdrop & notch era · separate molds per SKU',
  },
  {
    id: 201,
    brand: "Huawei",
    models: ["Huawei P40", "Huawei P40 Pro", "Huawei P40 Pro+", "Huawei Nova 7 Pro"],
    glassSize:
      '6.1" / 6.58" · punch-hole island · quad-curve Pro uses curved-friendly glass',
  },
  {
    id: 202,
    brand: "Huawei",
    models: ["Huawei P50", "Huawei P50 Pro"],
    glassSize:
      '6.5" / 6.6" · flagship punch-hole flat template (foldables use separate SKUs)',
  },
  {
    id: 203,
    brand: "Huawei",
    models: ["Huawei P60", "Huawei P60 Pro", "Huawei Pura 70", "Huawei Pura 70 Pro"],
    glassSize:
      '6.67" · island camera era · verify speaker mesh vs import listings',
  },
  {
    id: 204,
    brand: "Huawei",
    models: ["Huawei Mate 30", "Huawei Mate 30 Pro", "Huawei Mate 30 RS"],
    glassSize:
      '6.62" · notch / waterfall Pro · curved Pro kits differ from flat Mate 30',
  },
  {
    id: 205,
    brand: "Huawei",
    models: ["Huawei Mate 40", "Huawei Mate 40 Pro", "Huawei Mate 40 Pro+", "Huawei Mate 40 RS"],
    glassSize:
      '6.5" / 6.76" · pill-notch Pro · star ring camera — dedicated mold',
  },
  {
    id: 206,
    brand: "Huawei",
    models: ["Huawei Mate 50", "Huawei Mate 50 Pro", "Huawei Mate 60", "Huawei Mate 60 Pro"],
    glassSize:
      '6.7" · punch-hole / island variants · satellite badge trims — match print',
  },
  {
    id: 207,
    brand: "Huawei",
    models: [
      "Huawei Nova 9",
      "Huawei Nova 9 SE",
      "Huawei Nova 10",
      "Huawei Nova 10 SE",
      "Huawei Nova 11",
      "Huawei Nova 12",
    ],
    glassSize:
      '6.57" / 6.78" · Nova portrait line · SE flat vs curved siblings differ',
  },
  {
    id: 208,
    brand: "Huawei",
    models: ["Huawei Nova Y70", "Huawei Nova Y90", "Huawei Enjoy 50", "Huawei Enjoy 60"],
    glassSize:
      '6.75" · Enjoy/Nova Y tall punch-hole · budget Huawei rack',
  },
  {
    id: 209,
    brand: "Huawei",
    models: ["Huawei Y9 Prime (2019)", "Huawei Y9s", "Huawei P Smart Z"],
    glassSize:
      '6.59" · pop-up camera full-screen · pop-up slot in glass — confirm',
  },

  // —— Honor ——
  {
    id: 220,
    brand: "Honor",
    models: ["Honor 50", "Honor 50 Lite", "Honor 60", "Honor 70", "Honor 80", "Honor 90"],
    glassSize:
      '6.57" / 6.67" · number-series curved portraits · Lite uses flat mold',
  },
  {
    id: 221,
    brand: "Honor",
    models: ["Honor Magic 4", "Honor Magic 4 Pro", "Honor Magic 5", "Honor Magic 5 Pro"],
    glassSize:
      '6.81" · flagship quad-curve · Magic eye camera ring — thick island cut',
  },
  {
    id: 222,
    brand: "Honor",
    models: ["Honor Magic 6", "Honor Magic 6 Pro"],
    glassSize:
      '6.78" · 2024 Magic line · pill-shaped island — verify vs Magic 5 bins',
  },
  {
    id: 223,
    brand: "Honor",
    models: ["Honor X8", "Honor X8 5G", "Honor X9", "Honor X9 5G", "Honor X7", "Honor X6"],
    glassSize:
      '6.7" · X-series punch-hole slab · regional naming X6/X7/X8/X9 shares bins',
  },
  {
    id: 224,
    brand: "Honor",
    models: ["Honor X40", "Honor X40 GT", "Honor X50", "Honor X50i", "Honor X50i+"],
    glassSize:
      '6.67" / 6.78" · curved X40 vs flat X50i · verify curve-safe SKU',
  },
  {
    id: 225,
    brand: "Honor",
    models: ["Honor Play 40", "Honor Play 50", "Honor Play 50 Plus", "Honor Play 8T"],
    glassSize:
      '6.56" / 6.8" · Play budget dewdrop/punch · tall aspect universal rack',
  },
  {
    id: 226,
    brand: "Honor",
    models: ["Honor 200", "Honor 200 Lite", "Honor 200 Pro"],
    glassSize:
      '6.7" · 2024 portrait AI line · Pro curved vs Lite flat',
  },
  {
    id: 227,
    brand: "Honor",
    models: ["Honor X9b", "Honor X9a", "Honor Magic Lite"],
    glassSize:
      '6.78" · ultra-bounce display marketing · same outer glass as X9 retail bins',
  },

  // —— Tecno (universal / series bins) ——
  {
    id: 240,
    brand: "Tecno",
    models: [
      "Tecno Spark 10",
      "Tecno Spark 10 Pro",
      "Tecno Spark 10C",
      "Tecno Spark 20",
      "Tecno Spark 20 Pro",
      "Tecno Spark 20C",
    ],
    glassSize:
      '6.56" / 6.8" · Spark punch-hole family · C trims dewdrop — dual universal bins',
  },
  {
    id: 241,
    brand: "Tecno",
    models: ["Tecno Spark Go 2023", "Tecno Spark Go 2024", "Tecno Pop 7", "Tecno Pop 8"],
    glassSize:
      '6.56" · entry dewdrop · labeled Spark Go / Pop interchange in many shops',
  },
  {
    id: 242,
    brand: "Tecno",
    models: ["Tecno Camon 19", "Tecno Camon 19 Pro", "Tecno Camon 20", "Tecno Camon 20 Pro"],
    glassSize:
      '6.8" · Camon portrait punch · Pro models wider camera slot — verify',
  },
  {
    id: 243,
    brand: "Tecno",
    models: ["Tecno Camon 30", "Tecno Camon 30 Pro", "Tecno Camon 30 Premier"],
    glassSize:
      '6.78" · Camon 30 LOFIC sensor housing · dedicated island cut',
  },
  {
    id: 244,
    brand: "Tecno",
    models: ["Tecno Pova 5", "Tecno Pova 5 Pro", "Tecno Pova 6", "Tecno Pova 6 Neo"],
    glassSize:
      '6.78" · gaming Pova LED strips · camera deck taller on Pro',
  },
  {
    id: 245,
    brand: "Tecno",
    models: ["Tecno Phantom X", "Tecno Phantom X2", "Tecno Phantom X2 Pro"],
    glassSize:
      '6.7" · curved Phantom flagship · retracting cam on X2 Pro — specialty SKU',
  },

  // —— Infinix ——
  {
    id: 260,
    brand: "Infinix",
    models: [
      "Infinix Hot 30",
      "Infinix Hot 30i",
      "Infinix Hot 40",
      "Infinix Hot 40 Pro",
      "Infinix Hot 40i",
    ],
    glassSize:
      '6.56" / 6.78" · Hot punch-hole · i trims dewdrop — verify packaging',
  },
  {
    id: 261,
    brand: "Infinix",
    models: ["Infinix Note 30", "Infinix Note 30 Pro", "Infinix Note 40", "Infinix Note 40 Pro"],
    glassSize:
      '6.78" · Note gaming line · colored LED rear affects mold branding only',
  },
  {
    id: 262,
    brand: "Infinix",
    models: ["Infinix Zero 30", "Infinix Zero 40", "Infinix GT 10 Pro"],
    glassSize:
      '6.78" · curved Zero portrait · GT transparent cyber design — same outer often',
  },
  {
    id: 263,
    brand: "Infinix",
    models: ["Infinix Smart 7", "Infinix Smart 8", "Infinix Smart 8 Plus"],
    glassSize:
      '6.6" · Smart dewdrop universal · plus variants taller — generic 6.6 rack',
  },

  // —— Itel ——
  {
    id: 280,
    brand: "Itel",
    models: ["Itel A60", "Itel A60s", "Itel A70", "Itel A05s", "Itel Vision 3"],
    glassSize:
      '6.6" / 6.75" · Vision/A dewdrop universal tempered bin',
  },
  {
    id: 281,
    brand: "Itel",
    models: ["Itel P40", "Itel P40+", "Itel P55", "Itel P55+", "Itel S23"],
    glassSize:
      '6.6" · P/S punch-hole budget · shared Transsion OEM rack with Tecno Pop',
  },
  {
    id: 282,
    brand: "Itel",
    models: ["Itel RS4", "Itel Power 55"],
    glassSize:
      '6.6" · gaming aesthetic housing · verify vs P55 camera outline',
  },

  // —— Nothing ——
  {
    id: 295,
    brand: "Nothing",
    models: ["Nothing Phone (1)", "Nothing Phone (2)", "Nothing Phone (2a)", "Nothing Phone (2a) Plus"],
    glassSize:
      '6.55" / 6.7" · flat Glyph LED rear · Phone (1)/(2) glyph slots — match Glyph cutouts',
  },
  {
    id: 296,
    brand: "Nothing",
    models: ["Nothing Phone (3a)", "Nothing Phone (3a) Pro"],
    glassSize:
      '6.77" · 2025 mid-range punch-hole · verify vs (2a) Plus interchange',
  },

  // —— Motorola ——
  {
    id: 300,
    brand: "Motorola",
    models: ["Motorola Moto G54", "Motorola Moto G55", "Motorola Moto G73", "Motorola Moto G84"],
    glassSize:
      '6.5" / 6.55" · G5x punch-hole pOLED · vegan leather backs — flat glass',
  },
  {
    id: 301,
    brand: "Motorola",
    models: ["Motorola Moto G24", "Motorola Moto G34", "Motorola Moto G04", "Motorola Moto G05"],
    glassSize:
      '6.6" · 2024 entry G · dewdrop / punch refresh — generic Motorola rack',
  },
  {
    id: 302,
    brand: "Motorola",
    models: ["Motorola Edge 40", "Motorola Edge 40 Neo", "Motorola Edge 50 Fusion"],
    glassSize:
      '6.55" / 6.67" · curved Edge mid · Neo narrower — curved tempered only',
  },
  {
    id: 303,
    brand: "Motorola",
    models: ["Motorola Edge 50 Pro", "Motorola Edge 50 Ultra"],
    glassSize:
      '6.7" · flagship punch-hole island · AI camera shelf — dedicated mold',
  },
  {
    id: 304,
    brand: "Motorola",
    models: ["Motorola Moto E13", "Motorola Moto E14", "Motorola Moto E22"],
    glassSize:
      '6.5" · E-series dewdrop universal · plastic frame shops stock combo packs',
  },
  {
    id: 305,
    brand: "Motorola",
    models: ["Motorola Razr 40", "Motorola Razr 40 Ultra", "Motorola Razr 2022"],
    glassSize:
      'foldable inner + cover · folding accessory SKU only — not flat-sheet rack',
  },

  // —— LG (legacy retail clearance) ——
  {
    id: 320,
    brand: "LG",
    models: ["LG Velvet", "LG Wing"],
    glassSize:
      '6.8" / rotating Wing secondary — specialty molds · residual shop stock',
  },
  {
    id: 321,
    brand: "LG",
    models: ["LG K52", "LG K62", "LG K42", "LG Q52"],
    glassSize:
      '6.6" · K-series punch-hole universal clearance bin',
  },
  {
    id: 322,
    brand: "LG",
    models: ["LG G8X ThinQ", "LG V60 ThinQ"],
    glassSize:
      '6.4" / 6.8" · dual-screen accessory era · flat OLED flagship mold',
  },

  // —— Lenovo ——
  {
    id: 330,
    brand: "Lenovo",
    models: ["Lenovo Legion Y70", "Lenovo Legion Y90", "Lenovo Legion Duel 2"],
    glassSize:
      '6.67" / 6.92" · gaming landscape pop-up — cooling vents affect some kits',
  },
  {
    id: 331,
    brand: "Lenovo",
    models: ["Lenovo K14 Plus", "Lenovo K13 Note", "Lenovo K12"],
    glassSize:
      '6.5" / 6.8" · China-export K rack rebranded Motorola siblings sometimes',
  },

  // —— Nokia (HMD) ——
  {
    id: 340,
    brand: "Nokia",
    models: ["Nokia G50", "Nokia G60", "Nokia X30", "Nokia XR21"],
    glassSize:
      '6.38" / 6.67" · Nordic recycle-focused line · punch-hole flat bins',
  },
  {
    id: 341,
    brand: "Nokia",
    models: ["Nokia G22", "Nokia G42", "Nokia C32", "Nokia C22"],
    glassSize:
      '6.52" / 6.56" · repairable G/C dewdrop · universal European rack',
  },
  {
    id: 342,
    brand: "Nokia",
    models: ["Nokia C31", "Nokia C12", "Nokia C02"],
    glassSize:
      '6.75" / 6.3" · entry C-series · tall vs compact — separate universal sheets',
  },

  // —— Samsung expansion ——
  {
    id: 350,
    brand: "Samsung",
    models: ["Galaxy S20", "Galaxy S20+", "Galaxy S20 FE"],
    glassSize:
      '6.2" / 6.7" / 6.5" · S20 FE flat vs curved S20 — verify flat SKU for FE',
  },
  {
    id: 351,
    brand: "Samsung",
    models: ["Galaxy S21", "Galaxy S21+", "Galaxy S21 FE"],
    glassSize:
      '6.2" / 6.7" / 6.4" · contour-cut camera · FE separate flat listing common',
  },
  {
    id: 352,
    brand: "Samsung",
    models: ["Galaxy M02", "Galaxy M02s", "Galaxy A02", "Galaxy A02s"],
    glassSize:
      '6.5" · dewdrop entry twins · M/A shared tempered bin',
  },
  {
    id: 353,
    brand: "Samsung",
    models: ["Galaxy F54", "Galaxy M54"],
    glassSize:
      '6.7" · India F/M twins · punch-hole shares with select A-series racks',
  },

  // —— Xiaomi expansion ——
  {
    id: 360,
    brand: "Xiaomi",
    models: [
      "Redmi Note 9T",
      "Redmi 9T",
      "Poco M3",
      "Redmi 9 Power",
    ],
    glassSize:
      '6.53" · punch-hole + stripe-camera housing era · M3 / 9T / 9 Power regional twins — confirm SKU',
  },
  {
    id: 361,
    brand: "Xiaomi",
    models: ["Redmi A2+", "Redmi A1+", "Poco C51"],
    glassSize:
      '6.52" · dual-camera strip dewdrop · universal Redmi A rack',
  },

  // —— OnePlus expansion ——
  {
    id: 370,
    brand: "OnePlus",
    models: ["OnePlus Nord N30", "OnePlus Nord N30 SE", "OnePlus Nord CE 2 Lite"],
    glassSize:
      '6.72" / 6.56" · Nord N punch-hole · CE2 Lite dewdrop alternate mold',
  },
  {
    id: 371,
    brand: "OnePlus",
    models: ["OnePlus 10 Pro", "OnePlus 10T"],
    glassSize:
      '6.7" · second-gen Hasselblad island · 10T flat slab differs — separate SKU',
  },

  // —— Google (shop crossover) ——
  {
    id: 380,
    brand: "Google",
    models: ["Pixel 8", "Pixel 8 Pro", "Pixel 9", "Pixel 9 Pro", "Pixel 9 Pro XL"],
    glassSize:
      '6.2" / 6.7" / 6.3" / 6.8" · flat Tensor era · camera bar length varies — bar-cut kits',
  },
  {
    id: 381,
    brand: "Google",
    models: ["Pixel 7", "Pixel 7 Pro", "Pixel 7a"],
    glassSize:
      '6.3" / 6.7" · visor camera strip · a-series smaller visor — triple SKU rack',
  },

  // —— Sony (niche premium bins) ——
  {
    id: 390,
    brand: "Sony",
    models: ["Sony Xperia 1 V", "Sony Xperia 1 VI", "Sony Xperia 5 V"],
    glassSize:
      '6.5" / 6.1" · tall 21:9 flat OLED · niche importer tempered listings',
  },

  // —— Asus ——
  {
    id: 395,
    brand: "Asus",
    models: ["Asus ROG Phone 8", "Asus ROG Phone 8 Pro", "Asus ROG Phone 9"],
    glassSize:
      '6.78" · gaming bezel symmetry · air trigger vents — gamer-specific mold',
  },

  {
    id: 400,
    brand: "Tecno",
    models: ["Tecno Phantom V Fold", "Tecno Phantom V Flip"],
    glassSize:
      'foldable inner + cover · folding accessory SKU — not flat universal sheet',
  },
  {
    id: 401,
    brand: "Infinix",
    models: ["Infinix Smart 9", "Infinix Smart 9 HD"],
    glassSize:
      '6.6" · dewdrop HD+ · shared Transsion universal rack',
  },
  {
    id: 402,
    brand: "Itel",
    models: ["Itel Color Pro 5"],
    glassSize:
      '6.56" · punch-hole budget · verify vs P55 interchangeability',
  },
  {
    id: 410,
    brand: "Vivo",
    models: ["Vivo Y03", "Vivo Y03t"],
    glassSize:
      '6.56" · Y0x dewdrop entry · regional naming drift',
  },
  {
    id: 411,
    brand: "Oppo",
    models: ["Oppo A3", "Oppo A3 Pro", "Oppo A3x"],
    glassSize:
      '6.67" · A3 2024 punch-hole slab · Pro curved variant — curve SKU',
  },
  {
    id: 412,
    brand: "Realme",
    models: ["Realme GT 6", "Realme GT 6T", "Realme GT Neo 6"],
    glassSize:
      '6.78" · 8s Gen 3 performance line · curved display tempered bins',
  },
  {
    id: 420,
    brand: "Motorola",
    models: ["Motorola Moto G Stylus 5G (2024)", "Motorola Moto G Power 5G (2024)"],
    glassSize:
      '6.7" / 6.8" · NA carrier punch-hole · stylus vs battery hero SKUs',
  },
  {
    id: 421,
    brand: "Nokia",
    models: ["Nokia G310 5G", "Nokia G100"],
    glassSize:
      '6.52" · carrier prepaid dewdrop · combo rack USA/LATAM',
  },
  {
    id: 430,
    brand: "Fairphone",
    models: ["Fairphone 4", "Fairphone 5"],
    glassSize:
      '6.3" / 6.46" · modular repair-first · Fairphone-printed tempered listings',
  },

  // —— Samsung legacy flagship & volume (retailer clearance & spare parts) ——
  {
    id: 440,
    brand: "Samsung",
    models: ["Galaxy Note 20", "Galaxy Note 20 5G"],
    glassSize:
      '6.7" · flat Note20 · centered punch — distinct from Ultra curved mold',
  },
  {
    id: 441,
    brand: "Samsung",
    models: ["Galaxy Note 20 Ultra", "Galaxy Note 20 Ultra 5G"],
    glassSize:
      '6.9" · curved Ultra-type Note · camera mass — dedicated tempered cut',
  },
  {
    id: 442,
    brand: "Samsung",
    models: ["Galaxy Note 10", "Galaxy Note 10 5G"],
    glassSize:
      '6.3" · centered punch hole · flat slab flagship Note10 (not Lite)',
  },
  {
    id: 443,
    brand: "Samsung",
    models: ["Galaxy Note 10+", "Galaxy Note 10+ 5G"],
    glassSize: '6.8" · curved flagship Note10+ era · hole-punch',
  },
  {
    id: 444,
    brand: "Samsung",
    models: ["Galaxy S10e"],
    glassSize:
      '5.8" · flat S10e compact · side FPS hole layout — S10e-only listing',
  },
  {
    id: 445,
    brand: "Samsung",
    models: ["Galaxy S10", "Galaxy S10+"],
    glassSize:
      '6.1" / 6.4" · curved S10 generation · dual-size retail bins',
  },
  {
    id: 446,
    brand: "Samsung",
    models: ["Galaxy A03", "Galaxy A03 Core", "Galaxy A03s", "Galaxy M02"],
    glassSize:
      '6.5" · Infinity-V entry · A03s taller than A03 — verify height bin',
  },
  {
    id: 447,
    brand: "Samsung",
    models: ["Galaxy M01", "Galaxy M01 Core", "Galaxy A01", "Galaxy A01 Core"],
    glassSize:
      '5.7" / 6.2" · legacy dewdrop compact · dual diagonal bins',
  },
  {
    id: 448,
    brand: "Samsung",
    models: ["Galaxy M31", "Galaxy M30s"],
    glassSize:
      '6.4" · Super AMOLED punch · shared M3x/F rack (see also A51 bin)',
  },

  // —— Xiaomi / Redmi / Poco — deeper Note & Redmi digit coverage ——
  {
    id: 450,
    brand: "Xiaomi",
    models: [
      "Redmi Note 8",
      "Redmi Note 8 Pro",
      "Redmi Note 8T",
      "Redmi Note 8 (2021)",
    ],
    glassSize:
      '6.3" / 6.53" · quad-camera era · Pro taller panel — match printed model',
  },
  {
    id: 451,
    brand: "Xiaomi",
    models: ["Redmi Note 7", "Redmi Note 7 Pro", "Redmi Note 7S"],
    glassSize:
      '6.3" · water-drop LCD · India/Global twin tempered racks',
  },
  {
    id: 452,
    brand: "Xiaomi",
    models: ["Redmi 9", "Redmi 9A", "Redmi 9C", "Redmi 9 Prime"],
    glassSize:
      '6.53" · circular triple-camera strip era · not punch-hole M3/9T rack',
  },
  {
    id: 453,
    brand: "Xiaomi",
    models: ["Redmi 8", "Redmi 8A", "Redmi 8A Dual"],
    glassSize:
      '6.22" · notch LCD · budget twin rack',
  },
  {
    id: 455,
    brand: "Xiaomi",
    models: ["Mi 10T", "Mi 10T Pro", "Mi 10T Lite", "Redmi Note 9 Pro 5G"],
    glassSize:
      '6.67" · 144Hz flat LCD/LCD-led · shared importer “10T” labeled bins',
  },

  // —— Vivo / Oppo / Realme — extra mid bins ——
  {
    id: 460,
    brand: "Vivo",
    models: ["Vivo V23", "Vivo V23 Pro", "Vivo V23e", "Vivo V21", "Vivo V21e"],
    glassSize:
      '6.44" / 6.56" · selfie spotlight portrait · curved vs flat e-models differ',
  },
  {
    id: 461,
    brand: "Oppo",
    models: ["Oppo Reno 5", "Oppo Reno 5 Pro", "Oppo Reno 5 Lite"],
    glassSize:
      '6.43" / 6.5" · Reno5 portrait punch · Lite dewdrop alternate rack',
  },
  {
    id: 462,
    brand: "Oppo",
    models: ["Oppo Reno 6", "Oppo Reno 6 Pro", "Oppo Reno 7", "Oppo Reno 7 Pro"],
    glassSize:
      '6.43" / 6.55" · Reno6/7 flat portrait evolution — verify annual camera slot',
  },
  {
    id: 463,
    brand: "Realme",
    models: ["Realme C35", "Realme C33", "Realme Narzo 50i Prime"],
    glassSize:
      '6.6" · budget flat punch · tall chin universal listings',
  },

  // —— Transsion — broader universal sheets ——
  {
    id: 465,
    brand: "Tecno",
    models: ["Tecno Spark 8C", "Tecno Spark 8P", "Tecno Spark 9 Pro"],
    glassSize:
      '6.56" / 6.6" · Spark dewdrop/punch transition · verify vs Spark 10 bins',
  },
  {
    id: 466,
    brand: "Infinix",
    models: ["Infinix Note 11", "Infinix Note 11 Pro", "Infinix Note 12 G96"],
    glassSize:
      '6.7" / 6.95" · Note gaming punch · Pro wider camera trench — dedicated mold',
  },
  {
    id: 467,
    brand: "Itel",
    models: ["Itel P55+", "Itel P65", "Itel S24"],
    glassSize:
      '6.6" / 6.78" · 2024 Itel punch slab · regional naming overlap',
  },

  // —— Motorola / Lenovo — extra SKUs ——
  {
    id: 470,
    brand: "Motorola",
    models: ["Motorola Edge 30", "Motorola Edge 30 Neo", "Motorola Edge 30 Fusion"],
    glassSize:
      '6.5" / 6.55" · pOLED punch Edge30 trio · Fusion curved vs Neo compact',
  },
  {
    id: 471,
    brand: "Motorola",
    models: ["Motorola Moto G14", "Motorola Moto G24", "Motorola Moto G04"],
    glassSize:
      '6.5" / 6.6" · 2023–24 EU entry punch · shared Moto G rack',
  },
  {
    id: 472,
    brand: "Lenovo",
    models: ["Lenovo K14 Plus", "Lenovo K13 Note", "Lenovo K12 Pro"],
    glassSize:
      '6.5" / 6.67" · China-market K-line · rebranded Motorola siblings in some regions',
  },

  // —— LG legacy extra ——
  {
    id: 475,
    brand: "LG",
    models: ["LG Stylo 6", "LG K92 5G", "LG Reflect"],
    glassSize:
      '6.8" / 6.7" · NA prepaid punch-hole · residual accessory stock',
  },

  // —— Nokia extra ——
  {
    id: 478,
    brand: "Nokia",
    models: ["Nokia G42", "Nokia G60", "Nokia X20"],
    glassSize:
      '6.56" / 6.58" · Nordic 5G punch · QuickFix era repairable backs — flat glass',
  },
];
