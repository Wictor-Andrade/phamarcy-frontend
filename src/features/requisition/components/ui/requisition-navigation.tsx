"use client"

import Navigation, {NavigationItem} from "@/components/navigation"
import { useRequisitionNavigationStore } from "../../store/useRequisitionNavigationStore"
import { RequisitionTabs } from "../../enums/order-management-tabs"

export default function RequisitionNavigation() {
    const activeTab = useRequisitionNavigationStore((s) => s.activeTab)
    const setActiveTab = useRequisitionNavigationStore((s) => s.setActiveTab)

    const navigationItems: NavigationItem[] = [
        { label: RequisitionTabs.CREATE_REQUISITION, active: activeTab === RequisitionTabs.CREATE_REQUISITION, setActive: setActiveTab },
        { label: RequisitionTabs.UNFINISHED, active: activeTab === RequisitionTabs.UNFINISHED, setActive: setActiveTab },
        { label: RequisitionTabs.MY_REQUISITIONS, active: activeTab === RequisitionTabs.MY_REQUISITIONS, setActive: setActiveTab },
        { label: RequisitionTabs.ADMIN, disabled: true, active: activeTab === RequisitionTabs.ADMIN, setActive: setActiveTab },]

    return <Navigation items={navigationItems} />
}
