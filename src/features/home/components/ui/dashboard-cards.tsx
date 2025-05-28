"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import Brazil from "@react-map/brazil"
import PieDashboard from "@/features/home/components/ui/pie-chart"

export default function DashboardCards() {
    const cityColors = {
        "Amazonas": "#00FF00",
        "Rondônia": "#00FF00",
        "Paraná": "#00FF00",
        "São Paulo": "#00FF00",
        "Santa Catarina": "#00FF00",
        "Rio Grande do Sul": "#00FF00",
        "Espírito Santo": "#00FF00",
        "Sergipe": "#00FF00",
        "Distrito Federal": "#00FF00",
    }

    return (
        <div className="grid grid-cols-4 gap-6 py-4">
            <Card className="col-span-1">
                <CardHeader className="pb-2">
                    <CardTitle className="text-foreground text-lg font-semibold">Sales target</CardTitle>
                    <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-foreground">Good</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-foreground">Bad</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center pb-4">
                    <div className="relative w-full max-w-[100px] h-[100px]">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray={`${67 * 2.51} ${(100 - 67) * 2.51}`}
                                className="transition-all duration-1000 ease-out"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ef4444" />
                                    <stop offset="30%" stopColor="#f97316" />
                                    <stop offset="60%" stopColor="#eab308" />
                                    <stop offset="100%" stopColor="#22c55e" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-foreground">67%</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="col-span-1">
                <CardHeader className="pb-2">
                    <CardTitle className="text-foreground text-lg font-semibold">Customer activity</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center pb-4 w-full">
                    <div className="relative w-full max-w-[120px] h-[150px]">
                        <PieDashboard />
                    </div>
                </CardContent>
            </Card>

            <Card className="col-span-2">
                <CardHeader className="pb-2">
                    <CardTitle className="text-foreground text-lg font-semibold">Active Stores by state</CardTitle>
                    <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-foreground">Active</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-foreground">Inactive</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center pb-4">
                    <div className="w-full h-auto">
                        <Brazil type="select-multiple" mapColor="red" cityColors={cityColors} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
