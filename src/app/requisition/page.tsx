'use client'
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";
import RequisitionContents from "@/features/requisition/components/requisition-contents";
import RequisitionNavigation from "@/features/requisition/components/ui/requisition-navigation";
import {useAtom} from "jotai";
import {activeRequisitionTabState} from "@/features/requisition/state/atom";


export default function Page() {
    const [activeTab] = useAtom(activeRequisitionTabState)
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
