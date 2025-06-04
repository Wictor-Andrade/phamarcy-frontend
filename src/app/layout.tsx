import "./globals.css";
import {Toaster} from "sonner";
import {Geist, Geist_Mono} from "next/font/google";

import {Metadata} from "next";

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
    <html lang="pt-Br" className='light'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Toaster
          position="bottom-left"
          closeButton
          theme="light"
          richColors={false}
          toastOptions={{
              classNames: {
                  toast: 'cursor-pointer',
              },
          }}
      />
          {children}
      </body>
    </html>
  );
}
