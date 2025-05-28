import {create} from "zustand"
import {AdminTabs} from "@/features/admin/enums/admin-tabs";

interface AdminNavigationStore {
    activeTab: AdminTabs
    setActiveTab: (label: AdminTabs) => void
}

export const useAdminNavigationStore = create<AdminNavigationStore>((set) => ({
    activeTab: AdminTabs.COLLABORATORS,
    setActiveTab: (label) => set({ activeTab: label }),
}))
