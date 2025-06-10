import {atom} from 'jotai'
import {SelectOption} from "@/components/filter-bar/filter-select";

export const medicamentoFilterAtom = atom({
    search: '',
    ingredient: '',
    ingredientsOptions: [] as SelectOption[],
})