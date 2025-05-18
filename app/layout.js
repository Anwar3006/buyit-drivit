import { Inter, Roboto, Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Navbar";
import { Toaster } from "sonner";

// Initialize Roboto font at the top level
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
const quicksand = Quicksand({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyIt-DrivIt",
  description: "Find and Buy your dream car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${roboto.variable} ${quicksand.variable} antialiased`}
        >
          <Toaster richColors />
          <main className="min-h-screen bg-gray-100 relative overflow-hidden">
            {children}
          </main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
