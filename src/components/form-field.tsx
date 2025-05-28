"use client"

import type React from "react"

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {useMultiStep} from "@/contexts/multi-step-context"

interface FormFieldProps {
    name: string
    label: string
    placeholder?: string
    type?: "input" | "textarea"
    required?: boolean
}

export function FormField({
                              name,
                              label,
                              placeholder = "Placeholder",
                              type = "input",
                              required = false,
                          }: FormFieldProps) {
    const { formData, updateFormData } = useMultiStep()

    const handleChange = (value: string) => {
        updateFormData(name, value)
    }

    const commonProps = {
        id: name,
        placeholder,
        value: formData[name] || "",
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e.target.value),
        className:
            type === "input"
                ? "border-0 border-b-2 border-blue-300 rounded-none px-0 py-2 focus:border-blue-500 focus:ring-0 placeholder:text-blue-400"
                : "min-h-[120px] border-2 border-blue-200 rounded-md p-4 focus:border-blue-500 focus:ring-0 placeholder:text-blue-400 resize-none",
    }

    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="text-blue-600 font-medium">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {type === "input" ? <Input {...commonProps} /> : <Textarea {...commonProps} />}
        </div>
    )
}
