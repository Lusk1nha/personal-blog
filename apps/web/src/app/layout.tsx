import { APP_DESCRIPTION, APP_NAME } from "@/constants";
import "./globals.css";

import "@personal-blog/design-system/styles.css";
import "@personal-blog/ui/styles.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
