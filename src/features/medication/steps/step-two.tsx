"use client"

import type React from "react"
import {useState} from "react"
import Image from "next/image"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Upload} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {toast} from "sonner";
import {useMultiStep} from "@/contexts/multi-step-context";
import {SelectOption} from "@/components/select-option";
import {useMedicationFilter} from "@/features/medication/hooks/useMedicationFilter";


const formSchema = z.object({
    productName: z.string().min(2, {
        message: "Product name must be at least 2 characters.",
    }),
    activeIngredient: z.string().min(1, {
        message: "Please select an active ingredient.",
    }),
    supplier: z.string().min(2, {
        message: "Supplier name must be at least 2 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    price: z.string().min(1, {
        message: "Price is required.",
    }),
})

export default function StepTwo() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const { prevStep, markStepAsCompleted } = useMultiStep()

    const {
        filter
    } = useMedicationFilter()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: "",
            activeIngredient: "",
            supplier: "",
            description: "",
            price: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        toast.success('Saved with Success');
        markStepAsCompleted(2);
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setSelectedImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const removeImage = () => {
        setSelectedImage(null)
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Product Photo Section */}
            <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Product Photo</h2>
                <div className="flex items-start gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 rounded-full border-2 border-muted overflow-hidden bg-muted flex items-center justify-center">
                            {selectedImage ? (
                                <Image
                                    src={selectedImage || "/placeholder.svg"}
                                    alt="Product"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src="/placeholder.svg"
                                    alt="Placeholder"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover opacity-50"
                                />
                            )}
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <label htmlFor="photo-upload">
                                <Button variant="outline" className="cursor-pointer" asChild>
                  <span>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </span>
                                </Button>
                            </label>
                            <input id="photo-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                            {selectedImage && (
                                <button onClick={removeImage} className="text-sm text-muted-foreground hover:text-foreground">
                                    remove
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-primary mb-3">Image requirements:</h3>
                        <ol className="text-primary space-y-1">
                            <li>1. Min. 400 x 400px</li>
                            <li>2. Max. 2MB</li>
                            <li>3. Your product or company logo</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Product Details Section */}
            <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Product Details</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="productName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-primary">Product Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Placeholder" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="activeIngredient"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <SelectOption
                                            options={filter.ingredientsOptions}
                                            value={field.value}
                                            onChange={field.onChange}
                                            placeholder="Select active ingredient..."
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="supplier"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary">Supplier</FormLabel>
                                    <FormControl>
                                        <Input placeholder="supplier" {...field} />
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
                                    <FormLabel className="text-primary">Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Placeholder" className="min-h-[100px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary">Price</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Placeholder" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between mt-4">
                            <Button
                                onClick={prevStep}
                                variant="outline"
                            >
                                Previous
                            </Button>

                            <Button
                                type='submit'
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
