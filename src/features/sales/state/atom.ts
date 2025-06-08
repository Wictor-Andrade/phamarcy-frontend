import {SalesTabs} from '@/features/sales/enums/sales-tabs'
import {atom} from "jotai";

export const activeSalesTabState = atom(SalesTabs.SALES_POINT)