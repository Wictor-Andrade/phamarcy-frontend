"use client";

import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import HomeNavigation from "@/features/home/components/ui/home-navigation";
import {SectionsName} from "@/enums/sections-name";
import HomeContent from "@/features/home/components/home-content";
import {useAtom} from "jotai";
import {activeHomeTabState} from "@/features/home/state/atom";

export default function Page() {
    const [activeTab] = useAtom(activeHomeTabState)
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
