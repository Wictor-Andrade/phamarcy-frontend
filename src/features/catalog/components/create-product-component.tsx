'use client'
import {MultiStepProvider} from "@/contexts/multi-step-context";
import {MultiStepForm} from "@/components/multi-step-form";
import {StepOne} from "@/features/product/steps/step-one";
import {StepTwo} from "@/features/product/steps/step-two";
import {StepThree} from "@/features/product/steps/step-three";


const stepsData = [
    {
        id: 1,
        title: "Choose the type of registration",
    },
    {
        id: 2,
        title: "Ingredient Details",
    },
    {
        id: 3,
        title: "Other information",
    },
]

export default function CreateProductComponent() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <MultiStepProvider initialSteps={stepsData}>
                <MultiStepForm>
                    <StepOne />
                    <StepTwo />
                    <StepThree />
                </MultiStepForm>
            </MultiStepProvider>
        </div>
    )
}
