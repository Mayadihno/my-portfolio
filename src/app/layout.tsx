import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./_components/Sidebar/Sidebar";

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
  title: "Mayadihno Porfolio",
  description: "My portfolio and everything you need to know about me",
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
        <div className="flex justify-between w-full">
          <div className="w-[10%] sticky left-0 top-0 h-screen bg-[#189FB0]">
            <Sidebar />
          </div>
          <div className=" w-full bg-[#00CFDF]">{children}</div>
        </div>
      </body>
    </html>
  );
}
