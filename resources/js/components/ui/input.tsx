import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const isDate = type === "date"
  return (
    <input
      type={type}
      data-slot="input"
      onClick={isDate ? (e) => (e.currentTarget as HTMLInputElement).showPicker?.() : undefined}
      className={cn(
        "flex w-full min-w-0 rounded-md",
        isDate
          ? "bg-gray-800 text-white placeholder-gray-400 border border-gray-700 px-3 py-2 cursor-pointer"
          : "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-9 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
