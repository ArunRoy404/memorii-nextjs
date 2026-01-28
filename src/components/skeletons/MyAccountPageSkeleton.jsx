import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const MyAccountPageSkeleton = () => (
    <section>
        <div className="space-y-2 mb-8 px-1">
            <Skeleton className="h-8 w-40 md:w-48" />
            <Skeleton className="h-4 w-60 md:w-72" />
        </div>

        <Card className="border-0 shadow-sm">
            <CardContent className="p-4 md:p-8">
                <div className="mb-6">
                    <Skeleton className="h-6 w-32 mb-6" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b pb-6">
                        <Skeleton className="w-20 h-20 rounded-full" />
                        <div className="flex gap-3">
                            <Skeleton className="h-9 w-full md:w-28" />
                            <Skeleton className="h-9 w-full md:w-28" />
                        </div>
                    </div>

                    <div className="mb-6 border-b pb-6">
                        <Skeleton className="h-4 w-12 mb-2" />
                        <div className="flex flex-col md:flex-row gap-3">
                            <Skeleton className="grow h-10 md:h-8" />
                            <Skeleton className="h-10 md:h-8 w-full md:w-20" />
                        </div>
                    </div>

                    <div>
                        <Skeleton className="h-4 w-12 mb-2" />
                        <div className="flex flex-col md:flex-row gap-3">
                            <Skeleton className="grow h-10 md:h-8" />
                            <Skeleton className="h-10 md:h-8 w-full md:w-20" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </section>
);