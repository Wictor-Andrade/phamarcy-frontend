import {ActiveIngredient} from '@/features/active-ingredient/active-ingredient'
import {atom} from 'jotai'

export const currentActiveIngredient = atom<ActiveIngredient | undefined>(undefined)