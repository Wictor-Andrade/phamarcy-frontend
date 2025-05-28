"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {useCatalogNavigationStore} from "@/features/catalog/store/useCatalogNavigationStore";
import {CatalogTabs} from "@/features/catalog/enums/catalog-tabs";

export default function CatalogNavigation() {
    const activeTab = useCatalogNavigationStore((s) => s.activeTab)
    const setActiveTab = useCatalogNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: CatalogTabs.CATALOG, active: activeTab === CatalogTabs.CATALOG, setActive: setActiveTab },
        { label: CatalogTabs.CREATE_INGREDIENT, notifications: 2, active: activeTab === CatalogTabs.CREATE_INGREDIENT, setActive: setActiveTab },
        { label: CatalogTabs.CREATE_PRODUCT, active: activeTab === CatalogTabs.CREATE_PRODUCT, setActive: setActiveTab },
        { label: CatalogTabs.ADMIN, disabled: true, active: activeTab === CatalogTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
