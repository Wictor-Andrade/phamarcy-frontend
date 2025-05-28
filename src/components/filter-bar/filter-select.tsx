"use client"

import {Search} from "lucide-react"
import {cn} from "@/lib/utils"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

interface FilterSelectProps {
  placeholder: string
  options: { value: string; label: string }[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  showSearch?: boolean
}

export function FilterSelect({
  placeholder,
  options,
  value,
  onValueChange,
  className,
  showSearch = true,
}: FilterSelectProps) {
  return (
      <div className={cn("flex items-center flex-1", className)}>
      {showSearch && (
        <div className="px-3">
          <Search className="h-4 w-4 text-secondary" />
        </div>
      )}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="border-0 shadow-none focus:ring-0 min-w-[140px] bg-transparent">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
