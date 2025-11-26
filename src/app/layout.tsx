import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "379th Bomb Group Memorial - The Grand Slam Group",
  description: "Preserving the history of the 379th Bombardment Group (Heavy) of the Mighty 8th Air Force. Honoring the men who flew B-17 Flying Fortresses from Kimbolton, England during World War II.",
  keywords: "379th Bomb Group, WWII, World War 2, B-17, Flying Fortress, Mighty 8th Air Force, Kimbolton, England, Grand Slam Group, Triangle K",
  openGraph: {
    title: "379th Bomb Group Memorial - The Grand Slam Group",
    description: "Preserving the history of the 379th Bombardment Group (Heavy) of the Mighty 8th Air Force.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
