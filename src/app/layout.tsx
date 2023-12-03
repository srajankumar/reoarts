import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Reo Arts",
    template: `%s - Reo Arts`,
  },
  description: "srajan's pencil creations.",
  keywords: [
    "Reoarts",
    "Instagram",
    "Arts",
    "Aesthetic",
    "Artist",
    "Sketch",
    "Drawing",
  ],
  creator: "so-sc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reoarts.vercel.app/",
    title: "Reo Arts",
    description: "srajan's pencil creations.",
    siteName: "Reo Arts",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark only",
    "twitter:image": "https://reoarts.vercel.app/og.png",
    "twitter:card": "summary_large_image",
    "og:url": "reoarts.vercel.app",
    "og:image": "https://reoarts.vercel.app/og.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <div className="absolute -z-10">
          <div className="relative flex bg-[#0d0d0d] min-h-screen ">
            <Image
              priority
              src="/background.svg"
              className="w-full "
              alt=""
              width={500}
              height={500}
            />
            <div className="absolute bottom-0 right-0 w-[24.9%] h-[34.9%] bg-white" />
            <div className="absolute bottom-0 right-0 w-[25%] h-[35%] bg-[#0d0d0d] rounded-br-full" />
          </div>
          <div className="relative flex min-h-screen">
            <div className="absolute left-0 top-0 w-[25%] h-[35%] bg-[#0d0d0d]" />
            <div className="absolute top-0 left-0 w-[25%] h-[35%] bg-white rounded-tl-full" />
          </div>
        </div>
        <div className="flex md:mb-20 mb-10 tracking-wide px-5 justify-center">
          <ScrollToTopButton />
          {children}
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div className="relative">
          <div className="absolute -z-10 left-0 top-0 w-[25%] h-[35%] bg-[#0d0d0d]" />
          <div className="absolute -z-10 top-0 left-0 w-[25%] h-[35%] bg-white rounded-tl-full" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
