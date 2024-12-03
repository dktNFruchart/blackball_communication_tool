import type { Metadata } from "next";
import "./globals.css";
import { exoSoft } from "@/utils/fonts/fonts";
import Header from "@/components/Header";
import Body from "@/components/Body";

export const metadata: Metadata = {
  title: "Blackball tools",
  description: "A tool communication for the blackball HDF commission",
  icons: {
    icon: "logo_hdf_color.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exoSoft.variable} antialiased`}>
        <Header />
        <Body> {children}</Body>
      </body>
    </html>
  );
}
