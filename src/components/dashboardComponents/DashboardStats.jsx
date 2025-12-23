import { Card, CardContent } from '@/components/ui/card';
import dashboardStatData from '@/data/dashboardStatData';

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-5 gap-4 mb-8">
            {dashboardStatData.map((stat, index) => (
                <Card key={index} className="border-0 shadow-sm p-0!">
                    <CardContent className="p-6">
                        <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center mb-3`}>
                            <stat.icon className={`w-5 h-5 text-white`} />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default DashboardStats;