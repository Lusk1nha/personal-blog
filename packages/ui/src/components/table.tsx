import { cn } from "@personal-blog/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const tableVariants = cva("border rounded-8", {
  variants: {
    variant: {
      default: "w-full border-system-table-border",
    },
    size: {
      default: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  className?: string;
}

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { className, variant, size, children, ...rest } = props;

  return (
    <table
      data-component="Table"
      ref={ref}
      className={cn(
        tableVariants({
          variant,
          size,
          className,
        })
      )}
      {...rest}
    >
      {children}
    </table>
  );
});

const TableCell = forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <th
      data-component="TableCell"
      ref={ref}
      className={cn(
        "border-system-table-border rounded-8 p-075",
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
});

Table.displayName = "Table";

export { Table, TableCell, tableVariants };
