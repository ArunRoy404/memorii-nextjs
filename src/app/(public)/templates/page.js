import TemplatesPage from '@/templates/landing/TemplatesPage';
import { prefetchTemplatesData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';

const page = async ({ searchParams }) => {
    const params = await searchParams
    const filters = {
        page: Number(params?.page) || 1,
        category: params?.category || '',
        occasion: params?.occasion || '',
    };

    const queryClient = getQueryClient()
    await prefetchTemplatesData(queryClient, filters)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TemplatesPage filters={filters} />
        </HydrationBoundary>
    )
}
export default page;