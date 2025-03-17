import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

// import providers 
import { Providers } from "./providers";

// import oswald (heading)
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={`${oswald.variable} ${poppins.variable} font-heading font-body antialiased`}>
        <Providers>
          <div className="">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
