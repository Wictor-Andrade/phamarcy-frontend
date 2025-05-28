"use client"

import {Calendar, ChevronDown} from "lucide-react"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar as CalendarComponent} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {format} from "date-fns"
import {useState} from "react"

interface FilterDateProps {
  placeholder: string
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  className?: string
  showCalendarIcon?: boolean
}

export function FilterDate({ placeholder, value, onValueChange, className, showCalendarIcon = true }: FilterDateProps) {
  const [open, setOpen] = useState(false)

  return (
      <div className={cn("flex items-center flex-1", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "justify-start text-left font-normal border-0 shadow-none focus:ring-0 min-w-[120px] bg-transparent",
              !value && "text-muted-foreground",
            )}
          >
            <div className="flex items-center gap-2">
              {value ? format(value, "PPP") : placeholder}
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={value}
            onSelect={(date) => {
              onValueChange?.(date)
              setOpen(false)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {showCalendarIcon && (
        <div className="px-3">
          <Calendar className="h-4 w-4 text-secondary" />
        </div>
      )}
    </div>
  )
}
