"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export interface DialogButton {
    label: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
    onClick: () => void
    disabled?: boolean
    loading?: boolean
    className?: string
}

export interface CustomDialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
    description?: string
    children?: React.ReactNode
    buttons?: DialogButton[]
    size?: "sm" | "md" | "lg" | "xl" | "full"
    showCloseButton?: boolean
    closeOnOverlayClick?: boolean
    className?: string
}

const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
}

export function CustomDialog({
                                 isOpen,
                                 onClose,
                                 title,
                                 description,
                                 children,
                                 buttons = [],
                                 size = "md",
                                 showCloseButton = true,
                                 closeOnOverlayClick = true,
                                 className = "",
                             }: CustomDialogProps) {
    const handleOpenChange = (open: boolean) => {
        if (!open && closeOnOverlayClick) {
            onClose()
        }
    }

    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogContent
              className={`${sizeClasses[size]} ${className}`}
              onPointerDownOutside={(e) => {
                  if (!closeOnOverlayClick) {
                      e.preventDefault()
                  }
              }}
              onEscapeKeyDown={(e) => {
                  if (!closeOnOverlayClick) {
                      e.preventDefault()
                  }
              }}
          >
              <DialogHeader>
                  <DialogTitle>{title}</DialogTitle>
                  {description && <DialogDescription>{description}</DialogDescription>}
              </DialogHeader>

              {children && <div className="py-4">{children}</div>}

              {buttons.length > 0 && (
                <DialogFooter className="flex-col sm:flex-row gap-2">
                    {buttons.map((button, index) => (
                      <Button
                        key={index}
                        variant={button.variant || "default"}
                        size={button.size || "default"}
                        onClick={button.onClick}
                        disabled={button.disabled || button.loading}
                        className={button.className}
                      >
                          {button.loading && (
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          )}
                          {button.label}
                      </Button>
                    ))}
                </DialogFooter>
              )}
              {!showCloseButton && (
                  <style jsx>{`
            [data-radix-dialog-content] > button[aria-label="Close"] {
              display: none;
            }
          `}</style>
              )}
          </DialogContent>
      </Dialog>
    )
}