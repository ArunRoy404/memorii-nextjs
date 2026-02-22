import { Skeleton } from '@/components/ui/skeleton';


export default function DashboardSkeleton({ count = 6 }) {
    return (
        <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(count)].map((_, index) => (
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
    )
}