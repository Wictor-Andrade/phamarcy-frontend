"use client";

import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import HomeNavigation from "@/features/home/components/ui/home-navigation";
import {SectionsName} from "@/enums/sections-name";
import {useNavigationStore} from "@/features/home/store/useNavigationStore";
import HomeContent from "@/features/home/components/home-content";

export default function Page() {
    const activeTab = useNavigationStore((s) => s.activeTab)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
          <SiteHeader sectionsName={SectionsName.HOME} />
          <div className="flex flex-1 flex-col">
              <HomeNavigation />
              <HomeContent activeTab={activeTab} />
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
