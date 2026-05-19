import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Affiliate Coupons",
  description: "Find the best deals and coupons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
          <Toaster position="bottom-right" />
        </NextAuthProvider>
      </body>
    </html>
  );
}
