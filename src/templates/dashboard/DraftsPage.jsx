'use client'

import DashboardCard from '@/components/dashboardComponents/DashboardCard';
import { useGetAllDrafts } from '@/hooks/dashboard/dashboard.hook';
import { Skeleton } from '@/components/ui/skeleton';
import CommonAlert from '@/components/common/CommonAlert/CommonAlert';

function DraftsPage() {
    const { data: drafts, isLoading, isError } = useGetAllDrafts();

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="space-y-4">
                            <Skeleton className="aspect-video w-full rounded-xl bg-gray-200" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-1/4 bg-gray-200" />
                                <Skeleton className="h-6 w-3/4 bg-gray-200" />
                                <Skeleton className="h-4 w-1/2 bg-gray-200" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


    if (isError) {
        return (
            <div className="max-w-7xl mx-auto">
                <CommonAlert
                    alert={{
                        message: "Network connection error. Failed to load drafts.",
                        type: "destructive"
                    }}
                />
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {drafts?.map((item, index) => {
                        const card = {
                            title: item?.title || (item?.type === 'ecard' ? 'Untitled E-Card' : 'Untitled Memory Book'),
                            type: item?.type === 'ecard' ? 'e-card' : 'e-memory-book',
                            lastEdited: item?.data?.updated_at ? `Last edited ${new Date(item?.data?.updated_at).toLocaleDateString()}` : 'Date unknown',
                            status: 'Draft',
                            image: item?.data?.template?.image,
                            viewButton: true,
                            editButton: true,
                        };
                        return <DashboardCard key={index} card={card} />;
                    })}
                </div>
                {drafts?.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No drafts found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DraftsPage;