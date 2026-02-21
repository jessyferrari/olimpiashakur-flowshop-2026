import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olimpia Shakur • Flow Shop - Copa do Mundo & Tech 2026",
  description: "Curadoria 2026 (Amazon, Mercado Livre, Hotmart, Kiwify).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
