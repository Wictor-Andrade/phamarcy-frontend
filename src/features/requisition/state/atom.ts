import {RequisitionTabs} from '../enums/order-management-tabs'
import {atom} from "jotai";

export const activeRequisitionTabState = atom(RequisitionTabs.CREATE_REQUISITION)
