import React from "react";

import { NewsletterPageInfo } from "./_components/page-info";
import { NewsletterForm } from "@/components/forms/newsletter-form/newsletter-form";

export default function NewsletterPage() {
  return (
    <React.Fragment>
      <NewsletterPageInfo />
      <NewsletterForm />
    </React.Fragment>
  );
}
