"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import { useOrderManagementNavigationStore } from "../../store/useOrderManagementNavigationStore"
import { OrderManagementTabs } from "../../enums/order-management-tabs"

export default function OrderManagementNavigation() {
    const activeTab = useOrderManagementNavigationStore((s) => s.activeTab)
    const setActiveTab = useOrderManagementNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: OrderManagementTabs.REQUISITIONS, active: activeTab === OrderManagementTabs.REQUISITIONS, setActive: setActiveTab },
        { label: OrderManagementTabs.ORDERS, active: activeTab === OrderManagementTabs.ORDERS, setActive: setActiveTab },
        { label: OrderManagementTabs.ADMIN, disabled: true, active: activeTab === OrderManagementTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
