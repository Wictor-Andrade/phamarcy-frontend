import {useEffect} from 'react'
import {useAtom} from 'jotai'
import {medicamentoFilterAtom} from '@/features/medication/state/atom'
import activeIngredientApi from '@/features/active-ingredient/service/active-ingredient-api'
import {SelectOption} from '@/components/filter-bar/filter-select'
import {activeIngredientToOption} from '@/utils/active-ingredient-to-option'

export function useMedicationFilter() {
    const [filter, setFilter] = useAtom(medicamentoFilterAtom)

    const setSearch = (value: string) => {
        setFilter(prev => ({ ...prev, search: value }))
    }

    const setIngredient = (value: string) => {
        setFilter(prev => ({ ...prev, ingredient: value }))
    }

    const setIngredientsOptions = (options: SelectOption[]) => {
        setFilter(prev => ({ ...prev, ingredientsOptions: options }))
    }

    const resetFilter = () => {
        setFilter({ search: '', ingredient: '', ingredientsOptions: [] })
    }

    useEffect(() => {
        async function loadOptions() {
            try {
                const options = await activeIngredientApi.getAllActiveIngredients()
                setIngredientsOptions(activeIngredientToOption(options))
            } catch {
                setIngredientsOptions([])
            }
        }
        loadOptions()
    }, [])

    return {
        filter,
        setSearch,
        setIngredient,
        setIngredientsOptions,
        resetFilter,
    }
}
