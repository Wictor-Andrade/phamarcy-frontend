"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import {HomeTabs} from "@/features/home/enums/home-tabs";
import {useAtom} from "jotai";
import {activeHomeTabState} from "@/features/home/state/atom";

export default function HomeNavigation() {
    const [activeTab, setActiveTab] = useAtom(activeHomeTabState)

    const navigationItems: NavigationItem[] = [
        { label: HomeTabs.Overview, active: activeTab === HomeTabs.Overview, setActive: setActiveTab },
        { label: HomeTabs.Tasks, notifications: 7, active: activeTab === HomeTabs.Tasks, setActive: setActiveTab },
        { label: HomeTabs.Reports, active: activeTab === HomeTabs.Reports, setActive: setActiveTab },
        { label: HomeTabs.Admin, disabled: true, active: activeTab === HomeTabs.Admin, setActive: setActiveTab },
    ]

    return <Navigation items={navigationItems} />
}
