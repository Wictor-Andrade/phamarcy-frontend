import {create} from "zustand"
import { RequisitionTabs } from "../enums/order-management-tabs"

interface RequisitionNavigationStore {
    activeTab: RequisitionTabs
    setActiveTab: (label: RequisitionTabs) => void
}

export const useRequisitionNavigationStore = create<RequisitionNavigationStore>((set) => ({
    activeTab: RequisitionTabs.CREATE_REQUISITION,
    setActiveTab: (label) => set({ activeTab: label }),
}))
