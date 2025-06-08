"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {OrderManagementTabs} from "../../enums/order-management-tabs"
import {useAtom} from "jotai";
import {activeOrderManagementTabState} from "@/features/order-management/state/atom";

export default function OrderManagementNavigation() {
    const [activeTab, setActiveTab] = useAtom(activeOrderManagementTabState)

    const navigationItems: NavigationItem[] = [
        { label: OrderManagementTabs.REQUISITIONS, active: activeTab === OrderManagementTabs.REQUISITIONS, setActive: setActiveTab },
        { label: OrderManagementTabs.ORDERS, active: activeTab === OrderManagementTabs.ORDERS, setActive: setActiveTab },
        { label: OrderManagementTabs.ADMIN, disabled: true, active: activeTab === OrderManagementTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
