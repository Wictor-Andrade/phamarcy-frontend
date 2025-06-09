"use client"

import type React from "react"

import {StepIndicator} from "@/components/step-indicator"
import {useMultiStep} from "@/contexts/multi-step-context"

interface MultiStepFormProps {
    children: React.ReactNode[]
}

export function MultiStepForm({ children }: MultiStepFormProps) {
    const { currentStep } = useMultiStep()

    return (
        <div className="p-8 flex justify-center w-full">
            <div className="w-full max-w-[900px] flex flex-col gap-8">
                <StepIndicator />
                {children[currentStep]}
            </div>
        </div>
    )
}
