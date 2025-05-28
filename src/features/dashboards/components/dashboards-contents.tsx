"use client";
import {DashboardsTabs} from "@/features/dashboards/enums/dashboards-tabs";
import OverviewComponent from "@/features/dashboards/components/overview-component";
import SalesComponent from "@/features/dashboards/components/sales-component";
import ProductComponent from "@/features/dashboards/components/product-component";

export default function DashboardsContents({ activeTab }: { activeTab: DashboardsTabs }) {
    switch (activeTab) {
        case DashboardsTabs.OVERVIEW:
            return <OverviewComponent />
        case DashboardsTabs.SALES:
            return <SalesComponent />
        case DashboardsTabs.PRODUCT:
            return <ProductComponent />
        default:
            return null
    }
}
