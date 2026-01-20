import { getDynamicSections, getSlider, getWorkSteps, getFaqs } from "./cms.hook";

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
        queryClient.prefetchQuery({
            queryKey: ['work-steps'],
            queryFn: getWorkSteps,
        }),
        queryClient.prefetchQuery({
            queryKey: ['faqs'],
            queryFn: getFaqs,
        }),
    ]);
}

export const prefetchTermsData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
        }),
    ]);
}

export const prefetchContactData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
        }),
    ]);
}

export const prefetchTemplatesData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
        }),
    ]);
}

export const prefetchFAQData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
        }),
        queryClient.prefetchQuery({
            queryKey: ['faqs'],
            queryFn: getFaqs,
        }),
    ]);
}
