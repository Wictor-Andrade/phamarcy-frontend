"use client";
import {HomeTabs} from "@/features/home/enums/home-tabs"
import OverviewComponent from "@/features/home/components/overview-component";
import AdminsComponent from "@/features/home/components/admins-component";
import TasksComponent from "@/features/home/components/tasks-component";
import ReportsComponent from "@/features/home/components/reports-component";

export default function HomeContent({ activeTab }: { activeTab: HomeTabs }) {
    switch (activeTab) {
        case HomeTabs.Overview:
            return <OverviewComponent />
        case HomeTabs.Tasks:
            return <TasksComponent />
        case HomeTabs.Reports:
            return <ReportsComponent />
        case HomeTabs.Admin:
            return <AdminsComponent />
        default:
            return null
    }
}
