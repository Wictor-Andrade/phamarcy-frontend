"use client";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SectionsName} from "@/enums/sections-name";
import SalesContents from "@/features/sales/components/sales-contents";
import SalesNavigation from "@/features/sales/components/ui/sales-navigation";
import {useAtom} from "jotai";
import {activeSalesTabState} from "@/features/sales/state/atom";


export default function Page() {
  const [activeTab] = useAtom(activeSalesTabState)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.SALES} />
          <div className="flex flex-1 flex-col">
              <SalesNavigation />
              <SalesContents activeTab={activeTab} />
          </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
