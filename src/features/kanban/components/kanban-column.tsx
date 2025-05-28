"use client"

import type React from "react"

import {Button} from "@/components/ui/button"
import {PlusIcon} from "lucide-react"

interface KanbanColumnProps {
    title: string
    children: React.ReactNode
    onAddCard: () => void
}

export default function KanbanColumn({ title, children, onAddCard }: KanbanColumnProps) {
    return (
        <div className="min-w-[200px] max-w-[300px]bg-blue-200 text-blue-700 rounded-t-lg border border-blue-300">
            <div className="p-3">
                <h2 className="font-medium">{title}</h2>
            </div>
            <div className="flex flex-col gap-4 p-4">
                {children}
                <Button
                    variant="ghost"
                    className="flex items-center justify-start  hover:bg-blue-100 p-2"
                    onClick={onAddCard}
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    New Task
                </Button>
            </div>
        </div>
    )
}
