import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/footer";
import Header from "./Components/header";
import WhatsAppButton from "./Components/icon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zervia Tech Solutions",
  description: "Delivering Digital Excellence Globally",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
