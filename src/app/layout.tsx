"use client";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ToastContainer} from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "A Barateira",
//   description: "Retaguarda A Barateira",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-Br" className='light'>
    <head>
        <title>A Barateira</title>
        <meta name="description" content="Retaguarda A Barateira" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
          {children}
      </body>
    </html>
  );
}
