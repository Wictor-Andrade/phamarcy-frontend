"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {CatalogTabs} from "@/features/catalog/enums/catalog-tabs";
import {activeCatalogTabState} from "@/features/catalog/state/atom";
import {useAtom} from "jotai";

export default function CatalogNavigation() {
    const [activeTab, setActiveTab] = useAtom(activeCatalogTabState)

    const navigationItems: NavigationItem[] = [
        { label: CatalogTabs.CATALOG, active: activeTab === CatalogTabs.CATALOG, setActive: setActiveTab },
        { label: CatalogTabs.CREATE_INGREDIENT, notifications: 2, active: activeTab === CatalogTabs.CREATE_INGREDIENT, setActive: setActiveTab },
        { label: CatalogTabs.CREATE_PRODUCT, active: activeTab === CatalogTabs.CREATE_PRODUCT, setActive: setActiveTab },
        { label: CatalogTabs.ADMIN, disabled: true, active: activeTab === CatalogTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
