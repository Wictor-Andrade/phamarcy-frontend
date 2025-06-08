'use client'
import {AppSidebar} from "@/components/app-sidebar"
import {SiteHeader} from "@/components/site-header"
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";
import CatalogNavigation from "@/features/catalog/components/ui/catalog-navigation";
import CatalogContents from "@/features/catalog/components/catalog-contents";
import {useAtom} from "jotai";
import {activeCatalogTabState} from "@/features/catalog/state/atom";

export default function Page() {
    const [activeTab] = useAtom(activeCatalogTabState)
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
