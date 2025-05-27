import {create} from "zustand"
import {HomeTabs} from "@/features/home/enums/home-tabs"

interface NavigationStore {
    activeTab: HomeTabs
    setActiveTab: (label: HomeTabs) => void
}

export const useNavigationStore = create<NavigationStore>((set) => ({
    activeTab: HomeTabs.Overview,
    setActiveTab: (label) => set({ activeTab: label }),
}))
