import {cn} from "@/lib/utils"
import type {ReactNode} from "react"

interface FilterBarProps {
  children: ReactNode
  className?: string
}

export function FilterBar({ children, className }: FilterBarProps) {
  return (
      <div
          className={cn(
              "flex items-center border rounded-lg shadow-sm w-full px-2 gap-2",
              className,
          )}
      >
        {children}
      </div>
  )
}
