import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyIt-DrivIt",
  description: "Find and Buy your dream car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <Header />

          <main className="min-h-screen">{children}</main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
