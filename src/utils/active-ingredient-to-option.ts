import {ActiveIngredient} from "@/features/active-ingredient/active-ingredient";
import {SelectOption} from "@/components/filter-bar/filter-select";

export function activeIngredientToOption(
    ingredients: ActiveIngredient[] = []
): SelectOption[] {
    return ingredients.map(ingredient => ({
        label: ingredient.name,
        value: ingredient.id,
    }))
}
