"use client";

import {Calendar, ChevronRight, MoreHorizontal} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Input} from "@/components/ui/input"
import {cn} from "@/lib/utils"

export interface NavigationItem {
    active: boolean
    label: string
    notifications?: number
    disabled?: boolean
    setActive: (label: string) => void
}

interface NavigationProps {
    items: NavigationItem[]
}

export default function Navigation({ items }: NavigationProps) {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 p-4">
            <div className="flex items-center space-x-8">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => item.setActive(item.label)}
                        className={cn(
                            "relative flex items-center space-x-2 pb-2 text-sm font-medium transition-colors",
                            item.active
                                ? "text-blue-600 border-b-2 border-blue-600"
                                : item.disabled
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-gray-600 hover:text-blue-600"
                        )}
                        disabled={item.disabled}
                    >
                        <span>{item.label}</span>
                        {item.notifications && (
                            <Badge
                                variant="default"
                                className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center"
                            >
                                {item.notifications}
                            </Badge>
                        )}
                    </button>
                ))}

                <Button variant="ghost" size="sm" className="p-1">
                    <MoreHorizontal className="h-4 w-4 text-gray-600" />
                </Button>
            </div>

            <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Start date</span>
                    <div className="relative">
                        <Input type="text" placeholder="Select date" className="w-32 pr-8 text-sm" readOnly />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                </div>

                <ChevronRight className="h-4 w-4 text-gray-400" />

                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">End date</span>
                    <div className="relative">
                        <Input type="text" placeholder="Select date" className="w-32 pr-8 text-sm" readOnly />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}
