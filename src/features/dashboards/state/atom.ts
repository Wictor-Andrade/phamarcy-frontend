import {DashboardsTabs} from '@/features/dashboards/enums/dashboards-tabs'
import {atom} from "jotai";

export const activeDashboardsTabState = atom(DashboardsTabs.OVERVIEW)
