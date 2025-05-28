import {create} from "zustand"
import {DashboardsTabs} from "@/features/dashboards/enums/dashboards-tabs";

interface DashboardsNavigationStore {
    activeTab: DashboardsTabs
    setActiveTab: (label: DashboardsTabs) => void
}

export const useDashboardsNavigationStore = create<DashboardsNavigationStore>((set) => ({
    activeTab: DashboardsTabs.OVERVIEW,
    setActiveTab: (label) => set({ activeTab: label }),
}))
