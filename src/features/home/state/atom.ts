import {HomeTabs} from '@/features/home/enums/home-tabs'
import {atom} from "jotai";

export const activeHomeTabState = atom(HomeTabs.Overview)
