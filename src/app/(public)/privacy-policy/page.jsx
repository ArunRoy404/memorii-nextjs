import { prefetchPrivacyData } from '@/hooks/prefetch.hook';
import getQueryClient from '@/lib/getQueryClient';
import PrivacyPolicyPage from '@/templates/landing/PrivacyPolicyPage';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

const PrivacyPolicy = async () => {
    const queryClient = getQueryClient()
    await prefetchPrivacyData(queryClient)
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PrivacyPolicyPage />
        </HydrationBoundary>
    )

}
export default PrivacyPolicy;