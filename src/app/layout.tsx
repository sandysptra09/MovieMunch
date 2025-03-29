import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

// import providers 
import { Providers } from "./providers";

// import components
import Navbar from "@/components/Navbar/Navbar";


// import poppins (body Text)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MovieMunch - Movies You Crave, Just Like Snacks!",
  description: "Movies You Crave, Just Like Snacks!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ backgroundColor: "black" }}>
        <Providers>
          <div className="">
            {/* Navbar */}
            <Navbar />

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
