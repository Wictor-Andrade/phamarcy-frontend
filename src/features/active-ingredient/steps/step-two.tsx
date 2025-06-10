"use client"

import {useState} from "react"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Button} from "@/components/ui/button"
import {FormField} from "@/components/form-field"
import {useMultiStep} from "@/contexts/multi-step-context"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import {useGetMedication} from "@/features/medication/hooks/useGetMedication"
import {Medication} from "@/features/medication/medication"

const schema = z.object({
    estoqueMin: z.coerce.number().optional(),
    estoqueIdeal: z.coerce.number().optional(),
    estoqueMax: z.coerce.number().optional(),
    idMedicamentoGenerico: z.string().uuid().optional(),
})

export function StepTwo() {
    const { prevStep, markStepAsCompleted, reset } = useMultiStep()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null)

    const { data } = useGetMedication()

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            estoqueMin: undefined,
            estoqueIdeal: undefined,
            estoqueMax: undefined,
            idMedicamentoGenerico: undefined,
        },
    })

    const { register, handleSubmit, setValue } = form

    const onSubmit = (values: z.infer<typeof schema>) => {
        const data = {
            ...values,
            idMedicamentoGenerico: selectedMedication?.id || null,
        }

        console.log(data)

        markStepAsCompleted(2)
        reset()
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-primary mb-8">Other Information</h2>

              <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField type="number" label="Estoque Mínimo" {...register("estoqueMin")} />
                      <FormField type="number" label="Estoque Ideal" {...register("estoqueIdeal")} />
                      <FormField type="number" label="Estoque Máximo" {...register("estoqueMax")} />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Medicamento Genérico</label>

                      <div className="flex items-center gap-4">
                          <Button type="button" variant="outline" onClick={() => setIsDialogOpen(true)}>
                              Selecionar Medicamento
                          </Button>

                          {selectedMedication && (
                            <span className="text-sm text-gray-800">{selectedMedication.name}</span>
                          )}
                      </div>

                      {selectedMedication && (
                        <input
                          type="hidden"
                          value={selectedMedication.id}
                          {...register("idMedicamentoGenerico")}
                        />
                      )}
                  </div>
              </div>

              <div className="flex justify-between mt-8">
                  <Button type="button" onClick={prevStep} variant="outline">
                      Previous
                  </Button>

                  <Button type="submit">Save</Button>
              </div>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                      <DialogTitle>Selecione um Medicamento</DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-1 gap-2">
                      {data.map((med: Medication) => (
                        <button
                          key={med.id}
                          type="button"
                          onClick={() => {
                              setSelectedMedication(med)
                              setValue("idMedicamentoGenerico", med.id)
                              setIsDialogOpen(false)
                          }}
                          className="text-left border p-4 rounded hover:bg-accent"
                        >
                            <div className="font-medium">{med.name}</div>
                            {med.dosageForm && (
                              <div className="text-sm text-muted-foreground">{med.dosageForm}</div>
                            )}
                            {med.dosageUnit && (
                              <div className="text-sm text-muted-foreground">{med.dosageUnit}</div>
                            )}
                        </button>
                      ))}
                  </div>
              </DialogContent>
          </Dialog>
      </form>
    )
}
