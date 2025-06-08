import {OrderManagementTabs} from '../enums/order-management-tabs'
import {atom} from "jotai";

export const activeOrderManagementTabState = atom(OrderManagementTabs.REQUISITIONS)
