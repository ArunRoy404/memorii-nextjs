import { getDynamicSections, getSlider } from "./cms.hook";

export const prefetchHomeData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
        }),
        queryClient.prefetchQuery({
            queryKey: ['slider'],
            queryFn: getSlider,
        }),
    ]);
}