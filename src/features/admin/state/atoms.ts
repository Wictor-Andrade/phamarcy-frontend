import {AdminTabs} from "@/features/admin/enums/admin-tabs";
import {atom} from "jotai/vanilla/atom";


export const activeAdminTabState = atom(AdminTabs.COLLABORATORS)