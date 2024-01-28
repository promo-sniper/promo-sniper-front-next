import "./globals.css";

import type { Metadata } from "next";
import { ReactNode } from "react";

import ReactQueryProvider from "@/utils/ReactQueryProvider";

import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Promo Sniper",
  description: "Todas as ofertas em um lugar só",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactQueryProvider>
          <Providers>{children}</Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
