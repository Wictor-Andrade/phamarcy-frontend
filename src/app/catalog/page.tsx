'use client'
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";
import {useCatalogNavigationStore} from "@/features/catalog/store/useCatalogNavigationStore";
import CatalogNavigation from "@/features/catalog/components/ui/catalog-navigation";
import CatalogContents from "@/features/catalog/components/catalog-contents";

export default function Page() {
    const activeTab = useCatalogNavigationStore((s) => s.activeTab)
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.CATALOG} />
          <div className="flex flex-1 flex-col">
              <CatalogNavigation />
              <CatalogContents activeTab={activeTab} />
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
