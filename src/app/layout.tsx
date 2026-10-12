import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ankita Chandna | Elite Physiotherapy",
  description: "Advanced Physiotherapy & Clinical Rehab in Haldwani.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-slate-50 text-slate-950 selection:bg-blue-200 selection:text-blue-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}