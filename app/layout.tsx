import type { Metadata } from "next";
import localFont from "next/font/local";
// import { IBM_Plex_serif, Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"], variable: "--font-tnter" });
// const ibmplexserif = IBM_Plex_serif({
  // subsets: ["latin"],
  // weight: ["400", "700"],
  // variable: "--font-ibm-plex-sarif",
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a moden Banking platform for everyone",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
