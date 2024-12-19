import type { Metadata } from "next";
import { cabin } from "@/component/font";
import Nav from "@/screen/Header/Nav";
import Footer from "@/screen/Footer/Footer";
import "../styles/gobal.css";

export const metadata: Metadata = {
  title: "Create a new ecom store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </head>
      <body style={{ backgroundColor: 'rgb(255, 255, 255)' }} className={cabin.className}><Nav /><main>{children}</main><Footer /></body>
    </html>
  );
}
