import { prefetchHowItWorksData } from '@/hooks/prefetch.hook';
import getQueryClient from '@/lib/getQueryClient';
import HowItWorksPage from '@/templates/landing/HowItWorksPage';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const HowItWorks = async () => {
    const queryClient = getQueryClient();
    await prefetchHowItWorksData(queryClient);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <HowItWorksPage />
        </HydrationBoundary>
    )
}
export default HowItWorks;