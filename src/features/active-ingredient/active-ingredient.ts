export type ActiveIngredient = {
    id: string
    name: string
    description: string
    contraindication: string
    origin: 'SINTETICA' | 'NATURAL'
    estoqueMin?: number
    estoqueIdeal?: number
    estoqueMax?: number
    idMedicamentoGenerico?: string
    createdAt: string
    updatedAt: string
}