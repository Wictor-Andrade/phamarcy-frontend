"use client"

import {createContext, type ReactNode, useContext, useEffect, useState} from "react"

export interface Step {
    id: number
    title: string
    status?: string
    subtitle?: string
}

interface MultiStepContextType {
    currentStep: number
    steps: Step[]
    formData: Record<string, any>
    setCurrentStep: (step: number) => void
    updateFormData: (field: string, value: any) => void
    nextStep: () => void
    prevStep: () => void
    markStepAsCompleted: (stepId: number) => void
    markStepAsCurrent: (stepId: number) => void
    reset: () => void
}

const MultiStepContext = createContext<MultiStepContextType | undefined>(undefined)

interface MultiStepProviderProps {
    children: ReactNode
    initialSteps: Step[]
    initialData?: Record<string, any>
}
export function MultiStepProvider({ children, initialSteps, initialData = {} }: MultiStepProviderProps) {
    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState<Step[]>(initialSteps)
    const [formData, setFormData] = useState<Record<string, any>>(initialData)

    const updateFormData = (field: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const nextStep = () => {
        setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev))
    }

    const prevStep = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
    }

    const markStepAsCompleted = (stepId: number) => {
        setSteps((prev) =>
            prev.map((step) =>
                step.id === stepId ? { ...step, status: "completed", subtitle: "Completed" } : step
            )
        )
    }

    const markStepAsCurrent = (index: number) => {
        setSteps((prev) =>
            prev.map((step, i) => {
                if (i === index) {
                    return { ...step, status: "current", subtitle: "Incomplete step" }
                } else if (i < index) {
                    return { ...step, status: "completed", subtitle: "Completed" }
                } else {
                    return { ...step, status: "upcoming", subtitle: "Next step" }
                }
            })
        )
    }

    const reset = () => {
        setCurrentStep(0)
        setSteps(initialSteps.map((step, index) => ({
            ...step,
            status: index === 0 ? "current" : "upcoming",
            subtitle: index === 0 ? "Incomplete step" : "Next step"
        })))
        setFormData(initialData)
    }

    useEffect(() => {
        markStepAsCurrent(currentStep)
    }, [currentStep])

    return (
        <MultiStepContext.Provider
            value={{
                currentStep,
                steps,
                formData,
                setCurrentStep,
                updateFormData,
                nextStep,
                prevStep,
                markStepAsCompleted,
                markStepAsCurrent,
                reset,
            }}
        >
            {children}
        </MultiStepContext.Provider>
    )
}

export function useMultiStep() {
    const context = useContext(MultiStepContext)
    if (context === undefined) {
        throw new Error("useMultiStep must be used within a MultiStepProvider")
    }
    return context
}
