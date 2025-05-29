"use client"

import {Pie, PieChart} from "recharts"

import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart"

const chartData = [
    { category: "Paraná", visitors: 5900, fill: "var(--color-pr)" },
    { category: "Rondônia", visitors: 2400, fill: "var(--color-ro)" },
    { category: "Rio Grande do Sul", visitors: 2200, fill: "var(--color-rs)" },
    { category: "Paraíba", visitors: 1720, fill: "var(--color-pb)" },
    { category: "Others", visitors: 6000, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    ro: {
        label: "Rondônia",
        color: "hsl(var(--chart-1))",
    },
    pr: {
        label: "Paraná",
        color: "hsl(var(--chart-2))",
    },
    rs: {
        label: "Rio Grande do Sul",
        color: "hsl(var(--chart-3))",
    },
    pb: {
        label: "Paraíba",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Others",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function PieDashboard() {
    return (
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[200px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="category"
                        height={100}
                        width={100}
                        cx="50%"
                        cy="50%"
                        fill="#8884d8"
                        label={({ category, percent }) =>
                            `${category} ${(percent * 100).toFixed(0)}%`
                        }
                    />
                </PieChart>
            </ChartContainer>
    )
}
