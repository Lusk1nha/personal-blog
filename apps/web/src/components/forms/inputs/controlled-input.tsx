"use client";

import { Input, InputProps } from "@personal-blog/ui/input.tsx";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Badge } from "@personal-blog/ui/badge.tsx";
import { FadeAnimate } from "@/components/utilities/animation";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@/components/errors/error-component";

interface ControlledInputProps<T extends FieldValues> extends InputProps {
  name: Path<T>;
  control: Control<T>;

  successfulMessage?: string;
}

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, successfulMessage, ...rest } = props;

  return (
    <ErrorBoundary fallback={<ErrorComponent title="Error to render input" />}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-y-100">
            <Input
              {...field}
              {...rest}
              value={field.value ?? ""}
              onChange={(e) => field.onChange(e.target.value)}
              error={!!fieldState.error?.message}
            />

            {fieldState.error?.message && (
              <FadeAnimate>
                <Badge type="error">{fieldState.error?.message}</Badge>
              </FadeAnimate>
            )}

            {successfulMessage && !fieldState.error?.message && (
              <FadeAnimate>
                <Badge type="success">{successfulMessage}</Badge>
              </FadeAnimate>
            )}
          </div>
        )}
      />
    </ErrorBoundary>
  );
}
