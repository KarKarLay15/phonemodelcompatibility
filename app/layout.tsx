import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  variable: "--font-noto-myanmar",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ဖုန်းမှန်မကွဲ မော်ဒယ်တူများ ရှာဖွေရန် · KKTech",
  description:
    "တူညီသော မှန်မကွဲ ဆိုဒ်ရှိသော ဖုန်းမော်ဒယ်များကို ရှာဖွေကြည့်ရှုနိုင်ပါသည်။",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "KKTech",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="my" className={`h-full ${inter.variable} ${notoSansMyanmar.variable}`}>
      <body
        className="min-h-dvh overflow-x-hidden overflow-y-auto bg-black font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
