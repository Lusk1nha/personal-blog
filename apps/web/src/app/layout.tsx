import { APP_DESCRIPTION, APP_NAME } from "@/shared/constants";
import "./styles.css";

import "@personal-blog/design-system/styles.css";
import "@personal-blog/ui/styles.css";

import type { Metadata } from "next";
import { SystemProviders } from "./_components/system-providers";

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
      <body>
        <SystemProviders>{children}</SystemProviders>
      </body>
    </html>
  );
}
