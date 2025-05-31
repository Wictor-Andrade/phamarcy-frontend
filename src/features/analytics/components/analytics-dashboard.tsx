"use client"

import {Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis,} from "recharts"

const monthlyBarData = [
    { month: "Jan", currentYear: 8500, pastYear: 7200 },
    { month: "Feb", currentYear: 9800, pastYear: 8100 },
    { month: "Mar", currentYear: 8700, pastYear: 7800 },
    { month: "Apr", currentYear: 9200, pastYear: 8500 },
    { month: "May", currentYear: 8800, pastYear: 7600 },
    { month: "Jun", currentYear: 5500, pastYear: 6200 },
    { month: "Jul", currentYear: 8600, pastYear: 7400 },
    { month: "Aug", currentYear: 7500, pastYear: 6800 },
    { month: "Sep", currentYear: 7800, pastYear: 7100 },
    { month: "Oct", currentYear: 9100, pastYear: 8200 },
    { month: "Nov", currentYear: 9600, pastYear: 8400 },
]

const monthlyHorizontalData = [
    { month: "Mar", currentYear: 9200, pastYear: 7800 },
    { month: "Apr", currentYear: 8500, pastYear: 6500 },
    { month: "May", currentYear: 7800, pastYear: 8200 },
    { month: "Jun", currentYear: 7200, pastYear: 7600 },
    { month: "Jul", currentYear: 6800, pastYear: 7200 },
    { month: "Aug", currentYear: 6200, pastYear: 6800 },
    { month: "Sep", currentYear: 5800, pastYear: 6200 },
    { month: "Oct", currentYear: 5500, pastYear: 6000 },
    { month: "Nov", currentYear: 5200, pastYear: 7400 },
    { month: "Dec", currentYear: 5800, pastYear: 7800 },
]

const monthlyLineData = [
    { month: "Jan", currentYear: 850, pastYear: 720 },
    { month: "Feb", currentYear: 780, pastYear: 650 },
    { month: "Mar", currentYear: 820, pastYear: 580 },
    { month: "Apr", currentYear: 760, pastYear: 620 },
    { month: "May", currentYear: 800, pastYear: 680 },
    { month: "Jun", currentYear: 750, pastYear: 720 },
    { month: "Jul", currentYear: 780, pastYear: 740 },
    { month: "Aug", currentYear: 720, pastYear: 680 },
    { month: "Sep", currentYear: 650, pastYear: 620 },
    { month: "Oct", currentYear: 580, pastYear: 580 },
    { month: "Nov", currentYear: 520, pastYear: 540 },
    { month: "Dec", currentYear: 480, pastYear: 520 },
]

const monthlyLineData2 = [
    { month: "Jan", currentYear: 250, pastYear: 200 },
    { month: "Feb", currentYear: 320, pastYear: 280 },
    { month: "Mar", currentYear: 380, pastYear: 350 },
    { month: "Apr", currentYear: 420, pastYear: 400 },
    { month: "May", currentYear: 480, pastYear: 450 },
    { month: "Jun", currentYear: 520, pastYear: 480 },
    { month: "Jul", currentYear: 580, pastYear: 520 },
    { month: "Aug", currentYear: 620, pastYear: 580 },
    { month: "Sep", currentYear: 580, pastYear: 620 },
    { month: "Oct", currentYear: 520, pastYear: 680 },
    { month: "Nov", currentYear: 480, pastYear: 720 },
    { month: "Dec", currentYear: 780, pastYear: 850 },
]

const formatYAxis = (value: number) => {
    if (value >= 1000) return `$${value / 1000}K`
    return `$${value}`
}

export default function AnalyticsDashboardComponent() {
    return (
        <div className="p-6 grid grid-cols-2 gap-4 place-items-center">
            {[
                { title: "Monthly Sales", chart: (
                        <BarChart data={monthlyBarData} width={478}
                                  height={310}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <Bar dataKey="currentYear" fill="#2563eb" radius={[2, 2, 0, 0]} />
                            <Bar dataKey="pastYear" fill="#93c5fd" radius={[2, 2, 0, 0]} />
                        </BarChart>
                    )},
                { title: "Monthly Posts", chart: (
                        <LineChart data={monthlyLineData} width={478}
                                   height={310}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <Line type="monotone" dataKey="currentYear" stroke="#2563eb" strokeWidth={2} dot={{ fill: "#2563eb", strokeWidth: 2, r: 3 }} />
                            <Line type="monotone" dataKey="pastYear" stroke="#93c5fd" strokeWidth={2} dot={{ fill: "#93c5fd", strokeWidth: 2, r: 3 }} />
                        </LineChart>
                    )},
                { title: "Monthly Sales", chart: (
                        <BarChart layout="horizontal" data={monthlyHorizontalData} width={478}
                                  height={310}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis type="number" tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <YAxis type="category" dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <Bar dataKey="currentYear" fill="#2563eb" radius={[0, 2, 2, 0]} />
                            <Bar dataKey="pastYear" fill="#93c5fd" radius={[0, 2, 2, 0]} />
                        </BarChart>
                    )},
                { title: "Monthly Posts 2", chart: (
                        <LineChart data={monthlyLineData2}       width={478}
                                   height={310}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                            <Line type="monotone" dataKey="currentYear" stroke="#2563eb" strokeWidth={2} dot={{ fill: "#2563eb", strokeWidth: 2, r: 3 }} />
                            <Line type="monotone" dataKey="pastYear" stroke="#93c5fd" strokeWidth={2} dot={{ fill: "#93c5fd", strokeWidth: 2, r: 3 }} />
                        </LineChart>
                    )}
            ].map((c, i) => (
                <div key={i} className="p-4 shadow-sm border w-full h-full">
                    <h2 className="text-xl font-semibold mb-4">{c.title}</h2>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-tertiary" />
                            <span className="text-sm">Current Year</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-600 rounded-full" />
                            <span className="text-sm">Past Year</span>
                        </div>
                    </div>
                    <div>
                        {c.chart}
                    </div>
                </div>
            ))}
        </div>
    )
}
