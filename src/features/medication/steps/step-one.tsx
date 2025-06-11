"use client"

import {useMultiStep} from "@/contexts/multi-step-context"
import {activeCatalogTabState} from "@/features/catalog/state/atom";
import {useSetAtom} from "jotai";
import {CatalogTabs} from "@/features/catalog/enums/catalog-tabs";

export function StepOne() {
    const { nextStep, markStepAsCompleted, reset } = useMultiStep()
    const setCatalogTab = useSetAtom(activeCatalogTabState)

    const handleSelect = () => {
        markStepAsCompleted(1)
        nextStep()
    }

    const handleNewIngredient = () => {
        setCatalogTab(CatalogTabs.CREATE_INGREDIENT)
        reset()
    }

    return (
        <div className="rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-primary mb-8">Choose the type of registration</h2>

            <div className="space-y-4">
                <p>Select the type of registration you want to proceed with.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                        onClick={handleNewIngredient}
                        className="text-primary hover:text-foreground-secondary p-4 border border-secondary rounded-lg hover:bg-primary cursor-pointer transition-colors duration-200"
                    >
                        <h3 className="font-medium">New Ingredient</h3>
                        <p className="text-sm">Create a product with a new active ingredient</p>
                    </div>
                    <div
                        onClick={handleSelect}
                        className="text-primary hover:text-foreground-secondary p-4 border border-secondary rounded-lg hover:bg-primary cursor-pointer transition-colors duration-200"
                    >
                        <h3 className="font-medium">Existing Ingredient</h3>
                        <p className="text-sm">Create a product using an existing active ingredient</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
