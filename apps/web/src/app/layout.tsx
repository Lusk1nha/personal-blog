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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-hidden" lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon-32x32.png"
        />
      </head>
      <body>
        <SystemProviders>{children}</SystemProviders>
      </body>
    </html>
  );
}
