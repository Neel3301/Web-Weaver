import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Weaver",
  description: "No - Code Web Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black`}>
          <Suspense
            fallback={
              <Loading msg="Hang tight! We’re bringing everything together for you." />
            }
          >
            {children}
          </Suspense>
        </body>
      </html>
    </ClerkProvider>
  );
}
