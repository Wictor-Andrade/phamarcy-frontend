"use client"

import {useState} from "react"
import {FilterAction, FilterBar, FilterDate, FilterSelect} from "@/components/filter-bar"

const productOptions = [
    { value: "product1", label: "Product A" },
    { value: "product2", label: "Product B" },
    { value: "product3", label: "Product C" },
]

const ingredientOptions = [
    { value: "ingredient1", label: "Vitamin C" },
    { value: "ingredient2", label: "Vitamin D" },
    { value: "ingredient3", label: "Calcium" },
]

export default function CatalogFilter() {
    const [product, setProduct] = useState<string>("")
    const [ingredient, setIngredient] = useState<string>("")
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()

    const handleSearch = () => {
        console.log("Searching with filters:", {
            product,
            ingredient,
            startDate,
            endDate,
        })
    }

    return (
        <div>
                <FilterBar>
                    <FilterSelect placeholder="Product" options={productOptions} value={product} onValueChange={setProduct} />
                    <FilterSelect
                        placeholder="Active Ingredient"
                        options={ingredientOptions}
                        value={ingredient}
                        onValueChange={setIngredient}
                    />
                    <FilterDate
                        placeholder="Start date"
                        value={startDate}
                        onValueChange={setStartDate}
                    />
                    <FilterDate placeholder="End date" value={endDate} onValueChange={setEndDate} />
                    <FilterAction onClick={handleSearch} />
                </FilterBar>
        </div>
    )
}
