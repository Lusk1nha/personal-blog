"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  newsletterValidation,
  NewsletterValidationType,
} from "./newsletter-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterFormView } from "./newsletter-form-view";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/components/errors/error-component";

interface NewsletterFormProps {
  defaultValues?: NewsletterValidationType;
}

export function NewsletterForm(props: Readonly<NewsletterFormProps>) {
  const { defaultValues } = props;

  const form = useForm<NewsletterValidationType>({
    defaultValues,
    resolver: zodResolver(newsletterValidation),
  });

  async function onSubmit(data: NewsletterValidationType) {
    console.log("Form submitted", data);
  }

  return (
    <ErrorBoundary
      fallback={
        <ErrorComponent
          title="Error to render newsletter form"
          description="Please try again later."
        />
      }
    >
      <FormProvider {...form}>
        <NewsletterFormView onSubmit={onSubmit} />
      </FormProvider>
    </ErrorBoundary>
  );
}
