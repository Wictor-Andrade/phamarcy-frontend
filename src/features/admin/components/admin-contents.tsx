"use client";

import {AdminTabs} from "@/features/admin/enums/admin-tabs";
import CollaboratorsComponent from "@/features/admin/components/collaborators-component";
import NewCollaboratorsComponent from "@/features/admin/components/new-collaborators-component";

export default function AdminContents({ activeTab }: { activeTab: AdminTabs }) {
    switch (activeTab) {
        case AdminTabs.COLLABORATORS:
            return <CollaboratorsComponent />
        case AdminTabs.NEW_COLLABORATORS:
            return <NewCollaboratorsComponent />
        default:
            return null
    }
}
