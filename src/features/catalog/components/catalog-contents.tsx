"use client";

import {CatalogTabs} from "@/features/catalog/enums/catalog-tabs";
import CatalogComponent from "@/features/catalog/components/catalog-component";
import CreateProductComponent from "@/features/catalog/components/create-product-component";
import CreateIngredientComponent from "@/features/catalog/components/create-ingredient-component";

export default function CatalogContents({ activeTab }: { activeTab: CatalogTabs }) {
    switch (activeTab) {
        case CatalogTabs.CATALOG:
            return <CatalogComponent />
        case CatalogTabs.CREATE_PRODUCT:
            return <CreateProductComponent />
        case CatalogTabs.CREATE_INGREDIENT:
            return <CreateIngredientComponent />
        default:
            return null
    }
}
