import FAQPage from '@/templates/landing/FAQPage';
import { prefetchFAQData } from '@/hooks/prefetch.hook';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';


const faq = async () => {
    const queryClient = new QueryClient();
    await prefetchFAQData(queryClient);
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <FAQPage />
        </HydrationBoundary>
    );
}
export default faq;