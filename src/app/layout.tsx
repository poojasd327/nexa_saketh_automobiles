import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saketh Automobiles | NEXA Premium Showroom & Service",
  description: "Experience automotive luxury redefined at Saketh Automobiles NEXA. Explore Grand Vitara, Invicto, Fronx, Jimny, Baleno, XL6, Ignis & Ciaz. Book service appointments, test drives, and explore genuine Nexa accessories.",
  keywords: "NEXA, Saketh Automobiles, Car Service Centre near me, Maruti Nexa Tumkur, Sirra Road Nexa, Grand Vitara, Invicto, Fronx, Jimny, Baleno, XL6, Ignis, Ciaz, Car Repair, Service Booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
