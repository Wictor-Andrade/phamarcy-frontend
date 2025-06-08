import {AdminTabs} from "@/features/admin/enums/admin-tabs";
import {atom} from "jotai";


export const activeAdminTabState = atom(AdminTabs.COLLABORATORS)