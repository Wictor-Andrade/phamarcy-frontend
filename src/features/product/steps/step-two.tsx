"use client"

import {Button} from "@/components/ui/button"
import {FormField} from "@/components/form-field"
import {useMultiStep} from "@/contexts/multi-step-context"
import {toast} from "react-toastify";

export function StepTwo() {
    const { nextStep, prevStep, markStepAsCompleted, formData, reset } = useMultiStep()

    const handleSave = () => {
        console.log("Form data:", formData)
        markStepAsCompleted(2)
        reset()
        toast.success('product add with success')
    }

    const handleNext = () => {
        markStepAsCompleted(2)
        nextStep()
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-8">Details</h2>

            <div className="space-y-8">
                <FormField name="activeIngredientName" label="Active Ingredient Name" required />

                <FormField name="origin" label="Origin" />

                <FormField name="importance" label="Importance" />

                <FormField name="contraindication" label="Contraindication" />

                <FormField name="description" label="Description" type="textarea" />
            </div>

            <div className="flex justify-between py-4">
                <Button
                    onClick={prevStep}
                    variant="outline"
                >
                    Previous
                </Button>

                <div className="space-x-2">
                    <Button
                        onClick={handleSave}
                        variant="outline"
                    >
                        Save
                    </Button>
                    <Button
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
