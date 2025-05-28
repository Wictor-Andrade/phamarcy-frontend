"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {SalesTabs} from "@/features/sales/enums/sales-tabs";
import {useSalesNavigationStore} from "@/features/sales/store/useSalesNavigationStore";

export default function SalesNavigation() {
    const activeTab = useSalesNavigationStore((s) => s.activeTab)
    const setActiveTab = useSalesNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: SalesTabs.SALES_POINT, active: activeTab === SalesTabs.SALES_POINT, setActive: setActiveTab },
        { label: SalesTabs.MY_SALES, active: activeTab === SalesTabs.MY_SALES, setActive: setActiveTab },
        { label: SalesTabs.ADMIN, disabled: true, active: activeTab === SalesTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
