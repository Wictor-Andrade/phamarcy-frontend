"use client"

import type React from "react"

import {StepIndicator} from "@/components/step-indicator"
import {useMultiStep} from "@/contexts/multi-step-context";

interface MultiStepFormProps {
    children: React.ReactNode[]
}

export function MultiStepForm({ children }: MultiStepFormProps) {
    const { currentStep } = useMultiStep()

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl">
                <StepIndicator />
                {children[currentStep]}
            </div>
        </div>
    )
}
