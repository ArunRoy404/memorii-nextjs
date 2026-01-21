import { prefetchTermsData } from "@/hooks/prefetch.hook";
import getQueryClient from "@/lib/getQueryClient";
import TermsAndConditionPage from "@/templates/landing/TermsAndConditionPage";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const TermsAndCondition = async () => {
    const queryClient = getQueryClient()
    await prefetchTermsData(queryClient)

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <TermsAndConditionPage />
        </HydrationBoundary>
    )
}
export default TermsAndCondition;
