"use client"

import {Check} from "lucide-react"
import {cn} from "@/lib/utils"
import {useMultiStep} from "@/contexts/multi-step-context"

export function StepIndicator() {
    const { steps } = useMultiStep()

    return (
        <div className="flex items-center justify-between w-full">
            {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-1">
                            <div
                                className={cn(
                                    "flex items-center justify-center w-6 h-6 rounded-full border-2",
                                    step.status === "completed" && "bg-green-500 border-green-500",
                                    step.status === "current" && "bg-red-500 border-red-500",
                                    step.status === "upcoming" && " bg-blue-600 border-blue-600",
                                )}
                            >
                                {step.status === "completed" ? (
                                    <Check className="w-4 h-4 text-white" />
                                ) : (
                                    <span
                                        className={cn(
                                            "text-sm font-medium",
                                            step.status === "current" && "text-red-500",
                                            step.status === "upcoming" && "text-primary",
                                        )}
                                    >
                  </span>
                                )}
                            </div>

                            {/* Step Title */}
                            <span
                                className={cn(
                                    "ml-2 text-sm font-medium",
                                    step.status === "completed" && "text-primary",
                                    step.status === "current" && "text-primary",
                                    step.status === "upcoming" && "text-primary",
                                )}
                            >
                {step.id}. {step.title}
              </span>
                        </div>

                        {/* Step Status */}
                        <div
                            className={cn(
                                "text-xs ml-8",
                                step.status === "completed" && "text-green-600",
                                step.status === "current" && "text-red-500",
                                step.status === "upcoming" && "text-blue-600",
                            )}
                        >
                            {step.subtitle}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
