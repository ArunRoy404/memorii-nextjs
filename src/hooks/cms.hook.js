import { useQuery } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 5 * 60 * 1000;


const apiRequest = async (endpoint, tag) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
        next: {
            revalidate: 60, // Fallback: auto-refresh every 60 seconds
            tags: [tag]     // Urgent: allows instant manual refresh
        }
    });
    if (!res.ok) throw new Error(`Network response error at ${endpoint}`);
    const result = await res.json();
    return result.data;
};


// --- Pure Data Fetchers (Used by Server & Client) ---
export const getDynamicSections = () => apiRequest('/dynamic-section', 'sections');
export const getSlider = () => apiRequest('/slider', 'slider');
export const getWorkSteps = () => apiRequest('/work-steps', 'work-steps');
export const getFaqs = () => apiRequest('/faq', 'faqs');
export const getFooter = () => apiRequest('/footer-menu', 'footer');
export const getTermsConditions = () => apiRequest('/terms-conditions', 'legal');
export const getPrivacyPolicy = () => apiRequest('/privacy-policy', 'legal');
export const getAboutUsSection = () => apiRequest('/about-us', 'about');
export const getCTA = () => apiRequest('/cta', 'cta');
export const getHowItWorks = () => apiRequest('/get-how-to-create-or-work', 'how-it-works');
export const getContactInfo = () => apiRequest('/contact-information', 'contact');
export const getSummary = () => apiRequest('/summary', 'summary');

// --- React Query Hooks (Used in 'use client' components) ---
export const useGetSections = () => useQuery({ queryKey: ['dynamic-sections'], queryFn: getDynamicSections, staleTime: DEFAULT_STALE_TIME });
export const useGetSlider = () => useQuery({ queryKey: ['slider'], queryFn: getSlider, staleTime: DEFAULT_STALE_TIME });
export const useGetWorkSteps = () => useQuery({ queryKey: ['work-steps'], queryFn: getWorkSteps, staleTime: DEFAULT_STALE_TIME });
export const useGetFaqs = () => useQuery({ queryKey: ['faqs'], queryFn: getFaqs, staleTime: DEFAULT_STALE_TIME });
export const useGetFooter = () => useQuery({ queryKey: ['footer'], queryFn: getFooter, staleTime: DEFAULT_STALE_TIME });
export const useGetTermsConditions = () => useQuery({ queryKey: ['terms-conditions'], queryFn: getTermsConditions, staleTime: DEFAULT_STALE_TIME });
export const useGetPrivacyPolicy = () => useQuery({ queryKey: ['privacy-policy'], queryFn: getPrivacyPolicy, staleTime: DEFAULT_STALE_TIME });
export const useGetAboutUsSection = () => useQuery({ queryKey: ['about-us-section'], queryFn: getAboutUsSection, staleTime: DEFAULT_STALE_TIME });
export const useGetCTA = () => useQuery({ queryKey: ['cta'], queryFn: getCTA, staleTime: DEFAULT_STALE_TIME });
export const useGetHowItWorks = () => useQuery({ queryKey: ['how-it-works'], queryFn: getHowItWorks, staleTime: DEFAULT_STALE_TIME });
export const useGetContactInfo = () => useQuery({ queryKey: ['contact-info'], queryFn: getContactInfo, staleTime: DEFAULT_STALE_TIME });
export const useGetSummary = () => useQuery({ queryKey: ['summary'], queryFn: getSummary, staleTime: DEFAULT_STALE_TIME });