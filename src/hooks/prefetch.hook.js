import { getDynamicSections, getSlider, getWorkSteps, getFaqs, getFooter, getTermsConditions, getPrivacyPolicy, getAboutUsSection, getCTA, getHowItWorks, getContactInfo } from "./cms.hook";
import { getCategories, getTemplates } from "./templates.hook";

const DEFAULT_STALE_TIME = 5 * 60 * 1000;

export const prefetchLayoutData = async (queryClient) => {
    await queryClient.prefetchQuery({
        queryKey: ['footer'],
        queryFn: getFooter,
        staleTime: DEFAULT_STALE_TIME,
    });
}

export const prefetchHomeData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['slider'],
            queryFn: getSlider,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['work-steps'],
            queryFn: getWorkSteps,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['faqs'],
            queryFn: getFaqs,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['about-us-section'],
            queryFn: getAboutUsSection,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['cta'],
            queryFn: getCTA,
            staleTime: DEFAULT_STALE_TIME,
        }),
    ]);
}

export const prefetchTermsData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['terms-conditions'],
            queryFn: getTermsConditions,
            staleTime: DEFAULT_STALE_TIME,
        }),
    ]);
}

export const prefetchContactData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['contact-info'],
            queryFn: getContactInfo,
            staleTime: DEFAULT_STALE_TIME,
        }),
    ]);
}

export const prefetchTemplatesData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['dynamic-sections'],
            queryFn: getDynamicSections,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['categories'],
            queryFn: getCategories,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['templates'],
            queryFn: getTemplates,
            staleTime: DEFAULT_STALE_TIME,
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
            staleTime: DEFAULT_STALE_TIME,
        }),
    ]);
}

export const prefetchPrivacyData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['privacy-policy'],
            queryFn: getPrivacyPolicy,
            staleTime: DEFAULT_STALE_TIME,
        }),
    ]);
}



export const prefetchHowItWorksData = async (queryClient) => {
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['how-it-works'],
            queryFn: getHowItWorks,
            staleTime: DEFAULT_STALE_TIME,
        }),
        queryClient.prefetchQuery({
            queryKey: ['how-it-works'],
            queryFn: getHowItWorks,
            staleTime: DEFAULT_STALE_TIME,
        }),
    ]);
}