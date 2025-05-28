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
              "flex items-stretch border rounded-lg overflow-hidden shadow-sm w-full",
              className,
          )}
      >
        {children}
      </div>
  )
}
