import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gentle Smiles Oral Care | Dental Clinic in Meru",
    template: "%s | Gentle Smiles Oral Care",
  },

  description:
    "Gentle Smiles Oral Care provides comprehensive dental care in Equator, Meru, Kenya, including preventive, restorative, cosmetic, orthodontic, implant and oral surgical care.",

  keywords: [
    "Gentle Smiles Oral Care",
    "dentist in Meru",
    "dental clinic in Meru",
    "dentist Equator Meru",
    "dental implants Meru",
    "braces Meru",
    "veneers Meru",
    "oral surgery Meru",
    "teeth cleaning Meru",
    "root canal Meru",
    "cosmetic dentistry Meru",
  ],

  authors: [
    {
      name: "Gentle Smiles Oral Care",
    },
  ],

  creator: "Gentle Smiles Oral Care",

  metadataBase: new URL(
    "https://gentlesmilesoralcare.vercel.app"
  ),

  openGraph: {
    title: "Gentle Smiles Oral Care | Dental Clinic in Meru",
    description:
      "Comprehensive dental care in Equator, Meru, Kenya.",
    type: "website",
    locale: "en_KE",
    siteName: "Gentle Smiles Oral Care",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}