import {useEffect, useState} from 'react'
import {useMedicationFilter} from './useMedicationFilter'
import {Medication} from "@/features/medication/medication";
import medicationApi from "@/features/medication/service/api-medication";

export function useGetMedicationWithFilter() {
    const { filter } = useMedicationFilter()
    const [data, setData] = useState<Medication[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const handler = setTimeout(() => {
            setLoading(true)
            setError(null)

            medicationApi
                .getMedicationsWithFilter({
                    search: filter.search || undefined,
                    idActiveIngredient: filter.ingredient || undefined,
                })
                .then(res => {
                    setData(res)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }, 500)

        return () => clearTimeout(handler)
    }, [filter.search, filter.ingredient])

    return { data, loading, error }
}
