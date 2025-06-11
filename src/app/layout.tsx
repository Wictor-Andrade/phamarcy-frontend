import "./globals.css";
import {Geist, Geist_Mono} from "next/font/google";

import {Metadata} from "next";
import {AuthProvider} from "@/features/auth/contexts/auth-context";
import {Toaster} from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Barateira",
  description: "Retaguarda A Barateira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-Br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Toaster />
          <AuthProvider>
              {children}
          </AuthProvider>
      </body>
    </html>
  );
}
