import TemplatesPage from '@/templates/landing/TemplatesPage';
import { prefetchTemplatesData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';

const page = async ({ searchParams }) => {
    const params = await searchParams
    const currentPage = Number(params?.page) || 1

    const queryClient = getQueryClient()
    await prefetchTemplatesData(queryClient, currentPage)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TemplatesPage currentPage={currentPage} />
        </HydrationBoundary>
    )
}
export default page;