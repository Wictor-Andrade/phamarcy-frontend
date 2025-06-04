"use client";
import { SectionCards } from "@/features/home/components/ui/section-cards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import DashboardCards from "@/features/home/components/ui/dashboard-cards";

export default function OverviewComponent() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="p-4 lg:px-6 gap-4">
          <SectionCards />
          <DashboardCards />
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  );
}
