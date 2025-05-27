"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {useNavigationStore} from "@/features/home/store/useNavigationStore"
import {HomeTabs} from "@/features/home/enums/home-tabs";

export default function HomeNavigation() {
    const activeTab = useNavigationStore((s) => s.activeTab)
    const setActiveTab = useNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: HomeTabs.Overview, active: activeTab === HomeTabs.Overview, setActive: setActiveTab },
        { label: HomeTabs.Tasks, notifications: 7, active: activeTab === HomeTabs.Tasks, setActive: setActiveTab },
        { label: HomeTabs.Reports, active: activeTab === HomeTabs.Reports, setActive: setActiveTab },
        { label: HomeTabs.Admin, disabled: true, active: activeTab === HomeTabs.Admin, setActive: setActiveTab },
    ]

    return <Navigation items={navigationItems} />
}
