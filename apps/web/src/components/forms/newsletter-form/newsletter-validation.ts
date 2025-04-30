import { z } from "zod";

export const newsletterValidation = z.object({
  email: z
    .string({
      required_error: "Please enter your email address.",
      invalid_type_error: "Email must be a string",
    })
    .email("Please enter a valid email address."),
});

export type NewsletterValidationType = z.infer<typeof newsletterValidation>;
