import {CatalogTabs} from '@/features/catalog/enums/catalog-tabs'
import {atom} from "jotai";

export const activeCatalogTabState = atom(CatalogTabs.CATALOG)

export const activeIngredientDialogIsOpen = atom(false)