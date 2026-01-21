import TemplatesPage from '@/templates/landing/TemplatesPage';
import { prefetchTemplatesData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';

const page = async () => {
    const queryClient = getQueryClient()
    await prefetchTemplatesData(queryClient)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TemplatesPage />
        </HydrationBoundary>
    )
}
export default page;