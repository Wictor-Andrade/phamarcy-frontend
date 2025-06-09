"use client"

import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {toast} from "sonner"
import {useMultiStep} from "@/contexts/multi-step-context"
import activeIngredientApi from "@/features/active-ingredient/service/active-ingredient-api"
import axiosErrorToString from "@/utils/services/axios-error-to-string"
import {OriginType} from "@/utils/enums"

const formSchema = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    description: z.string().min(1, "Descrição obrigatória"),
    contraindication: z.string().min(1, "Contraindicação obrigatória"),
    origin: z.nativeEnum(OriginType, { errorMap: () => ({ message: "Origem obrigatória" }) }),
})

type FormValues = z.infer<typeof formSchema>

export function StepOne() {
    const { markStepAsCompleted } = useMultiStep()

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            contraindication: "",
            origin: OriginType.SINTETICA,
        },
    })

    async function onSubmit(data: FormValues) {
        try {
            await activeIngredientApi.createActiveIngredient(data)
            toast.success("Active Ingredient Saved!")
            markStepAsCompleted(1)
        } catch (e) {
            toast.error(axiosErrorToString(e))
        }
    }

    return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              <h2 className="text-2xl font-semibold text-primary mb-8">Details</h2>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>Active Ingredient Name</FormLabel>
                      <FormControl>
                          <Input placeholder="Ex: Paracetamol" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="origin"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>Origin</FormLabel>
                      <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger>
                                  <SelectValue placeholder="Selecione a origem" />
                              </SelectTrigger>
                              <SelectContent>
                                  {Object.values(OriginType).map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                          </Select>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contraindication"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>Contraindication</FormLabel>
                      <FormControl>
                          <Input placeholder="Ex: Hipersensibilidade ao princípio ativo" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                          <Textarea placeholder="Ex: Utilizado para alívio de dores leves a moderadas" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-2 pt-4">
                  <Button type="submit">Save</Button>
              </div>
          </form>
      </Form>
    )
}
