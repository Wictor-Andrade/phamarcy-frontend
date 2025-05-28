import {create} from "zustand"
import {SalesTabs} from "@/features/sales/enums/sales-tabs";

interface SalesNavigationStore {
    activeTab: SalesTabs
    setActiveTab: (label: SalesTabs) => void
}

export const useSalesNavigationStore = create<SalesNavigationStore>((set) => ({
    activeTab: SalesTabs.SALES_POINT,
    setActiveTab: (label) => set({ activeTab: label }),
}))
