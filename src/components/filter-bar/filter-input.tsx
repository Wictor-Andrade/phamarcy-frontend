"use client"

import {Search} from "lucide-react"
import {cn} from "@/lib/utils"
import {Input} from "@/components/ui/input"

interface FilterInputProps {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    className?: string
}

export function FilterInput({
                                placeholder = "Buscar...",
                                value,
                                onChange,
                                className,
                            }: FilterInputProps) {
    return (
        <div className={cn("flex items-center flex-1 gap-2", className)}>
            <Search className="h-4 w-4 text-secondary shrink-0" />
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 bg-transparent px-0"
            />
        </div>
    )
}
