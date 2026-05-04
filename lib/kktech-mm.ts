/** Myanmar (my) UI strings & quick brand filters — KKTech compatibility surfaces */

export type QuickBrandKey =
  | "apple"
  | "samsung"
  | "xiaomi_group"
  | "vivo"
  | "oppo"
  | "realme"
  | "huawei"
  | "honor"
  | "transsion"
  | "nothing";

export const QUICK_BRAND_CHIPS: { key: QuickBrandKey; label: string }[] = [
  { key: "apple", label: "Apple" },
  { key: "samsung", label: "Samsung" },
  { key: "xiaomi_group", label: "Xiaomi" },
  { key: "vivo", label: "Vivo" },
  { key: "oppo", label: "Oppo" },
  { key: "realme", label: "Realme" },
  { key: "huawei", label: "Huawei" },
  { key: "honor", label: "Honor" },
  { key: "transsion", label: "Tecno · Infinix" },
  { key: "nothing", label: "Nothing" },
];

export function brandMatchesQuickFilter(
  brand: string,
  key: QuickBrandKey,
): boolean {
  switch (key) {
    case "apple":
      return brand === "Apple";
    case "samsung":
      return brand === "Samsung";
    case "xiaomi_group":
      return brand === "Xiaomi" || brand === "Redmi" || brand === "Poco";
    case "vivo":
      return brand === "Vivo";
    case "oppo":
      return brand === "Oppo";
    case "realme":
      return brand === "Realme";
    case "huawei":
      return brand === "Huawei";
    case "honor":
      return brand === "Honor";
    case "transsion":
      return brand === "Tecno" || brand === "Infinix" || brand === "Itel";
    case "nothing":
      return brand === "Nothing";
  }
}

export const mm = {
  title: "ဖုန်းမှန်မကွဲ မော်ဒယ်တူများ ရှာဖွေရန်",
  subtitle:
    "တူညီသော မှန်မကွဲ ဆိုဒ်ရှိသော ဖုန်းမော်ဒယ်များကို ရှာဖွေကြည့်ရှုနိုင်ပါသည်။",
  searchPlaceholder:
    "ဖုန်းအမျိုးအစား သို့မဟုတ် Brand နာမည်ရိုက်ထည့်ပါ...",
  searchAria: "တူညီမှန်မကွဲ ရှိသော ဖုန်းမော်ဒယ်များ ရှာဖွေရန်",
  glassPrefix: "မှန်ဆိုဒ်",
  emptyNoMatch: "ရှာဖွေထားသော မော်ဒယ် မရှိပါ",
  emptyQueryHint: "ရိုက်ထည့်ထားသော စာသား",
  footerExplain:
    "ကတ်တစ်ခုတည်းတွင် ဖော်ပြထားသော ဖုန်းများအားလုံးသည် မှန်မကွဲ ဆိုဒ်တူညီကြပါသည်။",
  footerVerified: "KKTech မှ အတည်ပြုပြီး",
  footerDisclaimer:
    "မှန်အပေါက်ပုံစံနှင့် ထုတ်လုပ်သူ ပြင်ဆင်မှုများ ကွဲပြားနိုင်ပါသည်။ တပ်ဆင်မမီ စမ်းသပ်အတည်ပြုပါ။",
  quickBrandsTitle: "လူသုံးအများဆုံး Brand များ",
  allModels: "All Model",
  fabSearch: "ရှာရန်",
  scrollTopAria: "စာမျက်နှာထိပ် ပြန်သွားရန်",
  srModelsFor: "တူညီမော်ဒယ်များ",
  tagSearch: "ရှာရန်",
  backTools: "ကိရိယာများ သို့",
  kktHeading: "KKTech မော်ဒယ်တူညီမှန်",
  findSharedLine:
    "တူညီသော မှန်မကွဲ ဆိုဒ်ရှိသော မော်ဒယ်များကို ရှာဖွေပါ",
  langAriaMm: "ဘာသာစကား ပြောင်းရန် — မြန်မာ သက်ရောက်နေသည်",
  langAriaEn: "Switch language — English is active",
  langSwitchToEn: "English",
  langSwitchToMm: "မြန်မာ",
} as const;

/** English copy for main compatibility page */
export const en = {
  title: "Phone Model Compatibility",
  subtitle:
    "Search a device to see which models share the same tempered glass cutout and size.",
  searchPlaceholder: "Search model or brand...",
  searchAria: "Search compatible phone models",
  glassPrefix: "Glass Size",
  emptyNoMatch: "No matching models found",
  emptyQueryHint: "Your search",
  footerExplain:
    "Models listed in the same card share the same screen dimensions and tempered glass cutout.",
  footerVerified: "KKTech Verified",
  footerDisclaimer:
    "Cutouts and OEM revisions vary — always confirm with a physical fit check before installation.",
  quickBrandsTitle: "Popular brands",
  allModels: "All Model",
  fabSearch: "Search",
  scrollTopAria: "Scroll to top",
  srModelsFor: "Compatible models",
  tagSearch: "Search",
  backTools: "Back to tools",
  kktHeading: "KKTech Compatibility",
  findSharedLine: "Find shared tempered glass sizes across models",
  langAriaMm: "Switch language — Myanmar is active",
  langAriaEn: "Switch language — English is active",
  langSwitchToEn: "English",
  langSwitchToMm: "မြန်မာ",
} as const;

export type PageLang = "mm" | "en";

export type PageStrings = typeof mm | typeof en;

export function pageStrings(lang: PageLang): PageStrings {
  return lang === "mm" ? mm : en;
}

export function chipHaptic() {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(10);
  }
}
