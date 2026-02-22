'use client'

import { Card, CardContent } from '@/components/ui/card';
import dashboardStatData from '@/data/dashboardStatData';
import { useGetStats } from '@/hooks/dashboard/dashboard.hook';
import { Skeleton } from '@/components/ui/skeleton';
import CommonAlert from '@/components/common/CommonAlert/CommonAlert';

const DashboardStats = () => {
    const { data: stats, isLoading, isError } = useGetStats();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                {[...Array(5)].map((_, index) => (
                    <Card key={index} className="border-0 shadow-sm p-0!">
                        <CardContent className="p-6">
                            <Skeleton className="w-10 h-10 rounded-lg mb-3" />
                            <Skeleton className="h-3 w-20 mb-2" />
                            <Skeleton className="h-8 w-12" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }

    if (isError) {
        return (
            <div className="mb-8">
                <CommonAlert
                    alert={{
                        message: "Network connection error. Please try again later.",
                        type: "destructive"
                    }}
                />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {dashboardStatData.map((stat, index) => (
                <Card key={index} className="border-0 shadow-sm p-0!">
                    <CardContent className="p-6">
                        <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center mb-3`}>
                            <stat.icon className={`w-5 h-5 text-white`} />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-2xl md:text-3xl font-bold text-gray-900">
                            {stats?.[stat.key] || 0}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default DashboardStats;