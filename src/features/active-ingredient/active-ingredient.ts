import {OriginType} from "@/utils/enums";

export type ActiveIngredient = {
    id: string
    name: string
    description: string
    contraindication: string
    origin: OriginType,
    estoqueMin?: number
    estoqueIdeal?: number
    estoqueMax?: number
    idMedicamentoGenerico?: string
    createdAt: string
    updatedAt: string
}

export interface CreateActiveIngredientStepOneDto {
    name: string;
    description: string;
    contraindication: string;
    origin: OriginType;
}

export interface UpdateActiveIngredientStepTwoDto {
    idMedicamentoGenerico?: string
    estoqueMin?: number
    estoqueIdeal?: number
    estoqueMax?: number
}


export interface UpdateActiveIngredientDto {
    name?: string
    description?: string
    contraindication?: string
    origin?: OriginType
    estoqueMin?: number
    estoqueIdeal?: number
    estoqueMax?: number
    idMedicamentoGenerico?: string
}
