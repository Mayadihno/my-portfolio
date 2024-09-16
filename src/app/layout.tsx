import type { Metadata } from "next";
import "./globals.css";
import { Prociono } from "next/font/google";
import Sidebar from "./_components/Sidebar/Sidebar";
import { AOSInit } from "./_components/Aos/Aos";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Mayadihno Porfolio",
  description: "My portfolio and everything you need to know about me",
};

// Import Prociono font
const prociono = Prociono({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit>
        <body className={`${prociono.className} antialiased`}>
          <div className="flex justify-between w-full">
            <div className="w-[100px] sticky left-0 top-0 shadow-xl h-screen bg-[#189FB0]">
              <Sidebar />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </body>
      </AOSInit>
    </html>
  );
}
