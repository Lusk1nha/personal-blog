"use client";

import { Input, InputProps } from "@personal-blog/ui/input.tsx";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface ControlledInputProps<T extends FieldValues> extends InputProps {
  name: Path<T>;
  control: Control<T>;
}

export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          {...rest}
          value={field.value ?? ""}
          onChange={(e) => field.onChange(e.target.value)}
        />
      )}
    />
  );
}
