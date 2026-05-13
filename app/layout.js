// 
import { Geist, Geist_Mono, Merriweather, Raleway, Montserrat } from "next/font/google";
import "./globals.css";

// Configure Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Site metadata for SEO
export const metadata = {
  title: "Literary Palace",
  description: "Discover the beauty of literature with comprehensive guides, analysis, and insights into the greatest works of human imagination. Join thousands of literature enthusiasts on their journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${raleway.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
