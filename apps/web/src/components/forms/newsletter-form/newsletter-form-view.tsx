"use client";

import { useFormContext } from "react-hook-form";
import { NewsletterValidationType } from "./newsletter-validation";

import { Label } from "@personal-blog/ui/label.tsx";
import { Input } from "@personal-blog/ui/input.tsx";
import { SlideAnimate } from "@/components/utilities/animation";
import { Button } from "@personal-blog/ui/button.tsx";
import { Text } from "@personal-blog/ui/text.tsx";
import { ControlledInput } from "../inputs/controlled-input";

interface NewsletterFormViewProps {
  onSubmit: (data: NewsletterValidationType) => void;
}

export function NewsletterFormView(props: Readonly<NewsletterFormViewProps>) {
  const { onSubmit } = props;

  const form = useFormContext<NewsletterValidationType>();
  const { handleSubmit } = form;

  return (
    <form className="flex flex-col gap-y-200" onSubmit={handleSubmit(onSubmit)}>
      <SlideAnimate direction="up">
        <fieldset className="flex flex-col gap-y-075">
          <Label required>Email Address</Label>
          <ControlledInput
            type="email"
            name="email"
            control={form.control}
            placeholder="email@example.com"
          />
        </fieldset>
      </SlideAnimate>

      <SlideAnimate>
        <div className="flex flex-col gap-y-100">
          <div>
            <Button className="h-12.5 px-300" type="submit" variant="primary">
              Stay updated
            </Button>
          </div>

          <Text>Unsubscribe anytime. No spam, I promise 🙂</Text>
        </div>
      </SlideAnimate>
    </form>
  );
}
