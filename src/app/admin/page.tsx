"use client";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SectionsName} from "@/enums/sections-name";
import AdminNavigation from "@/features/admin/components/ui/admin-navigation";
import AdminContents from "@/features/admin/components/admin-contents";
import {activeAdminTabState} from "@/features/admin/state/atoms";
import {useAtom} from "jotai";


export default function Page() {
    const [activeTab] = useAtom(activeAdminTabState)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.ADMIN} />
          <div className="flex flex-1 flex-col">
              <AdminNavigation />
              <AdminContents activeTab={activeTab} />
          </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
