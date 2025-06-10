import {useEffect, useState} from 'react'
import {Medication} from "@/features/medication/medication";
import medicationApi from "@/features/medication/service/api-medication";

export function useGetMedication() {
    const [data, setData] = useState<Medication[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const handler = setTimeout(() => {
            setLoading(true)
            setError(null)

            medicationApi
                .getAllMedications()
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
    },[])

    return { data, loading, error }
}
