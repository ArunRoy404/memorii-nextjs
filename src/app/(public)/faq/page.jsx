import FAQPage from '@/templates/landing/FAQPage';
import { prefetchFAQData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/lib/getQueryClient';


const faq = async () => {
    const queryClient = getQueryClient();
    await prefetchFAQData(queryClient);
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <FAQPage />
        </HydrationBoundary>
    );
}
export default faq;