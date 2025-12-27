import DashboardHeader from '@/components/dashboardComponents/DashboardHeader';
import DashboardStats from '@/components/dashboardComponents/DashboardStats';

function DashboardHomePage() {
    return (
        <div className="h-full w-full">
            {/* Welcome Section */}
            <DashboardHeader
                title="Welcome back!"
                description={"Here's what's happening with your Memorii cards and books"}
            />

            {/* Stats Cards */}
            <DashboardStats />
        </div>
    );
}
export default DashboardHomePage;