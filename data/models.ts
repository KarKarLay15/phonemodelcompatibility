/**
 * KKTech retailer compatibility families — tempered glass cutouts & outer dimensions.
 * OEM revisions & regional SKUs vary: always dry-fit before install.
 *
 * Primary catalog below; additional OEM rows live in `./models-extended`.
 */

import type { CompatibilityGroup } from "./compatibility-types";
import { extendedCompatibilityGroups } from "./models-extended";
import { recent2026CompatibilityGroups } from "./models-recent-2026";

export type { CompatibilityGroup } from "./compatibility-types";

export const compatibilityData: CompatibilityGroup[] = [
  // ——————————————————————————————————————————————————————————————————
  // Apple — flagship / SE (notch vs Dynamic Island called out per row)
  // ——————————————————————————————————————————————————————————————————
  {
    id: 1,
    brand: "Apple",
    models: ["iPhone 13", "iPhone 13 Pro", "iPhone 14"],
    glassSize:
      '6.1" · notch · flat-edge OLED (same outer mold — confirm camera hole)',
  },
  {
    id: 2,
    brand: "Apple",
    models: ["iPhone 13 Pro Max", "iPhone 14 Plus"],
    glassSize: '6.7" · notch · Plus-width flat kit',
  },
  {
    id: 3,
    brand: "Apple",
    models: ["iPhone 11", "iPhone XR"],
    glassSize: '6.1" · LCD notch · curved-edge era',
  },
  {
    id: 4,
    brand: "Apple",
    models: ["iPhone 12", "iPhone 12 Pro"],
    glassSize: '6.1" · OLED notch · flat-edge',
  },
  {
    id: 5,
    brand: "Apple",
    models: [
      "iPhone 7",
      "iPhone 8",
      "iPhone SE (2020)",
      "iPhone SE (2022)",
      "iPhone SE (3rd generation)",
      "iPhone SE 2",
      "iPhone SE 3",
    ],
    glassSize:
      '4.7" · classic Touch ID · no notch / no island (same retail mold)',
  },
  {
    id: 6,
    brand: "Apple",
    models: ["iPhone 12 mini", "iPhone 13 mini"],
    glassSize: '5.4" · notch · mini-only kit',
  },
  {
    id: 7,
    brand: "Apple",
    models: ["iPhone 15", "iPhone 16"],
    glassSize:
      '6.1" · Dynamic Island · non-Pro aluminum line (USB-C gen retail mold)',
  },
  {
    id: 8,
    brand: "Apple",
    models: ["iPhone 15 Pro", "iPhone 16 Pro"],
    glassSize:
      '6.1" · Dynamic Island · Pro titanium line (narrower bezel — Pro mold)',
  },
  {
    id: 9,
    brand: "Apple",
    models: ["iPhone 15 Plus", "iPhone 16 Plus"],
    glassSize: '6.7" · Dynamic Island · non-Pro Plus line',
  },
  {
    id: 10,
    brand: "Apple",
    models: ["iPhone 15 Pro Max", "iPhone 16 Pro Max"],
    glassSize: '6.7" · Dynamic Island · Pro Max mold',
  },
  {
    id: 11,
    brand: "Apple",
    models: ["iPhone 14 Pro"],
    glassSize:
      '6.1" · pill cutout + Dynamic Island · always verify speaker slit template',
  },
  {
    id: 12,
    brand: "Apple",
    models: ["iPhone 14 Pro Max"],
    glassSize: '6.7" · pill cutout + Dynamic Island · Pro Max camera shelf',
  },
  {
    id: 13,
    brand: "Apple",
    models: ["iPhone X", "iPhone XS", "iPhone 11 Pro"],
    glassSize:
      '5.8" · notch · stainless-era (mute-side vs speaker hole — confirm listing)',
  },
  {
    id: 14,
    brand: "Apple",
    models: ["iPhone XS Max", "iPhone 11 Pro Max"],
    glassSize: '6.5" · notch · Max-width stainless era',
  },
  {
    id: 15,
    brand: "Apple",
    models: ["iPhone 12 Pro Max"],
    glassSize:
      '6.7" · notch · flat-edge Pro Max (often adjacent rack to 13 PM — verify)',
  },
  {
    id: 16,
    brand: "Apple",
    models: ["iPhone 16e"],
    glassSize:
      '6.1" · Dynamic Island · SE successor chassis — use dedicated 16e-labeled SKU',
  },
  {
    id: 17,
    brand: "Apple",
    models: ["iPhone 7 Plus", "iPhone 8 Plus"],
    glassSize:
      '5.5" · Touch ID Plus · classic forehead/chin · same retail mold pair',
  },

  // ——————————————————————————————————————————————————————————————————
  // Samsung Galaxy — A/M/F + S Ultra retail bins
  // ——————————————————————————————————————————————————————————————————
  {
    id: 20,
    brand: "Samsung",
    models: [
      "Galaxy A14 5G",
      "Galaxy A14 LTE",
      "Galaxy A14 (India)",
      "Galaxy M14",
      "Galaxy M14 5G",
      "Galaxy F14",
      "Galaxy F14 5G",
    ],
    glassSize:
      '6.6" · Infinity-V · shared A14/M14/F14 retail family (region trims)',
  },
  {
    id: 21,
    brand: "Samsung",
    models: ["Galaxy A54 5G", "Galaxy M54 5G"],
    glassSize:
      '6.4" · centered punch-hole · A54/M54 shared tempered bin (camera ring)',
  },
  {
    id: 22,
    brand: "Samsung",
    models: [
      "Galaxy A05",
      "Galaxy A05s",
      "Galaxy M05",
      "Galaxy F05",
      "Galaxy A05 Core",
    ],
    glassSize:
      '6.5" / 6.7" · entry dewdrop · A05 vs A05s height differs — verify SKU',
  },
  {
    id: 23,
    brand: "Samsung",
    models: ["Galaxy S22 Ultra", "Galaxy S23 Ultra", "Galaxy S24 Ultra", "Galaxy S25 Ultra"],
    glassSize:
      '6.8" · curved Ultra mold · S Pen curve · S24 vs S25 camera housing — verify importer cut',
  },
  {
    id: 24,
    brand: "Samsung",
    models: [
      "Galaxy S23",
      "Galaxy S23+",
      "Galaxy S22",
      "Galaxy S22+",
      "Galaxy S25",
      "Galaxy S25+",
    ],
    glassSize:
      '6.2" / 6.7" · flat flagship armor · S22/S23 vs S25 bezel revision — pick generation-printed tempered',
  },
  {
    id: 25,
    brand: "Samsung",
    models: ["Galaxy S24", "Galaxy S24+", "Galaxy S23 FE"],
    glassSize:
      '6.2" / 6.7" · flat S24 gen / FE — match listing to flat vs curved FE bin',
  },
  {
    id: 26,
    brand: "Samsung",
    models: ["Galaxy S21 Ultra"],
    glassSize:
      '6.8" · legacy Ultra curved mold (pre-S22 camera housing — older retail bin)',
  },
  {
    id: 27,
    brand: "Samsung",
    models: ["Galaxy A15", "Galaxy A15 5G", "Galaxy M15", "Galaxy F15"],
    glassSize:
      '6.5" · 2024 A15-class Infinity-U · shared F/M regional twins',
  },
  {
    id: 28,
    brand: "Samsung",
    models: ["Galaxy A25 5G", "Galaxy A26 5G"],
    glassSize: '6.5" / 6.7" · A2x refresh · punch-hole flat bin',
  },
  {
    id: 29,
    brand: "Samsung",
    models: ["Galaxy A35 5G", "Galaxy A36 5G"],
    glassSize:
      '6.6" · Key Island middle frame · verify annual camera hole revision',
  },
  {
    id: 30,
    brand: "Samsung",
    models: ["Galaxy A55 5G", "Galaxy M55", "Galaxy C55"],
    glassSize: '6.6" · 2024 mid-premium punch-hole · shared M55/C55 SKUs',
  },
  {
    id: 31,
    brand: "Samsung",
    models: ["Galaxy A34 5G", "Galaxy A33 5G"],
    glassSize:
      '6.6" · flat Key Island era predecessor · separate from M34 template',
  },
  {
    id: 32,
    brand: "Samsung",
    models: ["Galaxy A24", "Galaxy A24 4G", "Galaxy M34 5G"],
    glassSize: '6.5" · Super AMOLED dewdrop / punch · regional naming spread',
  },
  {
    id: 33,
    brand: "Samsung",
    models: ["Galaxy A52", "Galaxy A52s 5G", "Galaxy A53 5G"],
    glassSize:
      '6.5" · A5x flat punch-hole · curved film-only kits exist — pick flat glass',
  },
  {
    id: 34,
    brand: "Samsung",
    models: ["Galaxy A13", "Galaxy A13 5G", "Galaxy M13", "Galaxy M13 5G"],
    glassSize: '6.6" · Infinity-V / O · shared budget bin',
  },
  {
    id: 35,
    brand: "Samsung",
    models: ["Galaxy A04", "Galaxy A04s", "Galaxy A04e", "Galaxy M04"],
    glassSize: '6.5" · entry notch/dewdrop · twin SKU verify',
  },
  {
    id: 36,
    brand: "Samsung",
    models: ["Galaxy A73 5G", "Galaxy A72", "Galaxy M53"],
    glassSize:
      '6.7" · large A7x punch-hole · camera island outsized — match template',
  },
  {
    id: 37,
    brand: "Samsung",
    models: ["Galaxy A32", "Galaxy A32 5G", "Galaxy M32", "Galaxy F32"],
    glassSize: '6.4" / 6.6" · A32 LTE vs 5G screen differs — dual retail bins',
  },
  {
    id: 38,
    brand: "Samsung",
    models: ["Galaxy A51", "Galaxy M31s", "Galaxy F41"],
    glassSize: '6.5" · centered punch Super AMOLED era',
  },
  {
    id: 39,
    brand: "Samsung",
    models: ["Galaxy A71", "Galaxy M51", "Galaxy F62"],
    glassSize: '6.7" · slim punch-hole large-screen bin',
  },
  {
    id: 40,
    brand: "Samsung",
    models: ["Galaxy A21s", "Galaxy M21", "Galaxy F12"],
    glassSize: '6.5" · Infinity-O macro-class',
  },
  {
    id: 41,
    brand: "Samsung",
    models: ["Galaxy A22", "Galaxy A22 5G", "Galaxy M32 5G"],
    glassSize: '6.4" / 6.6" · LTE vs 5G template split',
  },

  // ——————————————————————————————————————————————————————————————————
  // Xiaomi · Redmi · Poco — global retail spreads
  // ——————————————————————————————————————————————————————————————————
  {
    id: 50,
    brand: "Xiaomi",
    models: [
      "Redmi Note 12",
      "Redmi Note 12 5G",
      "Redmi Note 12 4G",
      "Redmi Note 12 4G (India)",
      "Redmi Note 12S",
      "Poco X5",
      "Poco X5 5G",
      "Poco X5 Pro",
    ],
    glassSize:
      '6.67" · flat punch-hole · Note 12 / X5 shared mold (see Poco F5 for Turbo)',
  },
  {
    id: 51,
    brand: "Xiaomi",
    models: [
      "Redmi Note 13",
      "Redmi Note 13 5G",
      "Redmi Note 13 Pro",
      "Redmi Note 13 Pro 5G",
      "Redmi Note 13 Pro+",
      "Redmi Note 13 Pro+ 5G",
      "Redmi Note 13R Pro",
      "Redmi Note 13 (China)",
      "Poco X6",
      "Poco X6 Pro",
      "Poco M6 Pro",
      "Poco M6 Pro 4G",
    ],
    glassSize:
      '6.67" · Note 13 gen punch-hole · Pro/Pro+ camera islands differ — verify',
  },
  {
    id: 52,
    brand: "Redmi",
    models: [
      "Redmi Note 12 Pro",
      "Redmi Note 12 Pro+",
      "Redmi Note 12 Pro Speed",
      "Redmi Note 12 Discovery",
    ],
    glassSize:
      '6.67" · Pro sub-family · separate camera shelf vs base Note 12',
  },
  {
    id: 53,
    brand: "Xiaomi",
    models: [
      "Redmi Note 14",
      "Redmi Note 14 5G",
      "Redmi Note 14 Pro",
      "Redmi Note 14 Pro+",
      "Redmi Note 14 Pro 5G",
      "Poco X7",
      "Poco X7 Pro",
    ],
    glassSize:
      '6.67" · Note 14 wave · island cameras — match Note 14 labeled SKU',
  },
  {
    id: 54,
    brand: "Xiaomi",
    models: ["Redmi Note 11", "Redmi Note 11S", "Poco M4 Pro", "Poco M4 Pro 5G"],
    glassSize:
      '6.43" / 6.6" · AMOLED hole punch vs IPS variants — dual bins common',
  },
  {
    id: 55,
    brand: "Xiaomi",
    models: [
      "Redmi Note 10",
      "Redmi Note 10 Pro",
      "Redmi Note 10 Pro Max",
      "Poco X3",
      "Poco X3 NFC",
      "Poco X3 Pro",
    ],
    glassSize:
      '6.67" · Note 10 Pro vs X3 Pro camera punch differs — use printed SKU',
  },
  {
    id: 56,
    brand: "Xiaomi",
    models: ["Redmi 13C", "Redmi 13 5G", "Poco C65", "Poco M6", "Poco M6 5G"],
    glassSize:
      '6.74" / 6.79" · budget dewdrop/punch · tall 20:9 retail templates',
  },
  {
    id: 57,
    brand: "Xiaomi",
    models: ["Redmi 12", "Redmi 12 5G", "Poco M5", "Poco C55"],
    glassSize:
      '6.79" / 6.7" · punch-hole budget · EU vs India naming splits',
  },
  {
    id: 58,
    brand: "Xiaomi",
    models: ["Redmi A3", "Redmi A3x", "Redmi A2", "Poco C51", "Poco C61"],
    glassSize: '6.52" · entry dewdrop · shared A/Poco C-class rack',
  },
  {
    id: 59,
    brand: "Xiaomi",
    models: ["Xiaomi 13", "Xiaomi 13 Pro", "Xiaomi 13T", "Xiaomi 13T Pro"],
    glassSize:
      '6.36" / 6.73" · flagship Leica line — separate molds per footprint',
  },
  {
    id: 60,
    brand: "Xiaomi",
    models: ["Xiaomi 14", "Xiaomi 14 Pro", "Xiaomi 14T", "Xiaomi 14T Pro"],
    glassSize:
      '6.36" / 6.73" · flat standard vs quad-curve Pro — verify curve-friendly SKU',
  },
  {
    id: 61,
    brand: "Poco",
    models: ["Poco F5", "Redmi Note 12 Turbo", "Redmi Note 12 Turbo (China)"],
    glassSize:
      '6.67" · Snapdragon 7+ Gen 2 slab · narrow chin mold shared with Turbo',
  },
  {
    id: 62,
    brand: "Poco",
    models: ["Poco F4", "Poco F4 GT", "Redmi K40S"],
    glassSize:
      '6.67" · GT gaming shoulders — some racks split GT vs vanilla F4',
  },
  {
    id: 63,
    brand: "Xiaomi",
    models: ["Redmi Note 9", "Redmi Note 9S", "Redmi Note 9 Pro", "Poco M2 Pro"],
    glassSize: '6.53" / 6.67" · quad-camera punch era · India/Global twins',
  },
  {
    id: 64,
    brand: "Xiaomi",
    models: ["Poco F3", "Mi 11X", "Redmi K40", "Mi 11X Pro"],
    glassSize: '6.67" · E4 AMOLED punch-hole flagship mold',
  },
  {
    id: 65,
    brand: "Xiaomi",
    models: ["Redmi K50", "Redmi K50 Pro", "Redmi K50 Ultra"],
    glassSize:
      '6.67" · K50 flat-display gen · Ultra punch differs slightly — verify',
  },
  {
    id: 66,
    brand: "Xiaomi",
    models: ["Redmi 10", "Redmi 10 2022", "Redmi 10C", "Poco C40"],
    glassSize: '6.5" / 6.71" · IPS dewdrop · regional naming drift',
  },
  {
    id: 67,
    brand: "Poco",
    models: ["Poco X4 Pro", "Redmi Note 11E Pro"],
    glassSize: '6.67" · flat punch · shared China export mold',
  },
  {
    id: 68,
    brand: "Redmi",
    models: ["Redmi Note 11T", "Redmi Note 11T Pro", "Poco X4 GT"],
    glassSize:
      '6.6" · LCD high-refresh line · GT camera strip differs — confirm cut',
  },

  // ——————————————————————————————————————————————————————————————————
  // Vivo · iQOO — mid & budget retail racks
  // ——————————————————————————————————————————————————————————————————
  {
    id: 70,
    brand: "Vivo",
    models: [
      "Vivo V29",
      "Vivo V29 Pro",
      "Vivo V29e",
      "Vivo V30",
      "Vivo V30 Pro",
      "Vivo V30 Lite",
      "iQOO Neo 7",
      "iQOO Neo 7 Pro",
      "iQOO Neo 7 SE",
    ],
    glassSize:
      '6.78" · curved portrait AMOLED · Aura Light ring template differences',
  },
  {
    id: 71,
    brand: "Vivo",
    models: ["Vivo V25", "Vivo V25 Pro", "Vivo V27", "Vivo V27 Pro", "Vivo V27e"],
    glassSize:
      '6.44" / 6.78" · color-shift era · separate SKUs for Pro vs e trims',
  },
  {
    id: 72,
    brand: "Vivo",
    models: ["Vivo Y36", "Vivo Y36 5G", "Vivo Y27", "Vivo Y27 5G", "Vivo Y200"],
    glassSize:
      '6.64" · Y-series punch-hole slab · shared rack across Y27/Y36 bins',
  },
  {
    id: 73,
    brand: "Vivo",
    models: ["Vivo Y100", "Vivo Y100 5G", "Vivo Y78", "Vivo Y78+", "Vivo Y17s"],
    glassSize:
      '6.38" / 6.78" · curved vs flat variants — separate tempered listings',
  },
  {
    id: 74,
    brand: "Vivo",
    models: ["Vivo X100", "Vivo X100 Pro", "iQOO 12", "iQOO 12 Pro"],
    glassSize:
      '6.78" · flagship Zeiss island · huge camera shelf — dedicated mold',
  },
  {
    id: 75,
    brand: "Vivo",
    models: ["Vivo Y02", "Vivo Y02t", "Vivo Y02s", "Vivo Y16", "Vivo Y02A"],
    glassSize: '6.51" · entry dewdrop · ultra-budget trim splits',
  },
  {
    id: 76,
    brand: "Vivo",
    models: ["Vivo Y35", "Vivo Y35 5G", "Vivo Y22", "Vivo Y22s", "Vivo Y22 5G"],
    glassSize:
      '6.58" · water-drop / punch evolution · verify sensor housing ring',
  },
  {
    id: 77,
    brand: "Vivo",
    models: ["Vivo Y33s", "Vivo Y33T", "Vivo Y21", "Vivo Y21e", "Vivo Y21s"],
    glassSize: '6.58" · shared Y2x dewdrop mold',
  },
  {
    id: 78,
    brand: "Vivo",
    models: ["Vivo T2", "Vivo T2 Pro", "Vivo T2x", "Vivo T3", "Vivo T3x"],
    glassSize:
      '6.38" / 6.67" · online-series punch-hole · annual refresh overlap',
  },

  // ——————————————————————————————————————————————————————————————————
  // Oppo — Reno / A / Find shared bins with OnePlus in places
  // ——————————————————————————————————————————————————————————————————
  {
    id: 80,
    brand: "Oppo",
    models: ["Oppo Reno 11", "Oppo Reno 11 Pro", "Oppo Reno 11F", "Oppo Reno 11F 5G"],
    glassSize:
      '6.7" · Reno11 portrait line · F variant flat vs curved — check SKU',
  },
  {
    id: 81,
    brand: "Oppo",
    models: ["Oppo Reno 10", "Oppo Reno 10 Pro", "Oppo Reno 10 Pro+"],
    glassSize:
      '6.7" · Reno10 curved slab · Pro+ camera deck taller — dedicated listing',
  },
  {
    id: 82,
    brand: "Oppo",
    models: ["Oppo Reno 12", "Oppo Reno 12 Pro", "Oppo Reno 12F"],
    glassSize:
      '6.7" · Reno12 gen island cameras · verify vs Reno11 interchangeability',
  },
  {
    id: 83,
    brand: "Oppo",
    models: ["Oppo A98", "Oppo A78", "Oppo A58", "Oppo A79"],
    glassSize:
      '6.72" · A-series mid punch-hole · tall battery kings shared rack',
  },
  {
    id: 84,
    brand: "Oppo",
    models: ["Oppo A38", "Oppo A18", "Oppo A57", "Oppo A57s", "Oppo A58x"],
    glassSize:
      '6.56" · dewdrop / punch refresh · verify speaker grille slots',
  },
  {
    id: 85,
    brand: "Oppo",
    models: ["Oppo Find X6", "Oppo Find X6 Pro"],
    glassSize:
      '6.74" / 6.82" · Hasselblad island · curved flagship mold',
  },
  {
    id: 86,
    brand: "Oppo",
    models: ["Oppo Reno 8", "Oppo Reno 8 Pro", "OnePlus Nord 2T"],
    glassSize:
      '6.43" / 6.7" · BBK twin bins — Nord glass often labeled Reno 8',
  },
  {
    id: 87,
    brand: "Oppo",
    models: ["Oppo A54", "Oppo A74", "Oppo A94", "Oppo A93"],
    glassSize: '6.43" · punch-hole mid A5x vintage rack',
  },
  {
    id: 88,
    brand: "Oppo",
    models: ["Oppo A17", "Oppo A17k", "Oppo A77", "Oppo A77s"],
    glassSize: '6.56" · notch/water-drop transition era',
  },
  {
    id: 89,
    brand: "Oppo",
    models: ["Oppo Reno 9", "Oppo Reno 9 Pro", "Oppo Reno 9 Pro+"],
    glassSize:
      '6.7" · slim curved Reno9 · China-first listings spill globally',
  },

  // ——————————————————————————————————————————————————————————————————
  // Realme · Narzo — budget war chest
  // ——————————————————————————————————————————————————————————————————
  {
    id: 90,
    brand: "Realme",
    models: ["Realme C55", "Realme Narzo N55", "Realme Narzo 60x"],
    glassSize:
      '6.72" · mini capsule punch · shared C55/Narzo rack (Android 13 mini)',
  },
  {
    id: 91,
    brand: "Realme",
    models: ["Realme 11", "Realme 11 Pro", "Realme 11 Pro+", "Realme 11x"],
    glassSize:
      '6.4" / 6.7" · 120Hz curved line · Pro+ outsized camera mold',
  },
  {
    id: 92,
    brand: "Realme",
    models: [
      "Realme 12",
      "Realme 12+",
      "Realme 12 Pro",
      "Realme 12 Pro+",
      "Realme 12x",
    ],
    glassSize:
      '6.67" / 6.7" · periscope-ready camera shelf — verify print vs 11 series',
  },
  {
    id: 93,
    brand: "Realme",
    models: ["Realme GT Neo 3", "Realme GT Neo 3T", "OnePlus Nord 3"],
    glassSize:
      '6.7" · BBK performance mid · Nord 3 shares Neo mold in many bins',
  },
  {
    id: 94,
    brand: "Realme",
    models: ["Realme 9", "Realme 9 Pro", "Realme 9 Pro+", "Realme 9i"],
    glassSize:
      '6.4" / 6.6" · laser ripple camera era · multiple punch offsets',
  },
  {
    id: 95,
    brand: "Realme",
    models: ["Realme Narzo 50", "Realme Narzo 50 Pro", "Realme Narzo 50A Prime"],
    glassSize:
      '6.6" · gaming Narzo punch-hole · Prime dewdrop differs — separate SKU',
  },
  {
    id: 96,
    brand: "Realme",
    models: ["Realme C67", "Realme C63", "Realme Note 50", "Realme C65"],
    glassSize:
      '6.72" / 6.67" · budget capsule punch · Note 50 naming vs C-series',
  },
  {
    id: 97,
    brand: "Realme",
    models: ["Realme 8", "Realme 8 Pro", "Realme Narzo 30 Pro"],
    glassSize:
      '6.4" · Dare-to-Leap slim punch mold',
  },
  {
    id: 98,
    brand: "Realme",
    models: ["Realme C53", "Realme C51", "Realme Narzo N53", "Realme C53s"],
    glassSize:
      '6.74" · champion glow mini capsule · tall chin retail sheets',
  },
  {
    id: 99,
    brand: "Realme",
    models: ["Realme GT 2", "Realme GT 2 Pro"],
    glassSize:
      '6.62" / 6.7" · paper-tech flat flagship vs 2K LTPO curve',
  },
  {
    id: 100,
    brand: "Realme",
    models: ["Realme Narzo 70", "Realme Narzo 70 Pro", "Realme Narzo 70x"],
    glassSize:
      '6.67" · 2024 Narzo punch-hole refresh · verify vs Note 50 interchange',
  },

  // ——————————————————————————————————————————————————————————————————
  // OnePlus — Nord / numbered lines (shop-grade pairings)
  // ——————————————————————————————————————————————————————————————————
  {
    id: 110,
    brand: "OnePlus",
    models: ["OnePlus 12", "OnePlus 12R"],
    glassSize:
      '6.82" / 6.78" · 2024 flagship vs performance — curved molds differ',
  },
  {
    id: 111,
    brand: "OnePlus",
    models: ["OnePlus 11", "OnePlus 11R"],
    glassSize:
      '6.7" · Hasselblad island vs R curved slab — separate tempered bins',
  },
  {
    id: 112,
    brand: "OnePlus",
    models: ["OnePlus Nord CE 3", "OnePlus Nord CE 3 Lite", "OnePlus Nord 3"],
    glassSize:
      '6.72" / 6.43" · CE family punch-hole — Lite dewdrop alternate rack',
  },
  {
    id: 113,
    brand: "OnePlus",
    models: ["OnePlus Nord CE 4", "OnePlus Nord CE 4 Lite"],
    glassSize:
      '6.67" · 2024 CE refresh · pastel trim same outer dimensions retail',
  },

  // ——————————————————————————————————————————————————————————————————
  // Requested brand coverage — early models through latest shared bins
  // ——————————————————————————————————————————————————————————————————
  {
    id: 600,
    brand: "Apple",
    models: ["iPhone", "iPhone 3G", "iPhone 3GS"],
    glassSize:
      '3.5" · first iPhone curved-glass era · legacy service stock only',
    glassSizeMm:
      "၃.၅ လက်မ · ပထမ iPhone / 3G / 3GS ခေတ် · လက်ကျန် service stock သာ များ",
  },
  {
    id: 601,
    brand: "Apple",
    models: ["iPhone 4", "iPhone 4S"],
    glassSize:
      '3.5" · flat glass sandwich · iPhone 4 / 4S shared front template',
    glassSizeMm:
      "၃.၅ လက်မ · iPhone 4 / 4S ဖလက်မှန် · တူညီ front tempered template",
  },
  {
    id: 602,
    brand: "Apple",
    models: ["iPhone 5", "iPhone 5c", "iPhone 5s", "iPhone SE (2016)", "iPhone SE 1"],
    glassSize:
      '4.0" · compact Touch ID era · 5/5s/SE shared; 5c frame lip verify',
    glassSizeMm:
      "၄.၀ လက်မ · compact Touch ID ခေတ် · 5 / 5s / SE တူညီ နိုင်၊ 5c ဘောင်စစ်ပါ",
  },
  {
    id: 603,
    brand: "Apple",
    models: ["iPhone 6", "iPhone 6s"],
    glassSize:
      '4.7" · rounded-edge Touch ID · pre-7 speaker/camera sensor layout',
    glassSizeMm:
      "၄.၇ လက်မ · iPhone 6 / 6s ပတ်ဘောင်ကွေး · 7/8/SE2 SKU နှင့် မရောပါနှင့်",
  },
  {
    id: 604,
    brand: "Apple",
    models: ["iPhone 6 Plus", "iPhone 6s Plus"],
    glassSize:
      '5.5" · rounded-edge Plus · legacy large Touch ID mold',
    glassSizeMm:
      "၅.၅ လက်မ · iPhone 6 Plus / 6s Plus · Touch ID Plus လက်ကျန် mold",
  },
  {
    id: 605,
    brand: "Samsung",
    models: ["Galaxy S", "Galaxy S II", "Galaxy S III", "Galaxy S4", "Galaxy S5"],
    glassSize:
      '4.0–5.1" · early Galaxy S legacy clearance · generation-specific molds',
    glassSizeMm:
      "၄.၀–၅.၁ လက်မ · Galaxy S အစောပိုင်း မျိုးဆက်များ · မျိုးဆက်အလိုက် SKU ခွဲပါ",
  },
  {
    id: 606,
    brand: "Samsung",
    models: ["Galaxy S6", "Galaxy S6 edge", "Galaxy S7", "Galaxy S7 edge"],
    glassSize:
      '5.1" / 5.5" · glass-back Galaxy era · edge variants need curved film/glass',
    glassSizeMm:
      "၅.၁ / ၅.၅ လက်မ · Galaxy S6/S7 ခေတ် · edge မော်ဒယ်များ ကွေးမှန် SKU သီးခြား",
  },
  {
    id: 607,
    brand: "Samsung",
    models: ["Galaxy S8", "Galaxy S8+", "Galaxy S9", "Galaxy S9+"],
    glassSize:
      '5.8" / 6.2" · Infinity Display curved flagship · S8/S9 speaker slit verify',
    glassSizeMm:
      "၅.၈ / ၆.၂ လက်မ · Infinity Display ကွေးမှန် · S8/S9 speaker ပေါက်စစ်ပါ",
  },
  {
    id: 608,
    brand: "Samsung",
    models: ["Galaxy Note", "Galaxy Note II", "Galaxy Note 3", "Galaxy Note 4", "Galaxy Note 5"],
    glassSize:
      '5.3–5.7" · early Note / S Pen legacy line · each generation printed separately',
    glassSizeMm:
      "၅.၃–၅.၇ လက်မ · Note အစောပိုင်း S Pen လိုင်း · မျိုးဆက်အလိုက် လက်ကားခွဲပါ",
  },
  {
    id: 609,
    brand: "Huawei",
    models: ["Huawei Ascend P6", "Huawei Ascend P7", "Huawei P8", "Huawei P8 Lite"],
    glassSize:
      '4.7–5.2" · Ascend/P early slim era · Lite and flagship not always interchangeable',
    glassSizeMm:
      "၄.၇–၅.၂ လက်မ · Huawei Ascend/P အစောပိုင်း · Lite နှင့် flagship မရောပါနှင့်",
  },
  {
    id: 610,
    brand: "Huawei",
    models: ["Huawei P9", "Huawei P9 Lite", "Huawei P10", "Huawei P10 Lite", "Huawei P20", "Huawei P20 Pro", "Huawei P20 Lite"],
    glassSize:
      '5.1–6.1" · Leica / notch transition · P20 Lite notch differs from P10 family',
    glassSizeMm:
      "၅.၁–၆.၁ လက်မ · Leica မှ notch ခေတ်ပြောင်း · P20 Lite notch SKU သီးခြား",
  },
  {
    id: 611,
    brand: "Huawei",
    models: ["Huawei Y3", "Huawei Y5", "Huawei Y6", "Huawei Y7", "Huawei Y9", "Huawei P Smart", "Huawei P Smart 2019"],
    glassSize:
      '5.0–6.5" · Huawei Y / P Smart budget rack · year label must match packaging',
    glassSizeMm:
      "၅.၀–၆.၅ လက်မ · Huawei Y / P Smart budget လိုင်း · ခုနှစ်ပါတဲ့ label ကိုက်အောင်ရွေးပါ",
  },
  {
    id: 612,
    brand: "Tecno",
    models: ["Tecno Spark", "Tecno Spark 2", "Tecno Spark 3", "Tecno Spark 4", "Tecno Spark 5", "Tecno Spark 6", "Tecno Spark 7", "Tecno Spark 8"],
    glassSize:
      '5.5–6.8" · Spark early-to-mid budget family · V-notch and punch bins split',
    glassSizeMm:
      "၅.၅–၆.၈ လက်မ · Spark အစောပိုင်းမှ အလယ်လိုင်း · V-notch / punch SKU ခွဲပါ",
  },
  {
    id: 613,
    brand: "Tecno",
    models: ["Tecno Camon C8", "Tecno Camon C9", "Tecno Camon CX", "Tecno Camon 11", "Tecno Camon 12", "Tecno Camon 15", "Tecno Camon 16", "Tecno Camon 17", "Tecno Camon 18"],
    glassSize:
      '5.5–6.8" · Camon camera-series legacy rack · confirm notch/punch generation',
    glassSizeMm:
      "၅.၅–၆.၈ လက်မ · Camon ကင်မရာစီးရီး လက်ကျန် rack · notch/punch မျိုးဆက်စစ်ပါ",
  },
  {
    id: 614,
    brand: "Tecno",
    models: ["Tecno Camon 40", "Tecno Camon 40 Pro", "Tecno Camon 40 Premier", "Tecno Pova Slim", "Tecno Spark Slim", "Tecno Spark 40 Pro+", "Tecno Spark 40 5G"],
    glassSize:
      '6.67–6.78" · latest Tecno 2025/2026 slim and Camon wave · AMOLED curve vs flat split',
    glassSizeMm:
      "၆.၆၇–၆.၇၈ လက်မ · Tecno နောက်ဆုံးထွက် Camon/Spark/Slim လိုင်း · ဖလက်/ကွေး SKU ခွဲပါ",
  },
  {
    id: 615,
    brand: "Infinix",
    models: ["Infinix Hot", "Infinix Hot 2", "Infinix Hot 3", "Infinix Hot 4", "Infinix Hot 5", "Infinix Hot 6", "Infinix Hot 7", "Infinix Hot 8", "Infinix Hot 9"],
    glassSize:
      '5.0–6.6" · Infinix Hot legacy budget line · early models use separate compact molds',
    glassSizeMm:
      "၅.၀–၆.၆ လက်မ · Infinix Hot အစောပိုင်း budget လိုင်း · compact mold များ သီးခြား",
  },
  {
    id: 616,
    brand: "Infinix",
    models: ["Infinix Note 3", "Infinix Note 4", "Infinix Note 5", "Infinix Note 6", "Infinix Note 7", "Infinix Note 8", "Infinix Note 10"],
    glassSize:
      '6.0–6.95" · Infinix Note large-screen legacy line · Pro trims are taller/wider',
    glassSizeMm:
      "၆.၀–၆.၉၅ လက်မ · Infinix Note မျက်နှာပြင်ကြီး လိုင်း · Pro trim အရွယ်ကွဲနိုင်",
  },
  {
    id: 617,
    brand: "Infinix",
    models: ["Infinix Hot 50", "Infinix Hot 50 Pro", "Infinix Hot 50 Pro+", "Infinix Hot 60", "Infinix Hot 60 Pro", "Infinix Hot 60 Pro+", "Infinix GT 30 Pro", "Infinix Smart 10", "Infinix Smart 10 Plus"],
    glassSize:
      '6.67–6.78" · latest Infinix Hot/GT/Smart wave · punch-hole flat vs curved Pro+ verify',
    glassSizeMm:
      "၆.၆၇–၆.၇၈ လက်မ · Infinix နောက်ဆုံးထွက် Hot/GT/Smart လိုင်း · Pro+ ကွေးမှန် SKU စစ်ပါ",
  },
  {
    id: 618,
    brand: "LG",
    models: ["LG Optimus G", "LG G2", "LG G3", "LG G4", "LG G5", "LG G6", "LG G7 ThinQ", "LG G8 ThinQ"],
    glassSize:
      '4.7–6.1" · LG G-series legacy flagship clearance · generation-specific stock',
    glassSizeMm:
      "၄.၇–၆.၁ လက်မ · LG G စီးရီး လက်ကျန် stock · မျိုးဆက်အလိုက် SKU ခွဲပါ",
  },
  {
    id: 619,
    brand: "LG",
    models: ["LG V10", "LG V20", "LG V30", "LG V35 ThinQ", "LG V40 ThinQ", "LG V50 ThinQ"],
    glassSize:
      '5.7–6.4" · LG V-series media flagship · secondary-screen V10/V20 bins differ',
    glassSizeMm:
      "၅.၇–၆.၄ လက်မ · LG V စီးရီး · V10/V20 secondary screen ပေါက်ကွဲပြား",
  },
  {
    id: 620,
    brand: "Lenovo",
    models: ["Lenovo A6000", "Lenovo A7000", "Lenovo K3 Note", "Lenovo K4 Note", "Lenovo K5 Note", "Lenovo K6 Note", "Lenovo K8 Note", "Lenovo K10 Note"],
    glassSize:
      '5.0–6.3" · Lenovo A/K Note legacy rack · India/China variants verify',
    glassSizeMm:
      "၅.၀–၆.၃ လက်မ · Lenovo A/K Note လက်ကျန် rack · India/China variant စစ်ပါ",
  },
  {
    id: 621,
    brand: "Nothing",
    models: ["Nothing Phone (3a)", "Nothing Phone (3a) Pro", "Nothing CMF Phone 1", "Nothing CMF Phone 2 Pro"],
    glassSize:
      '6.67–6.77" · Nothing/CMF mid-range flat slabs · Glyph vs CMF camera shelf separate',
    glassSizeMm:
      "၆.၆၇–၆.၇၇ လက်မ · Nothing / CMF mid-range ဖလက် · Glyph နှင့် CMF ကင်မရာ shelf မတူနိုင်",
  },
  {
    id: 622,
    brand: "Redmi",
    models: ["Redmi 1", "Redmi 1S", "Redmi 2", "Redmi 2 Prime", "Redmi 3", "Redmi 3S", "Redmi 4", "Redmi 4A", "Redmi 5", "Redmi 5 Plus"],
    glassSize:
      '4.7–5.99" · early Redmi digit-series · compact budget molds by generation',
    glassSizeMm:
      "၄.၇–၅.၉၉ လက်မ · Redmi အစောပိုင်း digit စီးရီး · မျိုးဆက်အလိုက် compact SKU",
  },
  {
    id: 623,
    brand: "Xiaomi",
    models: ["Mi 1", "Mi 2", "Mi 3", "Mi 4", "Mi 4i", "Mi 5", "Mi 5s", "Mi 6"],
    glassSize:
      '4.0–5.15" · Xiaomi Mi early flagship line · old-service specialty stock',
    glassSizeMm:
      "၄.၀–၅.၁၅ လက်မ · Xiaomi Mi အစောပိုင်း flagship · service stock သီးခြား",
  },
  {
    id: 624,
    brand: "Xiaomi",
    models: ["Mi 8", "Mi 8 Lite", "Mi 9", "Mi 9 Lite", "Mi 9T", "Mi 9T Pro", "Mi 10", "Mi 10 Pro", "Mi 11", "Mi 11 Lite"],
    glassSize:
      '6.21–6.81" · Mi notch-to-punch transition · Lite/T/Pro molds do not fully interchange',
    glassSizeMm:
      "၆.၂၁–၆.၈၁ လက်မ · Mi notch မှ punch ခေတ်ပြောင်း · Lite/T/Pro SKU ခွဲပါ",
  },
  {
    id: 625,
    brand: "Motorola",
    models: ["Moto G", "Moto G2", "Moto G3", "Moto G4", "Moto G4 Plus", "Moto G5", "Moto G5 Plus", "Moto G6", "Moto G6 Plus", "Moto G7", "Moto G7 Power"],
    glassSize:
      '4.5–6.2" · Moto G legacy retail rack · Plus/Power variants taller',
    glassSizeMm:
      "၄.၅–၆.၂ လက်မ · Moto G အစောပိုင်းမှ G7 လိုင်း · Plus/Power အရွယ်ကွဲနိုင်",
  },
  {
    id: 626,
    brand: "OnePlus",
    models: ["OnePlus One", "OnePlus 2", "OnePlus X", "OnePlus 3", "OnePlus 3T", "OnePlus 5", "OnePlus 5T"],
    glassSize:
      '5.0–6.01" · OnePlus early flagship line · 5T tall 18:9 bin separate',
    glassSizeMm:
      "၅.၀–၆.၀၁ လက်မ · OnePlus အစောပိုင်း flagship · 5T 18:9 SKU သီးခြား",
  },
  {
    id: 627,
    brand: "OnePlus",
    models: ["OnePlus 6", "OnePlus 6T", "OnePlus 7", "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7T Pro", "OnePlus 8", "OnePlus 8 Pro", "OnePlus 9", "OnePlus 9 Pro"],
    glassSize:
      '6.28–6.78" · notch/pop-up/punch OnePlus era · Pro curved molds split',
    glassSizeMm:
      "၆.၂၈–၆.၇၈ လက်မ · OnePlus notch/pop-up/punch ခေတ် · Pro ကွေးမှန် ခွဲပါ",
  },
  {
    id: 628,
    brand: "Vivo",
    models: ["Vivo V3", "Vivo V5", "Vivo V7", "Vivo V7+", "Vivo V9", "Vivo V11", "Vivo V15", "Vivo V15 Pro", "Vivo V17", "Vivo V19", "Vivo V20"],
    glassSize:
      '5.0–6.53" · Vivo V selfie-era legacy rack · pop-up and notch bins split',
    glassSizeMm:
      "၅.၀–၆.၅၃ လက်မ · Vivo V selfie ခေတ် · pop-up နှင့် notch SKU ခွဲပါ",
  },
  {
    id: 629,
    brand: "Oppo",
    models: ["Oppo F1", "Oppo F1s", "Oppo F3", "Oppo F3 Plus", "Oppo F5", "Oppo F7", "Oppo F9", "Oppo F11", "Oppo F11 Pro", "Oppo F15", "Oppo F17", "Oppo F19"],
    glassSize:
      '5.0–6.53" · Oppo F selfie / pop-up legacy line · Pro pop-up slot verify',
    glassSizeMm:
      "၅.၀–၆.၅၃ လက်မ · Oppo F selfie/pop-up လိုင်း · Pro pop-up ပေါက်စစ်ပါ",
  },
  {
    id: 630,
    brand: "Itel",
    models: ["Itel A16", "Itel A23", "Itel A25", "Itel A33", "Itel A36", "Itel A44", "Itel A46", "Itel A48", "Itel A56", "Itel A58"],
    glassSize:
      '5.0–6.6" · Itel A-series entry legacy rack · compact/dewdrop bins split',
    glassSizeMm:
      "၅.၀–၆.၆ လက်မ · Itel A စီးရီး entry လက်ကျန် rack · compact/dewdrop SKU ခွဲပါ",
  },
  {
    id: 631,
    brand: "Nokia",
    models: ["Nokia 1", "Nokia 2", "Nokia 2.1", "Nokia 3", "Nokia 3.1", "Nokia 5", "Nokia 5.1", "Nokia 6", "Nokia 6.1", "Nokia 7 Plus", "Nokia 8", "Nokia 8 Sirocco"],
    glassSize:
      '4.5–6.0" · HMD Nokia early Android line · Plus/Sirocco specialty molds',
    glassSizeMm:
      "၄.၅–၆.၀ လက်မ · HMD Nokia Android အစောပိုင်း · Plus/Sirocco SKU သီးခြား",
  },

  // ——————————————————————————————————————————————————————————————————
  // KKTech retailer SKU bins (multi-brand shared outer glass)
  // ——————————————————————————————————————————————————————————————————
  {
    id: 480,
    brand: "SH 14",
    models: [
      "Infinix Hot 10",
      "Infinix Hot 11S",
      "Infinix Hot 12",
      "Infinix Hot 20",
      "Infinix Hot 30",
      "Tecno Pova",
      "Tecno Spark 6",
      "Tecno Camon 16",
      "Tecno Camon 17P",
      "Tecno Camon 18",
      "Tecno Camon 18P",
      "Tecno Camon 19 Neo",
      "Tecno Pova Neo 2",
      "Tecno Spark 10 Pro",
      "Tecno Spark 20 Pro",
      "Tecno Pova 6 Neo",
      "Tecno Spark 30 4G",
      "Redmi 13",
      "Redmi 12",
      "Redmi Note 13R",
    ],
    glassSize:
      'SKU SH 14 · Hot / Pova / Camon / Spark cross-family + Redmi 12 · 13 · Note 13R · punch/V-notch trims vary — dry-fit',
    glassSizeMm:
      "SH 14 SKU · Infinix Hot / Tecno Pova-Camon-Spark နှင့် Redmi 12 · 13 · Note 13R တူညီ ကားပေါက် — notch/punch ကွဲပြား နိုင် — တပ်ဆင်မမီ စမ်းပါ",
  },
  {
    id: 481,
    brand: "SH 15",
    models: ["Oppo F9", "Oppo F9 Pro", "Realme 5 Pro"],
    glassSize:
      'SKU SH 15 · classic drop-notch mid era · shared outer slab — verify earpiece/sensor slots',
    glassSizeMm:
      "SH 15 SKU · အော်ပို F9 ခေတ် notch ဖေါင်ကျယ် · Realme 5 Pro နှင့် တူညီ နိုင်သော ဆိုင်လူမှ တပ်ဆင် မရွေးမီ ပေါက်ချင်း စစ်ပါ",
  },
  {
    id: 482,
    brand: "Modern Series",
    models: [
      "Realme C55",
      "Oppo A78",
      "OnePlus Nord N30 SE",
      "Oppo A1",
      "Realme 12",
      "Oppo A98 5G",
      "Oppo A58 4G",
    ],
    glassSize:
      'Modern-series retailer mold · BBK mid punch/capsule family · Nord N30 SE included — match printed listing',
    glassSizeMm:
      "Modern စီးရီး တစ်ချောင်းတည်း လက်ကား · Realme C55 / Oppo A78 / Nord N30 SE တို့ ပါဝင် — နိုင်ငံရှိ တံဆိပ်နှင့် SKU စစ်ပါ",
  },
  {
    id: 483,
    brand: "Latest 2024–2025",
    models: [
      "Infinix Hot 50",
      "Infinix Hot 50 Pro",
      "Honor X7C",
      "Vivo Y19s",
      "Tecno Spark 30 Pro",
      "Itel S25",
      "Realme C75",
      "Oppo A3 (2024)",
      "Oppo A3x (2024)",
    ],
    glassSize:
      '2024–2025 fresh-stock bin · budget punch-hole wave · Oppo A3/A3x refresh — regional naming drift — confirm fit',
    glassSizeMm:
      "၂၀၂၄–၂၀၂၅ ထုတ်သစ် လက်ကား · ဘတ်ဂျက် punch-hole လိုင်း · အော်ပို A3/A3x ပြန်လည် ထုတ် — နိုင်ငံအလိုက် နာမည်ကွဲ — တပ်ဆင်မမီ စမ်းပါ",
  },

  ...recent2026CompatibilityGroups,

  ...extendedCompatibilityGroups,
];
