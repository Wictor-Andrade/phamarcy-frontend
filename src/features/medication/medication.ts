import {DosageForm, DosageUnit, OriginType} from "@/utils/enums";
import {ActiveIngredient} from "@/features/active-ingredient/active-ingredient";

export type Medication = {
    id: string
    name: string
    ActiveIngredient: ActiveIngredient
    origin: OriginType
    dosageForm: DosageForm
    dosageAmount: number
    dosageUnit: DosageUnit
    imageUrl?: string
    createdAt: string
    updatedAt: string
}

export interface CreateMedicationDto {
    name: string;
    activeIngredientId: string;
    origin: OriginType;
    dosageForm: DosageForm;
    dosageAmount: number;
    dosageUnit: DosageUnit;
    imageUrl?: string;
}

export interface UpdateMedicationDto {
    name?: string;
    activeIngredientId?: string;
    origin?: OriginType;
    dosageForm?: DosageForm;
    dosageAmount?: number;
    dosageUnit?: DosageUnit;
    imageUrl?: string;
}
