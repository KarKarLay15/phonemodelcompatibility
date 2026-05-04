/**
 * KKTech retailer compatibility families — tempered glass cutouts & outer dimensions.
 * OEM revisions & regional SKUs vary: always dry-fit before install.
 *
 * Primary catalog below; additional OEM rows live in `./models-extended`.
 */

import type { CompatibilityGroup } from "./compatibility-types";
import { extendedCompatibilityGroups } from "./models-extended";

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
    models: ["Galaxy S22 Ultra", "Galaxy S23 Ultra", "Galaxy S24 Ultra"],
    glassSize:
      '6.8" · curved Ultra mold · S Pen curve · camera island differs by gen — verify cut',
  },
  {
    id: 24,
    brand: "Samsung",
    models: ["Galaxy S23", "Galaxy S23+", "Galaxy S22", "Galaxy S22+"],
    glassSize:
      '6.1" / 6.6" · flat flagship contour armor — separate SKU per size tier',
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

  ...extendedCompatibilityGroups,
];
