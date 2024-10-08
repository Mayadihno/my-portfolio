import type { Metadata } from "next";
import "./globals.css";
import { Prociono } from "next/font/google";
import Sidebar from "./_components/Sidebar/Sidebar";
import { AOSInit } from "./_components/Aos/Aos";
import "aos/dist/aos.css";
import Navbar from "./_components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

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
        <body className={`${prociono.className} antialiased overflow-x-hidden`}>
          <div className="flex md:flex-row flex-col justify-between max-w-full">
            <div className="sticky top-0 z-50 block md:hidden w-full">
              <Navbar />
            </div>
            <div className="w-[100px] sm:hidden hidden md:block sticky left-0 top-0 shadow-xl h-screen bg-[#189FB0]">
              <Sidebar />
            </div>
            <div className="w-full">{children}</div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </AOSInit>
    </html>
  );
}
