"use client"

import {useState} from "react"
import {FilterAction, FilterBar, FilterDate, FilterSelect} from "@/components/filter-bar"

const departmentOptions = [
    { value: "administrativo", label: "Administrativo" },
    { value: "financeiro", label: "Financeiro" },
    { value: "comercial", label: "Comercial" },
]

const cargoOptions = [
    { value: "gerente", label: "Gerente" },
    { value: "analista", label: "Analista" },
    { value: "assistente", label: "Assistente" },
]

export default function CollaboratorsFilter() {
    const [departamento, setDepartamento] = useState<string>("")
    const [cargo, setCargo] = useState<string>("")
    const [dataInicio, setDataInicio] = useState<Date>()
    const [dataFim, setDataFim] = useState<Date>()

    const handleSearch = () => {
        console.log("Buscando com filtros:", {
            departamento,
            cargo,
            dataInicio,
            dataFim,
        })
    }

    return (
        <FilterBar>
            <FilterSelect
                placeholder="Departamento"
                options={departmentOptions}
                value={departamento}
                onValueChange={setDepartamento}
            />
            <FilterSelect
                placeholder="Cargo"
                options={cargoOptions}
                value={cargo}
                onValueChange={setCargo}
            />
            <FilterDate
                placeholder="Data de Início"
                value={dataInicio}
                onValueChange={setDataInicio}
            />
            <FilterDate
                placeholder="Data de Fim"
                value={dataFim}
                onValueChange={setDataFim}
            />
            <FilterAction onClick={handleSearch} />
        </FilterBar>
    )
}
