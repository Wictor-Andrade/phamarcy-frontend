import {create} from "zustand"
import { OrderManagementTabs } from "../enums/order-management-tabs"

interface OrderManagementNavigationStore {
    activeTab: OrderManagementTabs
    setActiveTab: (label: OrderManagementTabs) => void
}

export const useOrderManagementNavigationStore = create<OrderManagementNavigationStore>((set) => ({
    activeTab: OrderManagementTabs.REQUISITIONS,
    setActiveTab: (label) => set({ activeTab: label }),
}))
