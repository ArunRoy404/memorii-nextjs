import { prefetchTermsData } from "@/hooks/prefetch.hook";
import TermsAndConditionPage from "@/templates/landing/TermsAndConditionPage";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

const TermsAndCondition = async () => {
    const queryClient = new QueryClient()
    await prefetchTermsData(queryClient)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TermsAndConditionPage />
        </HydrationBoundary>
    )
}
export default TermsAndCondition;
