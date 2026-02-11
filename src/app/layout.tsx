import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kvell Dynamics — Building a Better Tomorrow, One Data-Driven Decision at a Time",
  description:
    "AI-driven solutions for data management, business process automation, and machine learning to enhance decision-making and operational efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <SmoothScroll>{children}</SmoothScroll>
        </body>
    </html>
  );
}
