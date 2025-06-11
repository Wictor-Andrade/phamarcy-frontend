'use client'
import {MultiStepProvider} from "@/contexts/multi-step-context";
import {MultiStepForm} from "@/components/multi-step-form";
import {StepOne} from "@/features/medication/steps/step-one";
import StepTwo from "@/features/medication/steps/step-two";
import {StepThree} from "@/features/medication/steps/step-three";

const stepsData = [
    {
        id: 1,
        title: "Choose the type of registration",
    },
    {
        id: 2,
        title: "Product Details",
    },
    {
        id: 3,
        title: "Other information",
    },
]

export default function CreateProductComponent() {
    return (
        <div className="flex flex-1 flex-col gap-2">
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
