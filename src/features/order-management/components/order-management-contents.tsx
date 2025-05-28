"use client";

import { OrderManagementTabs } from "../enums/order-management-tabs";
import OrdersComponent from "./orders-component";
import RequisitionsComponent from "./requisitions-component";

export default function OrderManagemantContents({ activeTab }: { activeTab: OrderManagementTabs }) {
    switch (activeTab) {
        case OrderManagementTabs.REQUISITIONS:
            return <RequisitionsComponent />
        case OrderManagementTabs.ORDERS:
            return <OrdersComponent />
        default:
            return null
    }
}


