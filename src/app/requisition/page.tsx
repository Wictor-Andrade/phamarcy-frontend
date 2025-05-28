'use client'
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";
import RequisitionContents from "@/features/requisition/components/requisition-contents";
import RequisitionNavigation from "@/features/requisition/components/ui/requisition-navigation";
import { useRequisitionNavigationStore } from "@/features/requisition/store/useRequisitionNavigationStore";


export default function Page() {
      const activeTab = useRequisitionNavigationStore((s) => s.activeTab)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.REQUISITON} />
        <div className="flex flex-1 flex-col">
                      <RequisitionNavigation />
                      <RequisitionContents activeTab={activeTab} />
                  </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
