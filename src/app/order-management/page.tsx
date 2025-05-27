'use client'
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import {SectionsName} from "@/enums/sections-name";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader sectionsName={SectionsName.ORDER_MANAGEMENT} />
      </SidebarInset>
    </SidebarProvider>
  )
}
