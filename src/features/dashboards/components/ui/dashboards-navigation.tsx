"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {DashboardsTabs} from "@/features/dashboards/enums/dashboards-tabs";
import {useAtom} from "jotai";
import {activeDashboardsTabState} from "@/features/dashboards/state/atom";

export default function DashboardsNavigation() {
    const [activeTab, setActiveTab] = useAtom(activeDashboardsTabState)

    const navigationItems: NavigationItem[] = [
        { label: DashboardsTabs.OVERVIEW, active: activeTab === DashboardsTabs.OVERVIEW, setActive: setActiveTab },
        { label: DashboardsTabs.SALES, active: activeTab === DashboardsTabs.SALES, setActive: setActiveTab },
        { label: DashboardsTabs.PRODUCT, active: activeTab === DashboardsTabs.PRODUCT, setActive: setActiveTab },
        { label: DashboardsTabs.ADMIN, disabled: true, active: activeTab === DashboardsTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
