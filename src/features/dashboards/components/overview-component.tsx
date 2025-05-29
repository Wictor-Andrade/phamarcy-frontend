import {SectionCards} from "@/features/home/components/ui/section-cards";
import DashboardCards from "@/features/home/components/ui/dashboard-cards";
import {ChartAreaInteractive} from "@/components/chart-area-interactive";
import {DataTable} from "@/components/data-table";
import data from "@/features/home/data.json";

export default function OverviewComponent() {
    return (
        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="p-4 lg:px-6 gap-4">
                    <SectionCards />
                    <DashboardCards />
                    <ChartAreaInteractive />
                </div>
                <DataTable data={data} />
            </div>
        </div>
    )
}
