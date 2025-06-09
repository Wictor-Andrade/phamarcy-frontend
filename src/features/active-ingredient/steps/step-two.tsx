"use client"

import {Button} from "@/components/ui/button"
import {FormField} from "@/components/form-field"
import {useMultiStep} from "@/contexts/multi-step-context"

export function StepTwo() {
    const { prevStep, markStepAsCompleted, formData, reset } = useMultiStep()

    const handleSubmit = () => {
        markStepAsCompleted(2)
        alert("Form submitted successfully!")
        reset()
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-primary mb-8">Other Information</h2>

            <div className="space-y-8">
                <FormField name="additionalNotes" label="Additional Notes" type="textarea" />

                <FormField name="category" label="Category" />

                <FormField name="manufacturer" label="Manufacturer" />

                <FormField name="expirationDate" label="Expiration Date" />
            </div>

            <div className="flex justify-between mt-4">
                <Button
                    onClick={prevStep}
                    variant="outline"
                >
                    Previous
                </Button>

                <Button
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}
