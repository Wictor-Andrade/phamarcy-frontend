'use client'

import {FilterBar, FilterInput, FilterSelect} from '@/components/filter-bar'
import {useMedicationFilter} from "@/features/medication/hooks/useMedicationFilter";

export default function CatalogFilter() {
    const {
        filter,
        setSearch,
        setIngredient,
    } = useMedicationFilter()

    return (
        <div>
            <FilterBar>
                <FilterInput
                    value={filter.search}
                    onChange={setSearch}
                />
                <FilterSelect
                    value={filter.ingredient}
                    onChange={setIngredient}
                    placeholder="Active Ingredient..."
                    options={filter.ingredientsOptions}
                    maxVisibleOptions={4}
                />
            </FilterBar>
        </div>
    )
}
