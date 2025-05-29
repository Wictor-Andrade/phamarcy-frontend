'use client'
import {MultiStepProvider} from "@/contexts/multi-step-context";
import {MultiStepForm} from "@/components/multi-step-form";
import {StepOne} from "@/features/active-ingredient/steps/step-one";
import {StepTwo} from "@/features/active-ingredient/steps/step-two";


const stepsData = [
    {
        id: 1,
        title: "Ingredient Details",
    },
    {
        id: 2,
        title: "Other information",
    },
]

export default function CreateIngredientComponent() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <MultiStepProvider initialSteps={stepsData}>
                <MultiStepForm>
                    <StepOne />
                    <StepTwo />
                </MultiStepForm>
            </MultiStepProvider>
        </div>
    )
}
