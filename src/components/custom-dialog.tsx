"use client"

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {Button, ButtonProps} from "@/components/ui/button"

export type DialogButton = {
    label: string
    onClick?: () => void
    variant?: ButtonProps["variant"]
    disabled?: boolean
}

type Props = {
    isOpen: boolean
    onClose: () => void
    title: string
    description?: string
    buttons?: DialogButton[]
}

export function CustomDialog({ isOpen, onClose, title, description, buttons }: Props) {
    return (
        <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>

                <DialogFooter className="space-x-2">
                    {buttons?.map(({ label, onClick, variant, disabled }, idx) => (
                        <Button
                            key={idx}
                            variant={variant}
                            disabled={disabled}
                            onClick={() => {
                                onClick?.()
                                onClose()
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
