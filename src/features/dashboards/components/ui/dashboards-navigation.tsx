"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {useDashboardsNavigationStore} from "@/features/dashboards/store/useDashboardsNavigationStore";
import {DashboardsTabs} from "@/features/dashboards/enums/dashboards-tabs";

export default function DashboardsNavigation() {
    const activeTab = useDashboardsNavigationStore((s) => s.activeTab)
    const setActiveTab = useDashboardsNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: DashboardsTabs.OVERVIEW, active: activeTab === DashboardsTabs.OVERVIEW, setActive: setActiveTab },
        { label: DashboardsTabs.SALES, active: activeTab === DashboardsTabs.SALES, setActive: setActiveTab },
        { label: DashboardsTabs.PRODUCT, active: activeTab === DashboardsTabs.PRODUCT, setActive: setActiveTab },
        { label: DashboardsTabs.ADMIN, disabled: true, active: activeTab === DashboardsTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
