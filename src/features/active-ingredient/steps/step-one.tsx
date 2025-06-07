'use client'

import {Button} from "@/components/ui/button"
import {FormField} from "@/components/form-field"
import {useMultiStep} from "@/contexts/multi-step-context"
import {toast} from "sonner"

export function StepOne() {
    const {
        nextStep,
        prevStep,
        markStepAsCompleted,
        formData,
        reset
    } = useMultiStep()

    const handleSave = () => {
        console.log("Form data:", formData)
        markStepAsCompleted(1)
        reset()
        toast.success("Active Ingredient added successfully")
    }

    const handleNext = () => {
        markStepAsCompleted(1)
        nextStep()
    }

    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-primary mb-8">Details</h2>

          <div className="space-y-8">
              <FormField
                name="activeIngredientName"
                label="Active Ingredient Name"
                required
                placeholder="Ex: Paracetamol"
              />

              <FormField
                name="origin"
                label="Origin"
                placeholder="Ex: Sintética / Natural / Biotecnológica"
              />

              <FormField
                name="importance"
                label="Importance"
                placeholder="Ex: Antitérmico amplamente utilizado"
              />

              <FormField
                name="contraindication"
                label="Contraindication"
                placeholder="Ex: Hipersensibilidade ao princípio ativo"
              />

              <FormField
                name="description"
                label="Description"
                type="textarea"
                placeholder="Ex: Utilizado para alívio de dores leves a moderadas"
              />
          </div>

          <div className="flex justify-between py-4">
              <Button onClick={prevStep} variant="outline">
                  Previous
              </Button>

              <div className="space-x-2">
                  <Button onClick={handleSave} variant="outline">
                      Save
                  </Button>
                  <Button onClick={handleNext}>
                      Next
                  </Button>
              </div>
          </div>
      </div>
    )
}
