"use client";
import SalesPointComponent from "@/features/sales/components/sales-point-component";
import MySalesComponent from "@/features/sales/components/my-sales-component";
import {SalesTabs} from "@/features/sales/enums/sales-tabs";

export default function SalesContents({ activeTab }: { activeTab: SalesTabs }) {
    switch (activeTab) {
        case SalesTabs.SALES_POINT:
            return <SalesPointComponent />
        case SalesTabs.MY_SALES:
            return <MySalesComponent />
        default:
            return null
    }
}
