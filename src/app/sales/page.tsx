"use client";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SectionsName} from "@/enums/sections-name";
import SalesContents from "@/features/sales/components/sales-contents";
import SalesNavigation from "@/features/sales/components/ui/sales-navigation";
import {useSalesNavigationStore} from "@/features/sales/store/useSalesNavigationStore";


export default function Page() {
    const activeTab = useSalesNavigationStore((s) => s.activeTab)
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
