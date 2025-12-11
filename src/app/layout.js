import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ChooseTemplate from "@/components/common/ChooseTemplate/ChooseTemplate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Momorii",
  description: `Create your own personalized messages to your loved ones.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&family=Montserrat:wght@300;600&family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Toaster />
        <ChooseTemplate />
      </body>
    </html>
  );
}
