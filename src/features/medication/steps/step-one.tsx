"use client"

import {useMultiStep} from "@/contexts/multi-step-context"

export function StepOne() {
    const { nextStep, markStepAsCompleted } = useMultiStep()

    const handleSelect = () => {
        markStepAsCompleted(1)
        nextStep()
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-primary mb-8">Choose the type of registration</h2>

            <div className="space-y-4">
                <p className="text-gray-600">Select the type of registration you want to proceed with.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        onClick={handleSelect}
                        className="p-4 border border-secondary rounded-lg cursor-pointer hover:border-primary"
                    >
                        <h3 className="font-medium text-primary">New Ingredient</h3>
                        <p className="text-sm text-gray-500">Create a product with a new active ingredient</p>
                    </div>
                    <div
                        onClick={handleSelect}
                        className="p-4 border border-primary rounded-lg y cursor-pointer"
                    >
                        <h3 className="font-medium text-primary">Existing Ingredient</h3>
                        <p className="text-sm text-gray-500">Create a product using an existing active ingredient</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
