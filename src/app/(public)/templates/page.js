import TemplatesPage from '@/templates/landing/TemplatesPage';
import { prefetchTemplatesData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const page = async () => {
    const queryClient = new QueryClient()
    await prefetchTemplatesData(queryClient)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TemplatesPage />
        </HydrationBoundary>
    )
}
export default page;