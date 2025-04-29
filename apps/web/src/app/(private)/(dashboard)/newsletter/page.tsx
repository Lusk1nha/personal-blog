import { Separator } from "@personal-blog/ui/separator.tsx";
import { PageWrapper } from "../_components/page-wrapper";
import { NewsletterPageInfo } from "./_components/page-info";
import { MadeWith } from "../_components/made-with/made-with";
import { NewsletterForm } from "@/components/forms/newsletter-form/newsletter-form";

export default function NewsletterPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-y-300">
        <NewsletterPageInfo />
        <NewsletterForm />
      </div>

      <div className="flex flex-col gap-y-300">
        <Separator />
        <MadeWith />
      </div>
    </PageWrapper>
  );
}
