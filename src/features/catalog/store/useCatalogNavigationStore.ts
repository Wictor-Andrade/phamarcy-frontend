import {create} from "zustand"
import {CatalogTabs} from "@/features/catalog/enums/catalog-tabs";

interface CatalogNavigationStore {
    activeTab: CatalogTabs
    setActiveTab: (label: CatalogTabs) => void
}

export const useCatalogNavigationStore = create<CatalogNavigationStore>((set) => ({
    activeTab: CatalogTabs.CATALOG,
    setActiveTab: (label) => set({ activeTab: label }),
}))
