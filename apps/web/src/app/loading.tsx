"use client";

import { Spinner } from "@personal-blog/ui/spinner.tsx";

export default function RootLoading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background">
      <Spinner />
    </div>
  );
}
