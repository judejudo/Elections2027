import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elections2027",
  description: "Let's Reach everyone!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} text-stone-950 bg-stone-100`}>
        <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
