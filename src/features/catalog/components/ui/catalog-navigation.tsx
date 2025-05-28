"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {AdminTabs} from "@/features/admin/enums/admin-tabs";
import {useAdminNavigationStore} from "@/features/admin/store/useAdminNavigationStore";
import {HomeTabs} from "@/features/home/enums/home-tabs";

export default function CatalogNavigation() {
    const activeTab = useAdminNavigationStore((s) => s.activeTab)
    const setActiveTab = useAdminNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: AdminTabs.COLLABORATORS, notifications: 2, active: activeTab === AdminTabs.COLLABORATORS, setActive: setActiveTab },
        { label: AdminTabs.NEW_COLLABORATORS, notifications: 99, active: activeTab === AdminTabs.NEW_COLLABORATORS, setActive: setActiveTab },
        { label: HomeTabs.Admin, disabled: true, active: activeTab === AdminTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
