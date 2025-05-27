"use client";
import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SectionsName} from "@/enums/sections-name";
import {useAdminNavigationStore} from "@/features/admin/store/useAdminNavigationStore";
import AdminNavigation from "@/features/admin/components/ui/admin-navigation";
import AdminContents from "@/features/admin/components/admin-contents";


export default function Page() {
    const activeTab = useAdminNavigationStore((s) => s.activeTab)
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
