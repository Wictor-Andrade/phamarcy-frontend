'use client'
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";
import OrderManagemantContents from "@/features/order-management/components/order-management-contents";
import OrderManagementNavigation from "@/features/order-management/components/ui/order-management-navigation";
import {useAtom} from "jotai";
import {activeOrderManagementTabState} from "@/features/order-management/state/atom";

export default function Page() {
    const [activeTab] = useAtom(activeOrderManagementTabState)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.ORDER_MANAGEMENT} />
        <div className="flex flex-1 flex-col">
                      <OrderManagementNavigation />
                      <OrderManagemantContents activeTab={activeTab} />
                  </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
