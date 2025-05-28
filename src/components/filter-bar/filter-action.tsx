"use client"

import type React from "react"

import {ArrowRight} from "lucide-react"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"

interface FilterActionProps {
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
  variant?: "default" | "search"
}

export function FilterAction({
  onClick,
  className,
  icon = <ArrowRight className="h-4 w-4" />,
  variant = "default",
}: FilterActionProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-none border-0 shadow-none",
        variant === "default" && "bg-transparent hover:bg-blue-600 text-foreground",
        className,
      )}
    >
      {icon}
    </Button>
  )
}
