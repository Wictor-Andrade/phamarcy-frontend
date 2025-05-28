"use client";

import { RequisitionTabs } from "../enums/order-management-tabs";
import CreateRequisitionComponent from "./create-requisition-component";
import MyRequisitionComponent from "./my-requisitions-component";
import UnfinishedComponent from "./unfinished-component";

export default function RequisitionContents({ activeTab }: { activeTab: RequisitionTabs }) {
    switch (activeTab) {
        case RequisitionTabs.CREATE_REQUISITION:
            return <CreateRequisitionComponent />
        case RequisitionTabs.UNFINISHED:
            return <UnfinishedComponent />
        case RequisitionTabs.MY_REQUISITIONS:
            return <MyRequisitionComponent />
        default:
            return null
    }
}


