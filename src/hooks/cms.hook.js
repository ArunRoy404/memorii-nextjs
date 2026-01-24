// src/hooks/useSections.js
import { useQuery } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 5 * 60 * 1000;

export const getDynamicSections = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dynamic-section`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const getSlider = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/slider`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetSections = () => {
    return useQuery({
        queryKey: ['dynamic-sections'],
        queryFn: getDynamicSections,
        staleTime: DEFAULT_STALE_TIME,
    });
};

export const useGetSlider = () => {
    return useQuery({
        queryKey: ['slider'],
        queryFn: getSlider,
        staleTime: DEFAULT_STALE_TIME,
    });
};

// Work Steps
export const getWorkSteps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work-steps`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetWorkSteps = () => {
    return useQuery({
        queryKey: ['work-steps'],
        queryFn: getWorkSteps,
        staleTime: DEFAULT_STALE_TIME,
    });
};

// FAQs
export const getFaqs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faq`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetFaqs = () => {
    return useQuery({
        queryKey: ['faqs'],
        queryFn: getFaqs,
        staleTime: DEFAULT_STALE_TIME,
    });
};


export const getFooter = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/footer-menu`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetFooter = () => {
    return useQuery({
        queryKey: ['footer'],
        queryFn: getFooter,
        staleTime: DEFAULT_STALE_TIME,
    });
};

export const getTermsConditions = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/terms-conditions`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetTermsConditions = () => {
    return useQuery({
        queryKey: ['terms-conditions'],
        queryFn: getTermsConditions,
        staleTime: DEFAULT_STALE_TIME,
    });
};

export const getPrivacyPolicy = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetPrivacyPolicy = () => {
    return useQuery({
        queryKey: ['privacy-policy'],
        queryFn: getPrivacyPolicy,
        staleTime: DEFAULT_STALE_TIME,
    });
};


export const getAboutUsSection = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about-us`);
    if (!res.ok) throw new Error('Network response was not ok');
    const result = await res.json();
    return result.data;
};

export const useGetAboutUsSection = () => {
    return useQuery({
        queryKey: ['about-us-section'],
        queryFn: getAboutUsSection,
        staleTime: DEFAULT_STALE_TIME,
    });
};
