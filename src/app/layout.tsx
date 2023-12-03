import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
              src="/background.svg"
              className="w-full "
              alt=""
              width={500}
              height={500}
            />
            <div className="absolute bottom-0 right-0 w-[24.9%] h-[34.9%] bg-white"></div>
            <div className="absolute bottom-0 right-0 w-[25%] h-[35%] bg-[#0d0d0d] rounded-br-full"></div>
          </div>
          <div className="relative flex min-h-screen">
            <div className="absolute left-0 top-0 w-[25%] h-[35%] bg-[#0d0d0d]"></div>
            <div className="absolute top-0 left-0 w-[25%] h-[35%] bg-white rounded-tl-full"></div>
          </div>
        </div>
        <div className="flex tracking-wide px-5 justify-center">{children}</div>
      </body>
    </html>
  );
}
