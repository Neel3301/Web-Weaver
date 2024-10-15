import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "@/app/loading";

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
    <div className={`${inter.className} bg-black`}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
