'use client'
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";
import DashboardsNavigation from "@/features/dashboards/components/ui/dashboards-navigation";
import DashboardsContents from "@/features/dashboards/components/dashboards-contents";
import {useAtom} from "jotai";
import {activeDashboardsTabState} from "@/features/dashboards/state/atom";

export default function Page() {
    const [activeTab] = useAtom(activeDashboardsTabState)

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.DASHBOARDS} />
          <div className="flex flex-1 flex-col">
              <DashboardsNavigation />
              <DashboardsContents activeTab={activeTab} />
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
