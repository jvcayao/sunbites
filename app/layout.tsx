import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunbites — Your Healthy Kitchen",
  description:
    "A school canteen that swaps chips and instant noodles for rice meals, fresh fruit, and real veggies — cooked fresh every morning.",
  icons: { icon: "/sunbites-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
