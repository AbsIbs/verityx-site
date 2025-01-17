import { Montserrat } from "next/font/google";
import "./globals.css";

// Providers
import Providers from "./providers";

// Components
import NavbarComponent from "@/components/navbar";

// Fonts
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Verityx Consulting",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={montserrat.className}>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
